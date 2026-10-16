"use server";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "email" | "message" | "ack", string>>;
  /** Echoed back so the form keeps what the visitor typed after a failed submit. */
  values?: Record<"name" | "company" | "email" | "phone" | "role" | "message", string>;
};

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

/**
 * Sends contact-form submissions by email through Resend's HTTP API (no SDK needed).
 * Configure in Vercel → Project → Settings → Environment Variables:
 *   RESEND_API_KEY     – API key from resend.com
 *   CONTACT_TO_EMAIL   – where inquiries go (comma-separate multiple)
 *   CONTACT_FROM_EMAIL – a sender on a domain verified in Resend, e.g. "Website <web@crh-law.com>"
 */
export async function sendContact(_prev: ContactState, form: FormData): Promise<ContactState> {
  // Honeypot: real visitors never fill this hidden field.
  if (String(form.get("website") ?? "").trim()) return { status: "success" };

  const get = (k: string) => String(form.get(k) ?? "").trim().slice(0, 5000);
  const data = {
    name: get("name"),
    company: get("company"),
    email: get("email"),
    phone: get("phone"),
    role: get("role"),
    message: get("message"),
    ack: form.get("ack") === "on",
  };

  const { ack: _ack, ...values } = data;
  const errors: ContactState["errors"] = {};
  if (data.name.length < 2) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email)) errors.email = "Please enter a valid email address.";
  if (data.message.length < 10) errors.message = "Please include a short description (10+ characters).";
  if (!data.ack) errors.ack = "Please confirm you have read the notice.";
  if (Object.keys(errors).length) return { status: "error", errors, values, message: "Please correct the highlighted fields." };

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!key || !to || !from) {
    console.error("[contact] Email is not configured: set RESEND_API_KEY, CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL.");
    return {
      status: "error",
      values,
      message: "Our online form is temporarily unavailable. Please call (248) 626-7300 and we'll be glad to help.",
    };
  }

  const rows = [
    ["Name", data.name],
    ["Company", data.company || "—"],
    ["Email", data.email],
    ["Phone", data.phone || "—"],
    ["I am a(n)", data.role || "—"],
  ];
  const html = `<h2 style="font-family:Georgia,serif;color:#013882">New website inquiry</h2>
<table cellpadding="6" style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">
${rows.map(([k, v]) => `<tr><td style="color:#555"><strong>${k}</strong></td><td>${esc(v)}</td></tr>`).join("")}
</table>
<p style="font-family:Arial,sans-serif;font-size:14px;white-space:pre-wrap;border-top:1px solid #ddd;padding-top:12px">${esc(data.message)}</p>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: to.split(",").map((s) => s.trim()),
        reply_to: data.email,
        subject: `Website inquiry from ${data.name}${data.company ? ` (${data.company})` : ""}`,
        html,
      }),
    });
    if (!res.ok) throw new Error(`Resend responded ${res.status}: ${await res.text()}`);
  } catch (err) {
    console.error("[contact] send failed", err);
    return { status: "error", values, message: "Something went wrong sending your message. Please call (248) 626-7300." };
  }

  return { status: "success", message: "Thank you — your message has been sent. An attorney will be in touch shortly." };
}

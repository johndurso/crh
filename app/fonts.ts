import localFont from "next/font/local";

/**
 * IBM Plex Serif + IBM Plex Sans Devanagari, self-hosted from @fontsource (Latin subset)
 * so there is no runtime request to Google Fonts and Vercel serves them from the same origin.
 *
 * Plex Sans Devanagari ships very tall vertical metrics (for Devanagari script), which makes
 * Latin text sit high inside buttons and inflates line boxes. The ascent/descent overrides
 * below normalize it to Plex's Latin metrics so text centers correctly.
 */
// Paths must be string literals: next/font resolves them at build time.

export const plexSerif = localFont({
  variable: "--font-plex-serif",
  display: "swap",
  fallback: ["Georgia", "serif"],
  src: [
    { path: "../node_modules/@fontsource/ibm-plex-serif/files/ibm-plex-serif-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../node_modules/@fontsource/ibm-plex-serif/files/ibm-plex-serif-latin-400-italic.woff2", weight: "400", style: "italic" },
    { path: "../node_modules/@fontsource/ibm-plex-serif/files/ibm-plex-serif-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../node_modules/@fontsource/ibm-plex-serif/files/ibm-plex-serif-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
});

export const plexSans = localFont({
  variable: "--font-plex-sans",
  display: "swap",
  fallback: ["system-ui", "Segoe UI", "Arial", "sans-serif"],
  declarations: [
    { prop: "ascent-override", value: "102.5%" },
    { prop: "descent-override", value: "27.5%" },
    { prop: "line-gap-override", value: "0%" },
  ],
  src: [
    { path: "../node_modules/@fontsource/ibm-plex-sans-devanagari/files/ibm-plex-sans-devanagari-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../node_modules/@fontsource/ibm-plex-sans-devanagari/files/ibm-plex-sans-devanagari-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../node_modules/@fontsource/ibm-plex-sans-devanagari/files/ibm-plex-sans-devanagari-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
});

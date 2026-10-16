export const site = {
  name: "Charfoos Reiter Hébert PC",
  shortName: "CRH",
  url: "https://www.michigancompdefense.com",
  description:
    "Michigan workers' compensation defense attorneys representing employers and insurance carriers since 1977. Founding member of the National Workers' Compensation Defense Network (NWCDN).",
  phone: "(248) 626-7300",
  phoneHref: "tel:+12486267300",
  founded: 1977,
  address: {
    street: "30500 Northwestern Hwy, Suite 450",
    city: "Farmington Hills",
    state: "MI",
    zip: "48334",
  },
  mapsUrl:
    "https://maps.google.com/maps?q=30500+Northwestern+Hwy+%23450%2C+Farmington+Hills%2C+MI+48334",
  geo: { lat: 42.51173, lng: -83.32704 },
  nwcdnUrl: "https://www.nwcdn.com/about",
};

export type NavItem = { label: string; href: string; children?: NavItem[] };

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "NWCDN", href: "/national-workers-compensation-defense-network" },
  { label: "Workers' Compensation Lawyer", href: "/workers-compensation-lawyer" },
  {
    label: "About CRH",
    href: "/about",
    children: [
      { label: "About the Firm", href: "/about" },
      { label: "Our Team", href: "/about/our-team" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export const logoUrl = "/crh-logo.webp"
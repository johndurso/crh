const cdn = "https://le-cdn.hibuwebsites.com/e303a05fcbb64691b2d0680657d560f8/dms3rep/multi/opt";

export type CvSection = { heading: string; items: string[] };

export type Attorney = {
  slug: string;
  name: string;
  title: string;
  photo: string;
  summary: string;
  bio: string[];
  cv: CvSection[];
  email: string;
  directDial: string;
  linkedin?: string;
  highlights: string[];
};

export const team: Attorney[] = [
  {
    slug: "danial-j-hebert",
    name: "Danial J. Hébert",
    title: "President & Founding Shareholder",
    photo: `${cdn}/charfoos-reiter-hebert-pc-danial-j-hebert-1920w.png`,
    summary:
      "Founding Shareholder and President of the firm, a founding member of the NWCDN, and a Fellow of the College of Workers' Compensation Lawyers.",
    highlights: ["Founding member, NWCDN", "Fellow, College of Workers' Compensation Lawyers", "Martindale-Hubbell AV rated"],
    bio: [
      "Mr. Hébert is a founding Shareholder of Charfoos Reiter Hébert, PC and is its current President. He has limited his practice for the past 23 years to the defense of employers in workers' compensation matters.",
      "Danial is a member of the Michigan Bar Association and its Workers' Compensation Section and the American Bar Association. He is also on the Workers' Compensation Committees of both the Labor and Employment Law Section and the Tort Trial and Insurance Practice Section.",
      "He is a founding member of the National Workers' Compensation Defense Network (NWCDN) and has acted as the Chair of the Program Advisory Committee. Danial lectures frequently for the American Bar Association and NWCDN, as well as various other organizations. His “Lunch and Learn” series for clients in Michigan, Ohio, Illinois, Indiana, Iowa, and several other states has been in continuous demand (as well as a lot of fun) over the last several years.",
      "He is honored with an induction as a Fellow in the College of Workers' Compensation Lawyers — one of the youngest attorneys honored with this fellowship — and maintains the top peer review rating of “AV” granted by Martindale-Hubbell. He is an active member of the Michigan Self-Insurers' Association and the Michigan Public Risk Management Association, and a proud member of the Michigan State University Alumni Association.",
    ],
    cv: [],
    email: "Danial.Hebert@crh-law.com",
    directDial: "248-406-0042",
  },
  {
    slug: "james-a-reiter",
    name: "James A. Reiter",
    title: "Founding Partner",
    photo: `${cdn}/charfoos-reiter-hebert-pc-james-a-reiter-1920w.jpg`,
    summary:
      "Founding Partner and Founding Chair of the National Workers' Compensation Defense Network, named Best Lawyers' “Lawyer of the Year” in Workers' Compensation (2012).",
    highlights: ["Founding Chair, NWCDN", "Best Lawyers “Lawyer of the Year” 2012", "Michigan Super Lawyers 2010–present"],
    bio: [
      "James A. Reiter is a Founding Partner of Charfoos Reiter Hébert, PC, with a practice devoted to workers' compensation defense for employers and labor and employment law for management. He was a Founding Member and the Founding Chair of the National Workers' Compensation Defense Network, and continues to serve on its Executive Committee.",
      "He has been recognized by SEAK Inc. as one of the 50 most influential people in workers' compensation and has been “AV” rated by Martindale-Hubbell for over 25 years — the highest possible peer review rating.",
    ],
    cv: [
      {
        heading: "Education",
        items: ["Western Michigan University — B.S., 1963", "Michigan State University College of Law — J.D., 1968"],
      },
      {
        heading: "Admitted to Bar",
        items: ["Michigan — 1968", "U.S. District Court, Eastern & Western Districts of Michigan — 1968"],
      },
      {
        heading: "Areas of Practice",
        items: ["Workers' Compensation — Employer", "Labor & Employment Law — Management"],
      },
      {
        heading: "Publications",
        items: [
          "“The Workers' Disability Compensation Act,” Michigan Public Employment and Labor Relations Law, 1994 and 2004 Editions",
          "Workers' Compensation Update / Adjusters Desk Book — 1996 to 2018",
        ],
      },
      {
        heading: "Professional Activities",
        items: [
          "Founding Partner — Charfoos Reiter Hébert, PC",
          "Member — Michigan Bureau of Workers' Compensation Funds Advisory Committee, 2001",
          "Founding Member & Founding Chair — National Workers' Compensation Defense Network",
          "Former Council Member — Labor and Employment Law Section, American Bar Association",
        ],
      },
      {
        heading: "Honors",
        items: [
          "Fellow — The College of Labor and Employment Lawyers",
          "Fellow — The College of Workers' Compensation Lawyers",
          "Chair — National Workers' Compensation Defense Network, 2003–2006",
          "Member, Executive Committee — NWCDN, 2006–present",
          "Board of Governors — College of Workers' Compensation Lawyers, 2007–present",
          "Listed in Best Lawyers in America under Workers' Compensation Law",
          "Michigan Super Lawyers, 2010–present",
          "Named “Lawyer of the Year” in Workers' Compensation by Best Lawyers, 2012",
          "“AV” rated by Martindale-Hubbell for over 25 years",
          "Honored by SEAK Inc. as one of the 50 most influential people in Workers' Compensation",
        ],
      },
      {
        heading: "Memberships",
        items: [
          "Michigan Self-Insurers' Association",
          "Michigan Public Risk Management Association (MPRMA)",
          "College of Labor and Employment Lawyers",
          "National Workers' Compensation Defense Network",
          "College of Workers' Compensation Lawyers",
        ],
      },
      {
        heading: "Lecturer",
        items: [
          "American Bar Association Labor and Employment Law Advocacy Institute",
          "College and University Personnel Association, Michigan Chapter",
          "Council on Education in Management — 1994–1998; Conference Moderator 1996–1998",
          "Dept. of Occupational & Environmental Medicine — Pontiac Osteopathic Hospital",
          "Michigan Auto Dealers Self-Insured Fund",
          "MHA Service Corporation",
          "Michigan Plastic Processors Association",
          "Michigan Self-Insurers' Association",
          "ABA Labor and Employment Law Section — National Institute on ADA, 1997–1998",
          "Michigan Tooling Association",
          "National Association of Hospital Risk Managers",
          "“Workers' Compensation Update Series”",
          "ABA Workers' Compensation Committee — Mid-Winter meetings",
        ],
      },
      {
        heading: "Bar Association Memberships",
        items: [
          "State Bar of Michigan — Workers' Compensation Law Section; Labor & Employment Law Section",
          "Oakland County Bar Association",
          "American Bar Association — Labor & Employment Law Section (Section Governing Council 2003–2011; Liaison to OSHA, Workers' Compensation & Ethics Committees; Employment Rights & Responsibilities Committee, Management Chair 1999–2002; Program Chair 1994–1997)",
          "American Bar Association — Tort Trial & Insurance Practice Section, Workers' Compensation Committee",
        ],
      },
    ],
    email: "James.Reiter@crh-law.com",
    directDial: "248-406-0048",
  },
  {
    slug: "james-j-ranta",
    name: "James J. Ranta",
    title: "Attorney",
    photo: `${cdn}/charfoos-reiter-hebert-pc-james-j-ranta-1920w.png`,
    summary:
      "Co-author of the firm's Workers' Compensation Desk Reference and author of the Michigan section of the LexisNexis Larson Series. Argued Smitter v Thornapple Township before the Michigan Supreme Court.",
    highlights: ["J.D. cum laude, MSU College of Law", "Co-author, CRH Desk Reference", "Michigan Supreme Court advocate"],
    bio: [
      "James J. Ranta focuses his practice on workers' compensation defense for employers. Before joining the firm, he served as a Law Clerk with the Workers' Compensation Division of the Michigan Department of Attorney General from 2004 through 2006.",
      "He co-authored the Charfoos Reiter Hébert, PC Workers' Compensation Desk Reference — an extensive overview of the Michigan Workers' Disability Compensation Act for claims adjusters and self-insured employers — and authored the Michigan section of the LexisNexis Larson Series Workers' Compensation Emerging Issues Analysis.",
    ],
    cv: [
      {
        heading: "Education",
        items: [
          "Grand Valley State University — B.A., 2003",
          "Michigan State University College of Law — J.D. (Cum Laude), 2006",
        ],
      },
      { heading: "Bar Admissions", items: ["Michigan — 2006"] },
      { heading: "Areas of Practice", items: ["Workers' Compensation — Employer"] },
      {
        heading: "Professional Activities & Publications",
        items: [
          "Law Clerk — Michigan Department of Attorney General, Workers' Compensation Division, June 2004 through May 2006",
          "Co-Author — Charfoos Reiter Hébert, PC Workers' Compensation Desk Reference (last comprehensively updated 2017)",
          "Author — Michigan Section of LexisNexis Larson Series Workers' Compensation Emerging Issues Analysis, 2013–2018 Editions",
          "Author — “Measuring the Adequacy of Workers' Compensation Benefits in Michigan, 2004–2008” (article reviewing the statistical study), 2017",
          "National Workers' Compensation Defense Network",
          "Member — Michigan Self-Insurers' Association",
          "Member — Michigan Public Risk Management Association",
          "Co-presenter — “Just Call Me Friend: Social Media Content in Claims Handling,” Michigan Self-Insurers' Association Spring 2013 Conference, Traverse City",
        ],
      },
      {
        heading: "Bar Association Memberships",
        items: [
          "State Bar of Michigan — Workers' Compensation Law Section",
          "American Bar Association — Tort Trial & Insurance Practice Section; Labor and Employment Law Section; Young Lawyers' Division",
        ],
      },
      {
        heading: "Published Decisions of Significance",
        items: [
          "Smitter v Thornapple Township of Barry County / Second Injury Fund, 494 Mich 121 (2013) — benefit coordination under the WDCA and its effect on Second Injury Fund liability (Dual Employment Provision). Argued before the Michigan Supreme Court on January 9, 2013, representing Defendant-Appellee Thornapple Township through final disposition.",
        ],
      },
    ],
    email: "James.Ranta@crh-law.com",
    directDial: "248-406-0065",
    linkedin: "https://www.linkedin.com/in/james-ranta-5360641a/",
  },
  {
    slug: "denise-l-clemmons",
    name: "Denise L. Clemmons",
    title: "Attorney",
    photo: `${cdn}/charfoos-reiter-hebert-pc-denise-l-clemmons-1920w.png`,
    summary:
      "Experienced trial and appellate attorney with three decades in practice, including years on the plaintiff side that give her insight into how claimants' counsel operate.",
    highlights: ["30 years in practice", "Special Assistant Attorney General", "Trial & appellate experience"],
    bio: [
      "Ms. Clemmons is an experienced trial and appellate attorney. She has been with Charfoos Reiter Hébert, PC for over five years, with prior workers' compensation defense experience at another prominent Metro Detroit defense firm for many years. Denise is celebrating her 30th anniversary as a practicing attorney.",
      "Before joining the defense bar 25 years ago, Denise tried workers' compensation cases on behalf of injured employees, so she has real insight into how the plaintiff bar operates.",
      "Denise is a member of the Michigan Bar Association Workers' Compensation Law Section, the American Bar Association, and the Michigan Self-Insurers' Association. She has been appointed to several committees, including vocational rehabilitation and minority training, and serves as a Special Assistant Attorney General.",
      "She frequently lectures on workers' compensation issues and has been involved in litigation involving complicated legal questions, including catastrophic claims and unusual legal issues.",
    ],
    cv: [],
    email: "Denise.Clemmons@crh-law.com",
    directDial: "248-406-0050",
  },
];

export const getAttorney = (slug: string) => team.find((a) => a.slug === slug);

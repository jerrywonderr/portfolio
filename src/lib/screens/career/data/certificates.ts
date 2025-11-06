export interface CertificateItem {
  title: string;
  issuer: string;
  date: string;
  link: string;
}

export const certificates: CertificateItem[] = [
  {
    title: "ALX Gig at a Startup",
    issuer: "ALX",
    date: "2024",
    link: "https://drive.google.com/file/d/19l_gHDbZgRwGVKIOQsjMqTKJImlzihek/view?usp=drive_link",
  },
  {
    title: "ALX Software Engineering Program",
    issuer: "ALX & Holberton School",
    date: "2023",
    link: "https://drive.google.com/file/d/1CU4umCHUE9MPLn0RXRUcah3daKOaJRqA/view?usp=drive_link",
  },
  {
    title: "Google Africa Developer Scholarship (GADS)",
    issuer: "Google & Andela",
    date: "2020",
    link: "https://drive.google.com/file/d/1b6vdfCeISSDB4PJswE2iK_fVjinUZlzK/view?usp=drive_link",
  },
];

interface Project {
  img: string;
  title: string;
  description: string;
  stacks: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: "Honeytrap ",
    img: "/images/projects/honeytrap.png",
    description: "Honeytrap Landing Page",
    stacks: ["ReactJs", "Tailwind CSS"],
  },
  {
    title: "Protoslabs",
    img: "/images/projects/protos-labs.png",
    description:
      "Web Application for Risk management considers threats, vulnerabilities, controls, assets, and financial loss data.",
    stacks: ["React", "Material UI", "React Query"],
  },
  {
    title: "Axme IO",
    img: "/images/projects/axme.png",
    description: "Web Application for chatbot for whatsapp",
    stacks: ["NextJs", "NestJs", "Material UI", "PgSQL"],
  },
  {
    title: "Xcidic Internal Website",
    img: "/images/projects/xcidic-internal-website.png",
    description:
      "Web Application for company profile with CMS for managing content and job apply",
    stacks: ["NextJs", "NestJs", "Material UI", "PgSQL"],
    link: "https://xcidic.com",
  },
  {
    img: "/images/projects/coming-soon.png",
    title: "KPR WEB",
    description: "Web application for manage kpr payment",
    stacks: ["Laravel"],
  },
  {
    img: "/images/projects/coming-soon.png",
    title: "Pantau Online",
    description: "Web application to record jurnal & attendance student",
    stacks: ["Laravel"],
  },
  {
    img: "/images/projects/coming-soon.png",
    title: "Kejar Bahasa",
    description: "LMS (Learning Management System) with purchase course",
    stacks: ["Laravel"],
  },
  {
    img: "/images/projects/coming-soon.png",
    title: "Perpus Kita",
    description:
      "Web Application for manage data book, loan book & return book",
    stacks: ["Laravel"],
  },
  {
    img: "/images/projects/math-calculator.png",
    title: "Math Calculator",
    description: "Calculator For 10th grade math class lessons",
    stacks: ["Vanilla JS", "CSS Native"],
    link: "https://github.com/prasagungg/menghitung-peluang",
  },

  {
    img: "/images/projects/citragardenbintaro.png",
    title: "Neraya Serpong Company Profile",
    description: "Company profile website created with WordPress and elementor",
    stacks: ["Wordpress", "Elementor"],
    link: "https://rumahcitragardenbintaro.com",
  },
  {
    img: "/images/projects/narayaserpong.png",
    title: "Neraya Serpong Company Profile",
    description: "Company profile website created with WordPress and elementor",
    stacks: ["Wordpress", "Elementor"],
    link: "https://narayaserpong.co.id",
  },
  {
    img: "/images/projects/millennium-city.png",
    title: "Millennium City Company Profile",
    description: "Company profile website created with WordPress and elementor",
    stacks: ["Wordpress", "Elementor"],
    link: "https://millennium-city.net",
  },
  {
    img: "/images/projects/stand-the-man.png",
    title: "Stand The Man Company Profile",
    description: "Company profile website created with WordPress and elementor",
    stacks: ["Wordpress", "Elementor"],
    link: "http://stanley.gawangdev.my.id",
  },
];

export default projects;

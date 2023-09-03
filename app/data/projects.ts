interface Project {
  img: string;
  title: string;
  description: string;
  stacks: string[];
  link?: string;
}

const projects: Project[] = [
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

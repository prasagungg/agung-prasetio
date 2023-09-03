import { Mail, Linkedin, Instagram, GitHub } from "react-feather";

export default function Contact() {
  return (
    <div className="container px-3 mx-auto max-w-sm">
      <div className="flex items-center gap-3 mb-5">
        <Mail />

        <a href="mailto:agungprasetiodev@gmail.com">
          agungprasetiodev@gmail.com
        </a>
      </div>
      <div className="flex items-center gap-3 mb-5">
        <Linkedin />
        <a href="https://www.linkedin.com/in/agung-prasetio18" target="_blank">
          Agung Prasetio
        </a>
      </div>
      <div className="flex items-center gap-3 mb-5">
        <Instagram />
        <a href="https://www.instagram.com/prasagungg" target="_blank">
          @prasagungg
        </a>
      </div>
      <div className="flex items-center gap-3 mb-5">
        <GitHub />
        <a href="https://github.com/prasagungg" target="_blank">
          prasagungg
        </a>
      </div>
    </div>
  );
}

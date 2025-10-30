import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.scss";
export default function Footer() {
  return (
    <footer className="app-footer">
      <p>Made with ❤️ by Lucía Seoane</p>
      <div className="social-links">
        <a href="https://github.com/luciaSeo02" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/lucia-seo/" target="_blank">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}

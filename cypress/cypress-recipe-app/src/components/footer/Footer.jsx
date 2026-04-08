import "./Footer.css";
import designSvg from "../../assets/design.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <a
        className="footer__brandLink"
        href="https://github.com/ahmetsuat67"
        target="_blank"
        rel="noopener noreferrer"
      >
        <code className="footer__brand">{`<ASP/>`}</code>
      </a>

      <img className="footer__icon" src={designSvg} alt="design" />

      <span className="footer__copy">Copyright {new Date().getFullYear()}</span>
    </footer>
  );
};

export default Footer;
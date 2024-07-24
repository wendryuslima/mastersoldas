import { FaWhatsapp } from "react-icons/fa";
import "./header.style.css";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-title">
        <img src="./logo.png" alt="logo" height={80} width={200} />
      </div>
      <div className="header-item">
        <div className="header-items">Home</div>
        <ScrollLink
          activeClass="active"
          to="sobre-nos"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <div className="header-items">Sobre nós</div>
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="servicos"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <div className="header-items">Depoimentos</div>
        </ScrollLink>

        <div className="icon">
          <a
            href="https://wa.me/qr/G4NTWKF43OJWD1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={50} />
          </a>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Header;

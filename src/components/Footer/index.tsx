import { ThemeFooter } from "./style";
import { IoIosArrowUp } from "react-icons/io";
import logo from "../../assets/motors_shop_logo_white.svg";

const Footer = () => {
  return (
    <ThemeFooter>
      <img src={logo} alt="Motors Shop Logo" />
      <span>© 2022 - Todos os direitos reservados.</span>
      <button>
        <IoIosArrowUp />
      </button>
    </ThemeFooter>
  );
};

export default Footer;

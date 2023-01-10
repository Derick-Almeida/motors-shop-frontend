import { IoIosArrowUp } from "react-icons/io";

import logo from "../../assets/motors_shop_logo_white.svg";
import { ThemeFooter } from "./style";

const Footer = () => {
  return (
    <ThemeFooter>
      <img src={logo} alt="Motors Shop Logo" />
      <span>© 2022 - Todos os direitos reservados.</span>
      <button onClick={() => window.scrollTo(0, 0)}>
        <IoIosArrowUp />
      </button>
    </ThemeFooter>
  );
};

export default Footer;

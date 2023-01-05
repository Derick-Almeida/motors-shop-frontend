import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../../contexts/UserProvider";
import { useModalControls } from "../../Modal";

import UserChip from "../../UserChip";

import { ThemeDropBox } from "./style";

const Dropbox = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { openModal } = useModalControls();

  const { user } = useContext(UserContext);

  const exit = () => {
    localStorage.clear();

    if (location.pathname === "/") {
      window.location.reload();
    }

    return navigate("/");
  };

  return (
    <ThemeDropBox>
      <UserChip name={user.name} user />

      <ul>
         <li onClick={() => openModal("editProfile")}>Editar Perfil</li>
        <li onClick={() => openModal("editAddress")}>Editar endereço</li>
        <li><Link to={`/${user.id}/products`}>Meus Anúncios</Link></li>
        <li onClick={exit}>Sair</li>
      </ul>
    </ThemeDropBox>
  );
};

export default Dropbox;

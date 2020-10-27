import React from "react";
import styled from "styled-components";
import { useNavigate} from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons"

import { logout} from "../../firebase/auth"
import { useSession } from "../../context/UserProvider"

import { Wrapper } from "../shared/Wrapper";
import { Menu } from "../Menu/Menu";

import Logo from "../../assets/images/logo.png";

const StyledHeader = styled.div`
  display: block;
  height: 100px;
  background: ${(props) => props.theme.primary.normal};
  flex: 0 1 auto;

  // selecting the wrapper element
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      height: 80px;
    }
  }
  .logout {
    background: ${(props) => props.theme.primary.normal};
    border: none;
    border-radius: 5px;
  }
  .logout:hover, .logout:focus{
    transform: scale(0.9,0.9);
  }

`;

const logoutButton = <FontAwesomeIcon icon={faSignOutAlt} size="4x"/>;
interface HeaderProps {

}

function Header(props: HeaderProps) {
  const navigate = useNavigate();
  const {user} = useSession();

  const logoutUser = async () => {
  await logout();
  navigate("/login");
  return null;
  };

  return (
    <StyledHeader>
      <Wrapper>
        <img className="logo" src={Logo} alt="Logo" />
        <h1>The Bike Compatibility Project</h1>
        <Menu />
      {!!user && <button className="logout" onClick={logoutUser}>{logoutButton}</button>}
      </Wrapper>
    </StyledHeader>
  );
}

export default Header;

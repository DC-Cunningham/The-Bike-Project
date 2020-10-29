import React from "react";
import styled from "styled-components";
import { useNavigate} from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSignInAlt, faSignOutAlt, faUser } from "@fortawesome/free-solid-svg-icons"

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
  button {
    background: ${(props) => props.theme.primary.normal};
    border: none;
    border-radius: 5px;
  }
  button:hover, button:focus{
    transform: scale(0.9,0.9);
  }
  }

`;

const logoutButton = <FontAwesomeIcon icon={faSignOutAlt} size="2x"/>;
const profileButton = <FontAwesomeIcon icon={faUser} size="2x"/>;
const loginButton = <FontAwesomeIcon icon={faSignInAlt} size="2x"/>;
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

  const loginUser = () => {
    navigate("/login");
    };

  const profile = () => {
    navigate(`/profile/${user.uid}`);
    };
  
  return (
    <StyledHeader>
      <Wrapper>
        <img className="logo" src={Logo} alt="Logo" />
        <h1>The Bike Compatibility Project</h1>
        <Menu />
      {user ? (<div><button onClick={profile}>{profileButton}</button><button onClick={logoutUser}>{logoutButton}</button></div>):(<div><button onClick={loginUser}>{loginButton}</button></div>)}
      </Wrapper>
    </StyledHeader>
  );
}

export default Header;

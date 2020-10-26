import React from "react";
import styled from "styled-components";
import { useNavigate} from "react-router-dom"

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
`;

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
      {!!user && <button className="logout" onClick={logoutUser}>LOGOUT</button>}
      </Wrapper>
    </StyledHeader>
  );
}

export default Header;

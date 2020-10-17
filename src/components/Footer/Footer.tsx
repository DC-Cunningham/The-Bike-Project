import React from "react";
import styled from "styled-components";

import { Wrapper } from "../shared/Wrapper";

const StyledFooter = styled.div`
  display: block;
  height: 80px;
  background: ${(props) => props.theme.primary.light};
  flex: 0 1 auto;
  text-align: center;

  p {
    margin-top: 50px;
  }

  @media screen and (max-width: 1100px) {
    p {
      padding-bottom: 0;
      font-size: 12px;
    }
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <Wrapper>
        <p>
          &copy; Copyright {new Date().getFullYear()} The Beautiful Revolution
        </p>
      </Wrapper>
    </StyledFooter>
  );
}

export default Footer;

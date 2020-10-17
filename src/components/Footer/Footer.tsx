import React from "react";
import styled from "styled-components";

import { Wrapper } from "../shared/Wrapper";

const StyledFooter = styled.div`
  display: block;
  height: 100px;
  background: red;
  flex: 0 1 auto;
`;

function Footer() {
  return (
    <StyledFooter>
      <Wrapper>
        <div />
      </Wrapper>
    </StyledFooter>
  );
}

export default Footer;

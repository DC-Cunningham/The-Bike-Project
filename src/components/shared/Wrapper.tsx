import React from "react";
import styled from "styled-components";

// TODO: change the max width depending on the resolution (media queries)

const StyledWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

interface WrapperProps {
  children: React.ReactNode;
}

function Wrapper(props: WrapperProps) {
  return <StyledWrapper {...props} />;
}

export { Wrapper };

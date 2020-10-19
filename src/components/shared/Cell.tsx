import React from "react";
import styled from "styled-components";

// TODO: change the max width depending on the resolution (media queries)

const StyledCell = styled.div`
  height: 95%;
  width: 100%;
  margin-top: 40px;
  padding: 50px;
  background-color: rgba(245, 245, 246, 0.7);
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.13);
  -moz-box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.13);
  -webkit-box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.13);
`;

interface CellProps {
  children: React.ReactNode;
}

function Cell(props: CellProps) {
  return <StyledCell {...props} />;
}

export { Cell };

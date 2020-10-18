import React, { useMemo } from "react";
import styled from "styled-components";

function linespace(cardinality: number): number[] {
  const arr = [];
  const step = 100 / (cardinality - 1);
  for (let i = 0; i < cardinality; i++) {
    arr.push(0 + step * i);
  }
  return arr;
}

const StepperContainer = styled.div`
  display: flex;
`;

interface StepperProps {
  steps: number;
  completedSteps: number;
}

const Step = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: green;
  position: relative;
  top: -7.5px;
`;

const Bar = styled.div`
  flex: 1 0 auto;
  display: flex;
  background-color: green;
  height: 5px;
  justify-content: space-between;

  &::before {
    content: "";
    width: ${(props: { width: number }) => props.width}%;
  }
`;

function Stepper({ steps, completedSteps }: StepperProps) {
  const stepIncrements = useMemo(() => {
    return linespace(steps);
  }, [steps]);

  console.log(stepIncrements);
  return (
    <StepperContainer>
      <Bar width={stepIncrements[completedSteps - 1]}>
        {stepIncrements.map((step) => (
          <Step key={step} />
        ))}
      </Bar>
    </StepperContainer>
  );
}

export { Stepper };

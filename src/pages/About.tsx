import React from "react";

import { Stepper } from "../components/shared/Stepper";

function About() {
  return (
    <>
      <h2>About</h2>
      <Stepper steps={4} completedSteps={1} />
      <h2>About 2</h2>
    </>
  );
}

export default About;

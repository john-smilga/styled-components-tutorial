import React from "react";
import "./Heading.css";
import { ButtonWrapper } from "./Button";
export default function Heading() {
  return (
    <div>
      <h3 className="third">i'm separate css file</h3>
      <ButtonWrapper color="red" big>
        I'm from Header
      </ButtonWrapper>
    </div>
  );
}

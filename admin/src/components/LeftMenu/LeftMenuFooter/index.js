import React from "react";
import Wrapper, { A } from "./Wrapper";

function LeftMenuFooter() {
  return (
    <Wrapper>
      <div className="poweredBy">
        <A
          key="website"
          href="https://reactavancado.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Avançado
        </A>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;

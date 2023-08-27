import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis fuga tempore",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis fuga tempore",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis fuga tempore",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis fuga tempore",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

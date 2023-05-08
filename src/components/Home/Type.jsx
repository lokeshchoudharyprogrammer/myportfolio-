import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "𝒟𝑒𝓋𝑒𝓁𝑜𝓅𝑒𝓇",
          "𝒟𝑒𝑒𝓅 𝐿𝑒𝒶𝓇𝓃𝒾𝓃𝑔 𝐸𝓃𝑔𝒾𝓃𝑒𝑒𝓇",
          "𝑀𝐸𝑅𝒩 𝒮𝓉𝒶𝒸𝓀 𝒟𝑒𝓋𝑒𝓁𝑜𝓅𝑒𝓇",
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

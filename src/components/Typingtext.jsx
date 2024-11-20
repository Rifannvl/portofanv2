import React from "react";
import TypingEffect from "react-typing-effect";

const TypingEffectComponent = () => {
  return (
    <div className="text-4xl font-bold flex gap-2">
      <h1 className="text-4xl font-bold">Hi, I'm</h1>
      <TypingEffect
        text={["Rifan Afendi", "  Web Developer"]}
        speed={100}
        eraseDelay={1000}
        typingDelay={500}
        cursorRenderer={(cursor) => <h1>{cursor}</h1>}
      />
    </div>
  );
};

export default TypingEffectComponent;

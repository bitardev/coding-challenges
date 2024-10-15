import React from "react";
import useWindowResize from "./hooks/useWindowResize";

const CustomHookChallenge = () => {
  const { width, height } = useWindowResize();
  return (
    <div>
      <h3>Custom Hook challenge</h3>
      <p>Get width & height on window resize</p>
      <ul>
        <li>width: {width}px</li>
        <li>height: {height}px</li>
      </ul>
    </div>
  );
};

export default CustomHookChallenge;

import { useState, useDebugValue } from "react";
import { useSpring } from "react-spring";

function useHover({
  transformFrom = "none",
  transformTo = "none",
  backgroundTo = "none",
  backgroundFrom = "none",
  colorTo = "none",
  colorFrom = "none"
}) {
  const [hovered, setHovered] = useState(false);

  const animation = useSpring({
    transform: hovered ? transformTo : transformFrom,
    background: hovered ? backgroundTo : backgroundFrom,
    color: hovered ? colorTo : colorFrom
  });

  useDebugValue(hovered ?? "false");
  return [animation, setHovered];
}

export { useHover };

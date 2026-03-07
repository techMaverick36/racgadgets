import type { FC, ReactNode, CSSProperties, JSX } from "react";
import { useScrollReveal } from "./useScrollReveal";
import { cn } from "./cn";

type RevealDirection = "up" | "left" | "right" | "scale";

interface RevealWrapperProps {
  children: ReactNode;
  direction?: RevealDirection;
  delay?: number;       // milliseconds
  threshold?: number;
  className?: string;
  style?: CSSProperties;
  as?: keyof JSX.IntrinsicElements;
}

const hiddenStyles: Record<RevealDirection, CSSProperties> = {
  up:    { opacity: 0, transform: "translateY(40px)" },
  left:  { opacity: 0, transform: "translateX(-40px)" },
  right: { opacity: 0, transform: "translateX(40px)" },
  scale: { opacity: 0, transform: "scale(0.93)" },
};

const visibleStyle: CSSProperties = {
  opacity: 1,
  transform: "none",
};

/**
 * Wraps any child in a scroll-triggered reveal animation.
 * Uses IntersectionObserver via useScrollReveal hook.
 */
const RevealWrapper: FC<RevealWrapperProps> = ({
  children,
  direction = "up",
  delay = 0,
  threshold = 0.15,
  className,
  style,
  as: Tag = "div",
}) => {
  const [ref, visible] = useScrollReveal<HTMLDivElement>({ threshold });

  const transitionStyle: CSSProperties = {
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
    ...(visible ? visibleStyle : hiddenStyles[direction]),
    ...style,
  };

  return (
    // @ts-expect-error — polymorphic `as` prop, ref typing is fine at runtime
    <Tag ref={ref} className={cn(className)} style={transitionStyle}>
      {children}
    </Tag>
  );
};

export default RevealWrapper;

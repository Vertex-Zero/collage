import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Direction = "top" | "bottom";

type BlurTextProps = {
  text: string;
  className?: string;
  delay?: number;
  direction?: Direction;
  splitBy?: "word" | "letter";
};

export function BlurText({
  text,
  className,
  delay = 200,
  direction = "bottom",
  splitBy = "word",
}: BlurTextProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const tokens =
    splitBy === "word"
      ? text.split(/(\s+)/)
      : Array.from(text);

  const yFrom = direction === "bottom" ? 50 : -50;

  return (
    <div ref={ref} className={className}>
      {tokens.map((token, i) => {
        if (/^\s+$/.test(token)) return <span key={i}>{token}</span>;
        return (
          <motion.span
            key={i}
            style={{ display: "inline-block", willChange: "filter, opacity, transform" }}
            initial={{ filter: "blur(10px)", opacity: 0, y: yFrom }}
            animate={
              inView
                ? {
                    filter: ["blur(10px)", "blur(5px)", "blur(0px)"],
                    opacity: [0, 0.5, 1],
                    y: [yFrom, -5, 0],
                  }
                : undefined
            }
            transition={{
              duration: 0.7,
              delay: (delay / 1000) * i,
              times: [0, 0.5, 1],
              ease: "easeOut",
            }}
          >
            {token}
          </motion.span>
        );
      })}
    </div>
  );
}

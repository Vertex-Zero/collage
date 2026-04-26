import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Segment = { text: string; className?: string };

type Props = {
  text?: string;
  segments?: Segment[];
  className?: string;
  showAsterisk?: boolean;
  staggerDelay?: number;
};

export function WordsPullUp({
  text,
  segments,
  className,
  showAsterisk = false,
  staggerDelay = 0.08,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const allWords: { word: string; className?: string }[] = segments
    ? segments.flatMap((seg) =>
        seg.text.split(" ").map((word) => ({ word, className: seg.className }))
      )
    : (text ?? "").split(" ").map((word) => ({ word }));

  return (
    <div
      ref={ref}
      className={className}
      style={{ display: "inline-flex", flexWrap: "wrap", justifyContent: "inherit" }}
    >
      {allWords.map((entry, i) => {
        const isLast = i === allWords.length - 1;
        return (
          <motion.span
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : undefined}
            transition={{ delay: i * staggerDelay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={entry.className}
            style={{ display: "inline-block", marginRight: "0.25em", position: "relative" }}
          >
            {entry.word}
            {showAsterisk && isLast && (
              <span
                style={{
                  position: "absolute",
                  top: "0.05em",
                  right: "-0.35em",
                  fontSize: "0.31em",
                  fontWeight: 400,
                }}
              >
                *
              </span>
            )}
          </motion.span>
        );
      })}
    </div>
  );
}

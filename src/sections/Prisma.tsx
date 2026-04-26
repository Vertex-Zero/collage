import { motion, useInView, useScroll, useTransform, MotionValue } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useRef } from "react";
import { WordsPullUp } from "../components/WordsPullUp";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4";
const FEATURE_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4";

const ICON_2 =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85";
const ICON_3 =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85";
const ICON_4 =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85";

function Hero() {
  return (
    <section className="h-screen p-4 md:p-6">
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          src={HERO_VIDEO}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 noise-overlay opacity-[0.7] mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8"
          style={{ color: "rgba(225, 224, 204, 0.8)" }}
        >
          <ul className="flex gap-3 sm:gap-6 md:gap-12 lg:gap-14 text-[10px] sm:text-xs md:text-sm">
            {["Our story", "Collective", "Workshops", "Programs", "Inquiries"].map((l) => (
              <li key={l}>
                <a href="#" className="hover:text-[#E1E0CC]">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-8 relative">
            <h1
              className="text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw] font-medium leading-[0.85] tracking-[-0.07em] relative inline-block"
              style={{ color: "#E1E0CC" }}
            >
              <WordsPullUp text="Prisma" showAsterisk />
            </h1>
          </div>

          <div className="col-span-12 md:col-span-4 flex flex-col gap-6">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs sm:text-sm md:text-base"
              style={{ color: "rgba(225, 224, 204, 0.7)", lineHeight: 1.2 }}
            >
              Prisma is a worldwide network of visual artists, filmmakers and storytellers bound
              not by place, status or labels but by passion and hunger to unlock potential through
              our unique perspectives.
            </motion.p>

            <motion.button
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group flex items-center gap-2 hover:gap-3 transition-all rounded-full pl-6 pr-2 py-2 text-black font-medium text-sm sm:text-base self-start"
              style={{ backgroundColor: "#DEDBC8" }}
            >
              Join the lab
              <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowRight size={16} style={{ color: "#E1E0CC" }} />
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

function AnimatedLetter({
  char,
  progress,
  index,
  total,
}: {
  char: string;
  progress: MotionValue<number>;
  index: number;
  total: number;
}) {
  const charProgress = index / total;
  const opacity = useTransform(
    progress,
    [charProgress - 0.1, charProgress + 0.05],
    [0.2, 1]
  );
  return <motion.span style={{ opacity }}>{char}</motion.span>;
}

function About() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const text =
    "Over the last seven years, I have worked with Parallax, a Berlin-based production house that crafts cinema, series, and Noir Studio in Paris. Together, we have created work that has earned international acclaim at several major festivals.";
  const chars = Array.from(text);

  return (
    <section className="theme-prisma bg-black py-24 md:py-32 px-6">
      <div className="bg-[#101010] rounded-3xl max-w-6xl mx-auto p-10 md:p-16 text-center">
        <span className="text-[10px] sm:text-xs" style={{ color: "#DEDBC8" }}>
          Visual arts
        </span>
        <div className="mt-6 mb-12">
          <WordsPullUp
            segments={[
              { text: "I am Marcus Chen,", className: "font-normal" },
              { text: "a self-taught director.", className: "italic font-serif" },
              {
                text: "I have skills in color grading, visual effects, and narrative design.",
                className: "font-normal",
              },
            ]}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9] text-center"
          />
        </div>
        <p
          ref={ref}
          className="text-xs sm:text-sm md:text-base max-w-3xl mx-auto"
          style={{ color: "#DEDBC8" }}
        >
          {chars.map((c, i) => (
            <AnimatedLetter
              key={i}
              char={c}
              progress={scrollYProgress}
              index={i}
              total={chars.length}
            />
          ))}
        </p>
      </div>
    </section>
  );
}

function FeatureCardChecklist({
  number,
  title,
  icon,
  items,
}: {
  number: string;
  title: string;
  icon: string;
  items: string[];
}) {
  return (
    <div className="bg-[#212121] rounded-2xl p-6 md:p-8 flex flex-col h-full">
      <img
        src={icon}
        alt=""
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover mb-4"
      />
      <div className="text-base md:text-lg font-medium mb-1" style={{ color: "#E1E0CC" }}>
        <span className="text-gray-500 mr-2 text-sm">{number}</span>
        {title}
      </div>
      <ul className="mt-4 space-y-2 flex-1">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2 text-sm text-gray-400">
            <Check size={16} className="text-[#DEDBC8] mt-0.5 flex-shrink-0" />
            {it}
          </li>
        ))}
      </ul>
      <a
        href="#"
        className="inline-flex items-center gap-2 mt-6 text-sm"
        style={{ color: "#E1E0CC" }}
      >
        Learn more
        <ArrowRight size={14} style={{ transform: "rotate(-45deg)" }} />
      </a>
    </div>
  );
}

function Features() {
  const cardsRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(cardsRef, { once: true, margin: "-100px" });

  return (
    <section className="theme-prisma min-h-screen bg-black px-6 py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <WordsPullUp
            segments={[
              {
                text: "Studio-grade workflows for visionary creators.",
                className: "text-[#DEDBC8]",
              },
              {
                text: "Built for pure vision. Powered by art.",
                className: "text-gray-500",
              },
            ]}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-center max-w-4xl mx-auto"
          />
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:h-[480px]"
        >
          {[
            <div key="0" className="relative rounded-2xl overflow-hidden bg-[#212121] h-full min-h-[320px]">
              <video
                autoPlay
                loop
                muted
                playsInline
                src={FEATURE_VIDEO}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div
                className="absolute bottom-6 left-6 text-base md:text-lg font-medium"
                style={{ color: "#E1E0CC" }}
              >
                Your creative canvas.
              </div>
            </div>,
            <FeatureCardChecklist
              key="1"
              number="01"
              title="Project Storyboard."
              icon={ICON_2}
              items={[
                "Drag-and-drop scene builder",
                "Real-time collaboration",
                "Version history with diffs",
                "Export to PDF, video, or live link",
              ]}
            />,
            <FeatureCardChecklist
              key="2"
              number="02"
              title="Smart Critiques."
              icon={ICON_3}
              items={[
                "AI-powered shot analysis",
                "Personalized creative notes",
                "Plug into your existing tools",
              ]}
            />,
            <FeatureCardChecklist
              key="3"
              number="03"
              title="Immersion Capsule."
              icon={ICON_4}
              items={[
                "Silence notifications on demand",
                "Curated ambient soundscapes",
                "Sync to your shared schedule",
              ]}
            />,
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : undefined}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {card}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Prisma() {
  return (
    <div className="theme-prisma" style={{ fontFamily: "'Almarai', sans-serif" }}>
      <Hero />
      <About />
      <Features />
    </div>
  );
}

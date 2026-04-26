import { motion, useScroll, useTransform } from "framer-motion";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { useRef } from "react";
import { HlsVideo } from "../components/HlsVideo";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4";
const MISSION_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_132944_a0d124bb-eaa1-4082-aa30-2310efb42b4b.mp4";
const SOLUTION_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_125119_8e5ae31c-0021-4396-bc08-f7aebeb877a2.mp4";
const CTA_HLS =
  "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

function ConcentricLogo({ size = "small" }: { size?: "small" | "large" }) {
  const outer = size === "small" ? "w-7 h-7" : "w-10 h-10";
  const inner = size === "small" ? "w-3 h-3" : "w-5 h-5";
  return (
    <span className={`relative inline-flex items-center justify-center ${outer} rounded-full border-2 border-white/60`}>
      <span className={`${inner} rounded-full border border-white/60`} />
    </span>
  );
}

function MindloopNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 md:px-28 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ConcentricLogo />
          <span className="font-bold text-white tracking-tight">Mindloop</span>
        </div>
        <div className="hidden md:flex items-center gap-3 text-sm">
          {["Home", "How It Works", "Philosophy", "Use Cases"].map((label, i, arr) => (
            <span key={label} className="flex items-center gap-3">
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors"
              >
                {label}
              </a>
              {i < arr.length - 1 && <span className="text-white/30">•</span>}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2">
          {[Instagram, Linkedin, Twitter].map((Icon, i) => (
            <button
              key={i}
              aria-label="social"
              className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center text-white"
            >
              <Icon size={16} />
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function MindloopHero() {
  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src={HERO_VIDEO}
      />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent z-[1]" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-28 md:pt-32 max-w-5xl mx-auto">
        <motion.div
          {...fadeUp(0)}
          className="flex items-center gap-3 mb-8"
        >
          <div className="flex -space-x-2">
            {["#888", "#aaa", "#666"].map((c, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-black"
                style={{ background: c }}
              />
            ))}
          </div>
          <span className="text-white/60 text-sm">7,000+ people already subscribed</span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.1)}
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] text-white mb-6"
        >
          Get <span className="font-serif italic font-normal">Inspired</span> with Us
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="text-lg max-w-2xl mb-10"
          style={{ color: "hsl(var(--hero-subtitle))" }}
        >
          Join our feed for meaningful updates, news around technology and a shared journey toward
          depth and direction.
        </motion.p>

        <motion.form
          {...fadeUp(0.3)}
          onSubmit={(e) => e.preventDefault()}
          className="liquid-glass rounded-full p-2 max-w-lg w-full flex items-center gap-2"
        >
          <input
            type="email"
            placeholder="you@example.com"
            className="flex-1 bg-transparent border-none outline-none px-4 py-2 text-white placeholder:text-white/40"
          />
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white text-black rounded-full px-8 py-3 text-sm font-semibold tracking-wide"
            type="submit"
          >
            SUBSCRIBE
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

function SearchChanged() {
  const platforms = [
    { name: "ChatGPT", desc: "The conversational engine reshaping how we ask and answer." },
    { name: "Perplexity", desc: "Answer-first search that cites the web in real time." },
    { name: "Google AI", desc: "Generative summaries above the classic ten blue links." },
  ];
  return (
    <section className="relative bg-black px-6 md:px-28 pt-52 md:pt-64 pb-6 md:pb-9 text-center">
      <motion.h2
        {...fadeUp(0)}
        className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] text-white mb-8"
      >
        Search has <span className="font-serif italic font-normal">changed.</span> Have you?
      </motion.h2>
      <motion.p
        {...fadeUp(0.1)}
        className="text-white/60 text-lg max-w-2xl mx-auto mb-24"
      >
        The questions your customers ask aren't being typed into Google anymore. They're typed into
        a chat box — and someone's giving the answer.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-20">
        {platforms.map((p, i) => (
          <motion.div key={p.name} {...fadeUp(i * 0.1)} className="flex flex-col items-center">
            <div className="w-[200px] h-[200px] flex items-center justify-center mb-6">
              <div className="liquid-glass w-40 h-40 rounded-3xl flex items-center justify-center text-4xl font-serif italic text-white">
                {p.name[0]}
              </div>
            </div>
            <div className="font-bold text-white text-base mb-2">{p.name}</div>
            <p className="text-white/60 text-sm max-w-xs">{p.desc}</p>
          </motion.div>
        ))}
      </div>

      <p className="text-white/60 text-sm">
        If you don't answer the questions, someone else will.
      </p>
    </section>
  );
}

function ScrollWord({
  word,
  start,
  end,
  highlight,
  scrollYProgress,
}: {
  word: string;
  start: number;
  end: number;
  highlight: boolean;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
  return (
    <motion.span
      style={{
        opacity,
        color: highlight ? "hsl(var(--foreground))" : "hsl(var(--hero-subtitle))",
      }}
      className="inline-block mr-[0.25em]"
    >
      {word}
    </motion.span>
  );
}

function MissionScrollText() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.4"],
  });

  const p1 =
    "We're building a space where curiosity meets clarity — where readers find depth, writers find reach, and every newsletter becomes a conversation worth having.";
  const p2 =
    "A platform where content, community, and insight flow together — with less noise, less friction, and more meaning for everyone involved.";

  const highlightSet = new Set(["curiosity", "meets", "clarity"]);

  const renderWords = (text: string, baseStart: number, baseEnd: number) => {
    const words = text.split(" ");
    return words.map((word, i) => {
      const start = baseStart + ((baseEnd - baseStart) * i) / words.length;
      const end = baseStart + ((baseEnd - baseStart) * (i + 1)) / words.length;
      const cleaned = word.replace(/[—,.]/g, "");
      return (
        <ScrollWord
          key={`${baseStart}-${i}`}
          word={word}
          start={start}
          end={end}
          highlight={highlightSet.has(cleaned)}
          scrollYProgress={scrollYProgress}
        />
      );
    });
  };

  return (
    <div ref={ref} className="max-w-5xl mx-auto px-6 md:px-12 mt-12 text-center">
      <p className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-[-1px] mb-10">
        {renderWords(p1, 0, 0.6)}
      </p>
      <p className="text-xl md:text-2xl lg:text-3xl font-medium mt-10">
        {renderWords(p2, 0.4, 1)}
      </p>
    </div>
  );
}

function Mission() {
  return (
    <section className="relative pt-0 pb-32 md:pb-44 bg-black overflow-hidden">
      <div className="flex justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          src={MISSION_VIDEO}
          className="w-[800px] h-[800px] max-w-full object-cover rounded-full"
        />
      </div>
      <MissionScrollText />
    </section>
  );
}

function Solution() {
  const features = [
    { title: "Curated Feed", desc: "Algorithms tuned for substance, not outrage." },
    { title: "Writer Tools", desc: "Drafts, scheduling, and analytics in one place." },
    { title: "Community", desc: "Threaded conversation around every issue." },
    { title: "Distribution", desc: "Reach the right reader without paying for ads." },
  ];
  return (
    <section className="relative py-32 md:py-44 border-t border-white/10 bg-black px-6 md:px-28">
      <div className="text-center mb-12">
        <p className="text-xs tracking-[3px] uppercase text-white/60 mb-6">SOLUTION</p>
        <h2 className="text-4xl md:text-6xl text-white">
          The platform for <span className="font-serif italic">meaningful</span> content
        </h2>
      </div>

      <video
        autoPlay
        loop
        muted
        playsInline
        src={SOLUTION_VIDEO}
        className="w-full aspect-[3/1] object-cover rounded-2xl mb-20"
      />

      <div className="grid md:grid-cols-4 gap-8">
        {features.map((f) => (
          <div key={f.title}>
            <div className="font-semibold text-base text-white mb-2">{f.title}</div>
            <div className="text-white/60 text-sm">{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MindloopCTA() {
  return (
    <section className="relative py-32 md:py-44 border-t border-white/10 overflow-hidden">
      <HlsVideo
        src={CTA_HLS}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/45 z-[1]" />
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <ConcentricLogo size="large" />
        <h2 className="text-4xl md:text-6xl text-white mt-8 mb-6">
          Start Your <span className="font-serif italic">Journey</span>
        </h2>
        <p className="text-white/60 max-w-xl mb-10">
          Read the writers shaping the next era. Or become one of them — your audience is waiting.
        </p>
        <div className="flex gap-4">
          <button className="bg-white text-black rounded-lg px-8 py-3.5 font-semibold">
            Subscribe Now
          </button>
          <button className="liquid-glass rounded-lg px-8 py-3.5 text-white">
            Start Writing
          </button>
        </div>
      </div>
    </section>
  );
}

function MindloopFooter() {
  return (
    <footer className="py-12 px-8 md:px-28 bg-black border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
      <span className="text-white/60 text-sm">© 2026 Mindloop. All rights reserved.</span>
      <div className="flex gap-6 text-sm">
        {["Privacy", "Terms", "Contact"].map((l) => (
          <a key={l} href="#" className="text-white/60 hover:text-white transition-colors">
            {l}
          </a>
        ))}
      </div>
    </footer>
  );
}

export function Mindloop() {
  return (
    <div className="relative bg-black text-white">
      <MindloopNav />
      <MindloopHero />
      <SearchChanged />
      <Mission />
      <Solution />
      <MindloopCTA />
      <MindloopFooter />
    </div>
  );
}

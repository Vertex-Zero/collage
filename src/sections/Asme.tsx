import { useEffect, useRef } from "react";
import { ArrowRight, Globe, Instagram, Twitter } from "lucide-react";

const VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4";

const FADE_MS = 500;
const FADE_OUT_TRIGGER = 0.55; // seconds before end

function useVideoFadeLoop() {
  const ref = useRef<HTMLVideoElement | null>(null);
  const fadingOutRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const cancelRaf = () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };

    const animateOpacity = (target: number, durationMs: number) => {
      cancelRaf();
      const start = performance.now();
      const from = parseFloat(video.style.opacity || "1");
      const step = (now: number) => {
        const elapsed = now - start;
        const t = Math.min(1, elapsed / durationMs);
        video.style.opacity = String(from + (target - from) * t);
        if (t < 1) {
          rafRef.current = requestAnimationFrame(step);
        } else {
          rafRef.current = null;
        }
      };
      rafRef.current = requestAnimationFrame(step);
    };

    const onLoaded = () => {
      video.style.opacity = "0";
      fadingOutRef.current = false;
      animateOpacity(1, FADE_MS);
    };

    const onTimeUpdate = () => {
      if (!video.duration || isNaN(video.duration)) return;
      const remaining = video.duration - video.currentTime;
      if (remaining <= FADE_OUT_TRIGGER && !fadingOutRef.current) {
        fadingOutRef.current = true;
        animateOpacity(0, FADE_MS);
      }
    };

    const onEnded = () => {
      video.style.opacity = "0";
      setTimeout(() => {
        video.currentTime = 0;
        video.play().catch(() => {});
        fadingOutRef.current = false;
        animateOpacity(1, FADE_MS);
      }, 100);
    };

    video.addEventListener("loadeddata", onLoaded);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("ended", onEnded);

    return () => {
      cancelRaf();
      video.removeEventListener("loadeddata", onLoaded);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("ended", onEnded);
    };
  }, []);

  return ref;
}

export function Asme() {
  const videoRef = useVideoFadeLoop();
  return (
    <div className="theme-asme relative min-h-screen overflow-hidden bg-black flex flex-col">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        src={VIDEO}
        className="absolute inset-0 w-full h-full object-cover translate-y-[17%]"
        style={{ opacity: 0 }}
      />
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      <nav className="relative z-20 pl-6 pr-6 py-6">
        <div className="liquid-glass rounded-full px-6 py-3 flex items-center justify-between max-w-5xl mx-auto">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-white font-semibold text-lg">
              <Globe size={24} />
              Asme
            </div>
            <div className="hidden md:flex items-center gap-6">
              {["Features", "Pricing", "About"].map((l) => (
                <a
                  key={l}
                  href="#"
                  className="text-white/80 hover:text-white transition-colors text-sm font-medium"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white text-sm font-medium">
              Sign Up
            </a>
            <a href="#" className="liquid-glass rounded-full px-6 py-2 text-sm text-white">
              Login
            </a>
          </div>
        </div>
      </nav>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[20%]">
        <h1
          className="text-5xl md:text-6xl lg:text-7xl text-white mb-8 tracking-tight whitespace-nowrap"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Built for the curious
        </h1>

        <div className="max-w-xl w-full space-y-4">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="liquid-glass rounded-full pl-6 pr-2 py-2 flex items-center gap-3"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-white/40 text-base"
            />
            <button
              type="submit"
              aria-label="Submit"
              className="bg-white rounded-full p-3 text-black"
            >
              <ArrowRight size={20} />
            </button>
          </form>
          <p className="text-white text-sm leading-relaxed px-4">
            Stay updated with the latest news and insights. Subscribe to our newsletter today and
            never miss out on exciting updates.
          </p>
        </div>

        <button className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors mt-6">
          Read the Manifesto
        </button>
      </div>

      <div className="relative z-10 flex justify-center gap-4 pb-12">
        {[Instagram, Twitter, Globe].map((Icon, i) => (
          <button
            key={i}
            aria-label="social"
            className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all"
          >
            <Icon size={20} />
          </button>
        ))}
      </div>
    </div>
  );
}

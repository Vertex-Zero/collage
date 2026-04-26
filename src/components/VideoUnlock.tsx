import { useEffect } from "react";

/**
 * iOS Safari often blocks programmatic autoplay until the user interacts
 * with the page once. This component installs a single global listener
 * that, on the first touch/click, calls .play() on every <video> in the
 * document. After that, video state persists for the session.
 */
export function VideoUnlock() {
  useEffect(() => {
    const playAll = () => {
      const videos = document.querySelectorAll("video");
      videos.forEach((v) => {
        try {
          v.muted = true;
          v.setAttribute("muted", "");
          v.setAttribute("playsinline", "");
          const p = v.play();
          if (p && typeof p.catch === "function") p.catch(() => {});
        } catch {
          // ignore — some videos may still be loading or be torn down
        }
      });
    };

    const onFirst = () => {
      playAll();
      document.removeEventListener("touchstart", onFirst);
      document.removeEventListener("touchend", onFirst);
      document.removeEventListener("click", onFirst);
      document.removeEventListener("scroll", onFirst);
    };

    // capture: true so we run before React handlers stop propagation
    document.addEventListener("touchstart", onFirst, { capture: true, passive: true });
    document.addEventListener("touchend", onFirst, { capture: true, passive: true });
    document.addEventListener("click", onFirst, { capture: true });
    document.addEventListener("scroll", onFirst, { capture: true, passive: true });

    // Also retry on visibility change (e.g. user comes back to the tab)
    const onVisible = () => {
      if (document.visibilityState === "visible") playAll();
    };
    document.addEventListener("visibilitychange", onVisible);

    return () => {
      document.removeEventListener("touchstart", onFirst);
      document.removeEventListener("touchend", onFirst);
      document.removeEventListener("click", onFirst);
      document.removeEventListener("scroll", onFirst);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  return null;
}

import { useEffect, useRef } from "react";

type Props = React.VideoHTMLAttributes<HTMLVideoElement> & {
  src: string;
};

export function AutoVideo({ src, ...rest }: Props) {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    // iOS Safari requires muted + playsInline + an explicit play() call
    // for reliable inline autoplay. Set the attributes directly so they
    // are present in the DOM even if React's prop ordering changes.
    video.muted = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    const tryPlay = () => {
      const p = video.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };
    tryPlay();
    video.addEventListener("loadeddata", tryPlay);
    video.addEventListener("canplay", tryPlay);
    return () => {
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
    };
  }, [src]);

  return (
    <video
      ref={ref}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      {...rest}
    />
  );
}

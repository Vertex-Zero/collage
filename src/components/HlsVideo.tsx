import { useEffect, useRef } from "react";
import Hls from "hls.js";

type HlsVideoProps = React.VideoHTMLAttributes<HTMLVideoElement> & {
  src: string;
};

export function HlsVideo({ src, ...rest }: HlsVideoProps) {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    let hls: Hls | null = null;
    if (Hls.isSupported()) {
      hls = new Hls({ enableWorker: true });
      hls.loadSource(src);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
    }

    return () => {
      if (hls) hls.destroy();
    };
  }, [src]);

  return <video ref={ref} {...rest} />;
}

"use client";

import { useWeather } from "@/hooks/useWeather";
import getNewsFromTheme from "@/utils/getNewsFromTheme";
import React, { useEffect, useRef } from "react";

function SlidingNewsBanner() {
  const { weatherData } = useWeather();
  const trackRef = useRef<HTMLDivElement>(null);
  const offset = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let rafId: number;
    const speed = 0.5; // pixels per frame

    const animate = () => {
      offset.current -= speed;

      const width = track.scrollWidth / 2;

      if (offset.current <= -width) {
        offset.current += width;
      }

      track.style.transform = `translateX(${offset.current}px)`;
      rafId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(rafId);
  }, []);

  if (!weatherData) return <></>;

  const news = getNewsFromTheme(weatherData.theme);

  return (
    <div className="ticker font-semibold">
      <div
        ref={trackRef}
        className="ticker-track pointer-events-none flex gap-14 items-center tracking-wider"
      >
        {[...news, ...news].map((story, idx) => (
          <React.Fragment key={idx}>
            <span>{story}</span>
            <span className="text-2xl font-bold tacking-tighter">NEWS</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default SlidingNewsBanner;

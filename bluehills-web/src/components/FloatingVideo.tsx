'use client';

import React, { useRef, useEffect, useState } from 'react';
import Draggable from 'react-draggable';

export default function FloatingVideo() {
  const nodeRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  if (!ready) return null;

  return (
    <Draggable nodeRef={nodeRef as React.RefObject<HTMLElement>}>
      <div ref={nodeRef} className="fixed bottom-4 right-4 z-50 w-[320px] cursor-move">
        <div
          className="shadow-xl rounded-lg overflow-hidden bg-black relative group"
          onMouseEnter={() => setShowButton(true)}
          onMouseLeave={() => setShowButton(false)}
        >
          <video
            ref={videoRef}
            src="https://res.cloudinary.com/dsccaob3y/video/upload/v1744385233/vids/kbdvwens1wwudtuy5h9k.mp4"
            muted
            preload="metadata"
            width="320"
            height="200"
            className="w-full h-auto rounded-md"
          />
          {showButton && (
            <button
              onClick={togglePlay}
              className="absolute bottom-2 right-2 bg-white text-black text-lg px-3 py-1 rounded-full shadow-md transition-transform duration-200 hover:scale-110"
            >
              {isPlaying ? '⏸' : '▶️'}
            </button>
          )}
        </div>
      </div>
    </Draggable>
  );
}

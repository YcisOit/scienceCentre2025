'use client';

import { useRef, useEffect } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

export default function VideoPlayer() {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (!playerRef.current && videoRef.current) {
      playerRef.current = videojs(
        videoRef.current,
        {
          controls: true,
          responsive: true,
          fluid: false,       // Don't use fluid if setting custom size
          width: 800,         // Default width for fallback
          height: 160,        // Example: 160px height
          sources: [
            {
              src: '/video/1.mp4',
              type: 'video/mp4',
            },
          ],
        },
        () => {
          console.log('Player is ready');
        }
      );
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <div className="rounded-lg overflow-hidden shadow-md">
  <video
    src="/video/1.mp4" // Replace with your actual video path
    controls
    className="object-cover w-full h-full"
    width={600}
    height={400}
  />
</div>
  );
}

'use client';

import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Array of random YouTube video IDs


interface VideoSectionProps {
  thumbnailSrc: string;
}

export default function VideoSection({ thumbnailSrc }: VideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.section
      className="relative w-full max-w-[1240px] mx-auto px-4 xl:px-0 my-16 gradient-border hidden md:block"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="relative w-full aspect-video h-[616px] overflow-hidden flex items-center justify-center">
        {!isPlaying && (
          <>
            {/* Thumbnail */}
            <Image
              src={thumbnailSrc}
              alt="Video Thumbnail"
              fill
              className="object-cover"
            />
            {/* Play button */}
            <button
              onClick={() => setIsPlaying(true)}
              className="z-10 flex items-center justify-center w-16 h-16 cursor-pointer rounded-full bg-red-500/90 hover:bg-red-500 text-white text-2xl transition"
            >
              <FaPlay />
            </button>
          </>
        )}

        {isPlaying && (
          <iframe
            src={`https://www.youtube.com/embed/TlSNB7CUcTQ?si=ri1um8g3N6i6ijnz`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          />
        )}
      </div>
    </motion.section>
  );
}
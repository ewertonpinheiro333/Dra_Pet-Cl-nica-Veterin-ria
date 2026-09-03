import React from 'react';
import { PawIcon } from './icons/CustomIcons';

interface BackgroundBlobsProps {
  className?: string;
}

export const BackgroundBlobs: React.FC<BackgroundBlobsProps> = ({
  className = '',
}) => {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none ${className}`}
    >
      {/* Top Left Organic Blob */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-lilac-light/20 blur-3xl" />

      {/* Top Right Teal Glow */}
      <div className="absolute top-10 right-0 w-80 h-80 rounded-full bg-teal/15 blur-3xl" />

      {/* Bottom Center Depth */}
      <div className="absolute -bottom-40 left-1/3 w-[30rem] h-[30rem] rounded-full bg-lilac-dark/40 blur-3xl" />

      {/* Decorative Floating Paws in White with low opacity */}
      <div className="absolute top-24 left-[8%] text-white/[0.07] rotate-[-18deg]">
        <PawIcon size={56} />
      </div>

      <div className="absolute top-72 left-[4%] text-white/[0.05] rotate-[25deg]">
        <PawIcon size={40} />
      </div>

      <div className="absolute top-36 right-[12%] text-white/[0.08] rotate-[15deg]">
        <PawIcon size={64} />
      </div>

      <div className="absolute bottom-28 right-[6%] text-teal/[0.12] rotate-[-30deg]">
        <PawIcon size={48} />
      </div>

      <div className="absolute bottom-16 left-[20%] text-white/[0.06] rotate-[45deg]">
        <PawIcon size={52} />
      </div>
    </div>
  );
};

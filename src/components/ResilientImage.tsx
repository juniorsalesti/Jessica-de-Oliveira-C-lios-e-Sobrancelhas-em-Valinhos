import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
  fallbackLabel?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  loading = 'lazy',
  fallbackLabel,
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#FDFBF8] via-[#F5EFE7] to-[#EAE0D3] text-[#6B5344] p-6 text-center"
      >
        <Sparkles className="w-6 h-6 text-[#B59155]" strokeWidth={1.5} aria-hidden="true" />
        <span className="font-serif text-lg tracking-wide text-[#3A281E]">
          {fallbackLabel || 'Jessica de Oliveira'}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};

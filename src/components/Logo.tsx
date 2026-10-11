import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showWordmark?: boolean;
  variant?: 'dark' | 'light';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 36, 
  showWordmark = true,
  variant = 'dark'
}) => {
  const isLight = variant === 'light';

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* KB Monogram Vector */}
      <div 
        style={{ width: size, height: size }} 
        className="shrink-0 flex items-center justify-center"
      >
        <img 
          src={isLight ? "/kb-logo-white.svg" : "/kb-logo.svg"} 
          alt="KB Taller Creativo Logo" 
          className="w-full h-full object-contain"
        />
      </div>

      {showWordmark && (
        <span className={`text-base sm:text-lg font-bold tracking-tight whitespace-nowrap ${isLight ? 'text-white' : 'text-[#121212]'}`}>
          KB Taller Creativo
        </span>
      )}
    </div>
  );
};

import React, { useEffect, useRef } from 'react';
import { Instagram } from 'lucide-react';

const InstagramButton: React.FC = () => {
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const gsap = (window as any).gsap;
    if (gsap && buttonRef.current) {
        gsap.from(buttonRef.current, {
            y: 100,
            opacity: 0,
            duration: 1,
            delay: 2,
            ease: "power3.out"
        });
    }
  }, []);

  return (
    <a 
      ref={buttonRef}
      href="https://www.instagram.com/t_a_n_u_j_i_t/" 
      target="_blank" 
      rel="noreferrer"
      className="fixed bottom-8 right-8 z-[100] group"
    >
        <div className="relative flex items-center gap-3">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] tracking-widest bg-black/80 px-2 py-1 border border-white/10 backdrop-blur-md">
                SLIDE INTO DMS
            </span>
            <div className="w-14 h-14 rounded-full bg-black border border-white/20 flex items-center justify-center dm-glow backdrop-blur-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 to-orange-900/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Instagram className="w-5 h-5 relative z-10 text-white group-hover:scale-110 transition-transform" />
            </div>
        </div>
    </a>
  );
};

export default InstagramButton;
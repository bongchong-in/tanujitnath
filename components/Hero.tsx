import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const gsap = (window as any).gsap;
    if (gsap && titleRef.current) {
        gsap.from(titleRef.current, {
            y: 50,
            opacity: 0,
            duration: 1.5,
            ease: "power3.out",
            delay: 0.2
        });
    }
  }, []);

  return (
    <section className="h-screen w-full flex flex-col justify-center items-center relative px-4 overflow-hidden">
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-10 pointer-events-none">
            <p className="text-xs md:text-sm tracking-[0.5em] text-gray-400 mb-6 uppercase">
                Ex-Kvian | Mathematics Graduate
            </p>
            
            <h1 ref={titleRef} className="text-5xl md:text-8xl cinematic-font leading-[0.9] mix-blend-difference opacity-90">
                ENERGY INSIDE<br/>
                <span className="italic opacity-80">THE MODULUS</span>
            </h1>

            <div className="mt-8 flex flex-col items-center gap-2">
                <p className="text-[10px] border border-white/20 px-3 py-1 rounded-full uppercase bg-black/20 backdrop-blur-sm">
                    Current Location: The Underrated City of Northeast
                </p>
            </div>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-30 select-none">
            <img 
              src="https://raw.githubusercontent.com/bongchong-in/tanujitnath/refs/heads/main/images/herobg.jpg" 
              className="w-full h-full object-cover grayscale" 
              alt="Silchar Landscape"
            />
        </div>
        
        <div className="absolute bottom-12 w-full text-center">
            <p className="text-xs font-mono opacity-50 tracking-wider">"IN MY DELUSIONAL WORLD... I MISS THE SNOW"</p>
        </div>
    </section>
  );
};

export default Hero;
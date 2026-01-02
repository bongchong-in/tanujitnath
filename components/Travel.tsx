import React, { useEffect, useRef } from 'react';

const Travel: React.FC = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;

    if (gsap && ScrollTrigger && imgRef.current && containerRef.current) {
        gsap.registerPlugin(ScrollTrigger);
        
        gsap.to(imgRef.current, {
            y: -20,
            scale: 1.1,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    }
  }, []);

  return (
    <section className="min-h-screen w-full py-24 px-6 md:px-20 relative bg-black border-t border-white/10">
        
        <div className="flex justify-between items-end mb-20">
            <div>
                <h2 className="text-4xl md:text-6xl cinematic-font">The Range</h2>
                <p className="text-xs mt-2 text-gray-500 max-w-md">
                    "Function's Range is from one mountain to another mountain."
                </p>
            </div>
            <div className="hidden md:block text-right">
                <p className="text-[10px] tracking-widest">TRIP DEC24</p>
                <p className="text-[10px] tracking-widest">NATURE AND ME</p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div ref={containerRef} className="memory-container overflow-hidden relative aspect-[4/5] border border-white/5">
                <img 
                  ref={imgRef}
                  src="https://raw.githubusercontent.com/bongchong-in/tanujitnath/refs/heads/main/images/profile.jpg" 
                  className="w-full h-full object-cover memory-img" 
                  alt="Travel Memory"
                />
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md px-3 py-2 border border-white/10">
                    <p className="text-[9px] uppercase">Soundtrack: Ilahi</p>
                </div>
            </div>
            
            <div className="space-y-6">
                <div className="border-l border-white/20 pl-6">
                    <h3 className="text-xl cinematic-font italic mb-2">"Letting the road teach me"</h3>
                    <p className="text-xs text-gray-400 leading-relaxed font-mono">
                        Finding clarity in the hills of the Northeast. 
                        From tea gardens to river beds, these are the coordinates where time stops.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="glass-panel p-4">
                        <p className="text-[10px] opacity-50 uppercase">Elevation</p>
                        <p className="text-lg">High</p>
                    </div>
                    <div className="glass-panel p-4">
                        <p className="text-[10px] opacity-50 uppercase">Vibe</p>
                        <p className="text-lg">Chill</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Travel;
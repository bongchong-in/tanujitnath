import React from 'react';

const Friends: React.FC = () => {
  return (
    <section className="min-h-screen w-full py-24 bg-[#050505] relative overflow-hidden">
        
        <div className="scrolling-text-container opacity-5 absolute top-20 w-full pointer-events-none select-none">
            <h2 className="scrolling-text text-9xl font-bold uppercase">
                Our Chosen Family — Picnic 25 — Our Chosen Family — Picnic 25 —
            </h2>
        </div>

        <div className="max-w-6xl mx-auto px-6 pt-32 relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl cinematic-font">Social Variables</h2>
                <p className="text-xs font-mono mt-4 opacity-60">"POV: When friends become family"</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[60vh]">
                <div className="col-span-2 row-span-2 bg-[#111] memory-container overflow-hidden relative group border border-white/5">
                    <img src="https://raw.githubusercontent.com/bongchong-in/tanujitnath/refs/heads/main/images/withfriends.jpg" className="w-full h-full object-cover memory-img" alt="Friends Group" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                        <p className="text-sm tracking-widest font-mono border border-white px-4 py-1">PICNIC 25</p>
                    </div>
                </div>
                <div className="col-span-1 row-span-1 bg-[#111] memory-container overflow-hidden relative border border-white/5">
                    <img src="https://raw.githubusercontent.com/bongchong-in/tanujitnath/refs/heads/main/images/withff1.jpg" className="w-full h-full object-cover memory-img" alt="Friends Moment 1" />
                </div>
                <div className="col-span-1 row-span-1 bg-[#111] memory-container overflow-hidden relative border border-white/5">
                    <img src="https://raw.githubusercontent.com/bongchong-in/tanujitnath/refs/heads/main/images/withff.jpg" className="w-full h-full object-cover memory-img" alt="Friends Moment 2" />
                </div>
                <div className="col-span-2 row-span-1 bg-[#111] memory-container overflow-hidden relative border border-white/5">
                    <img src="https://raw.githubusercontent.com/bongchong-in/tanujitnath/refs/heads/main/images/dogs.jpg" className="w-full h-full object-cover memory-img" alt="Dogs" />
                </div>
            </div>
        </div>
    </section>
  );
};

export default Friends;
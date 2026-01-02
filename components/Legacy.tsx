import React from 'react';

const Legacy: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-20 border-t border-white/5 bg-black">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
                <h2 className="text-xl font-mono uppercase tracking-widest text-gray-400">Legacy Cache</h2>
                <p className="text-[10px] opacity-40 mt-1">DATA FROM 2015-2016 // ARCHIVED MEMORIES</p>
            </div>
            <div className="mt-4 md:mt-0">
                <p className="text-[10px] border border-white/20 px-3 py-1 rounded-full text-gray-500">
                    Status: Memory Only
                </p>
            </div>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            <div className="aspect-square border border-white/10 overflow-hidden relative group cursor-pointer">
                <img 
                    src="https://raw.githubusercontent.com/bongchong-in/tanujitnath/refs/heads/main/images/watercolor.jpg" 
                    alt="Watercolor 1" 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 grayscale group-hover:grayscale-0"
                />
                <p className="absolute bottom-2 left-2 text-[8px] font-mono text-white opacity-0 group-hover:opacity-100 bg-black/50 px-1">watercolor_01.jpg</p>
            </div>
            
            <div className="aspect-square border border-white/10 overflow-hidden relative group cursor-pointer">
                <img 
                    src="https://raw.githubusercontent.com/bongchong-in/tanujitnath/refs/heads/main/images/watercolor1.jpg" 
                    alt="Watercolor 2" 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 grayscale group-hover:grayscale-0"
                />
                <p className="absolute bottom-2 left-2 text-[8px] font-mono text-white opacity-0 group-hover:opacity-100 bg-black/50 px-1">watercolor_02.jpg</p>
            </div>
            
            <div className="aspect-square border border-white/10 overflow-hidden relative group cursor-pointer">
                <img 
                    src="https://raw.githubusercontent.com/bongchong-in/tanujitnath/refs/heads/main/images/watercolor2.jpg" 
                    alt="Watercolor 3" 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 grayscale group-hover:grayscale-0"
                />
                <p className="absolute bottom-2 left-2 text-[8px] font-mono text-white opacity-0 group-hover:opacity-100 bg-black/50 px-1">watercolor_03.jpg</p>
            </div>

            <div className="col-span-3 flex items-center justify-center border border-dashed border-white/10 bg-white/[0.02] p-4">
                <p className="text-[10px] text-center italic text-gray-500 font-mono">
                    "Throwback memories. Held, but page turned."
                </p>
            </div>
        </div>
    </section>
  );
};

export default Legacy;
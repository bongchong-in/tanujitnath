import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10 text-center bg-black relative z-10">
        <h2 className="text-xs tracking-[0.5em] mb-4">TANUJIT NATH</h2>
        <div className="flex justify-center gap-6 text-[10px] font-mono opacity-50">
            <span>MATHEMATICS GRADUATE</span>
            <span>•</span>
            <span>SILCHAR</span>
        </div>
        <div className="mt-12 space-y-2">
            <p className="text-[9px] text-gray-600">
                LOST IN CITIES, FOUND HIMSELF HERE.
            </p>
            <p className="text-[9px] text-gray-600 font-mono">
                Designed, gifted and supported by <a href="https://mxsstudio.edgentiq.com" target="_blank" rel="noreferrer" className="underline hover:text-gray-400 transition-colors">MxS Studio</a> with ❤️
            </p>
        </div>
    </footer>
  );
};

export default Footer;
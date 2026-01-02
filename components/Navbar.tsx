import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-start mix-blend-exclusion pointer-events-none">
        <div className="pointer-events-auto">
            <h1 className="text-xs font-bold tracking-[0.3em]">T_A_N_U_J_I_T</h1>
            <p className="text-[10px] opacity-60 mt-1">SILCHAR, ASSAM</p>
        </div>
        <div className="text-right pointer-events-auto">
            {/* Fixed: Use className instead of class for React */}
            <p className="text-[10px] font-bold">STATUS:</p>
            <div className="flex items-center gap-2 justify-end">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                {/* Fixed: Use className instead of class for React */}
                <p className="text-[10px] opacity-60">"CHILL GUY ENJOYING LIFE"</p>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;
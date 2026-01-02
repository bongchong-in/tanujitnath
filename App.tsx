import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import InstagramButton from './components/InstagramButton';
import Hero from './components/Hero';
import Travel from './components/Travel';
import Friends from './components/Friends';
import Legacy from './components/Legacy';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  
  // Initialize Smooth Scroll (Lenis)
  useEffect(() => {
    // We access Lenis from the window object since it's loaded via CDN in index.html
    // This avoids needing npm install for a quick template setup
    const Lenis = (window as any).Lenis;
    
    if (Lenis) {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }
  }, []);

  return (
    <>
      <div className="vertical-line"></div>
      <Navbar />
      <InstagramButton />
      <main>
        <Hero />
        <Travel />
        <Friends />
        <Legacy />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default App;
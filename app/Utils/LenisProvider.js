'use client';

import { useEffect } from 'react';
import Lenis from 'lenis'

export default function LenisProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,          // smooth but not floaty
      easing: (t) =>
        t === 1 ? 1 : 1 - Math.pow(2, -10 * t), // professional easing
      smoothWheel: true,
      smoothTouch: true,     // important for mobile UX
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return children;
}


// 'use client';

// import { useEffect } from 'react';
// import Lenis from 'lenis';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// export default function LenisProvider({ children }) {
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.1,
//       easing: (t) =>
//         t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
//       smoothWheel: true,
//       smoothTouch: false,
//     });

//     lenis.on('scroll', ScrollTrigger.update);

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);

//     ScrollTrigger.refresh();

//     return () => {
//       lenis.destroy();
//     };
//   }, []);

//   return children;
// }

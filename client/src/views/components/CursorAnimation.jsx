import { useEffect, useRef } from 'react';
import { particlesCursor } from 'threejs-toys';

export const CursorAnimation = () => {
    const initRef = useRef(false);

    useEffect(() => {
        if (initRef.current) return;
        initRef.current = true;

        const appCursor = document.getElementById('particles-hero-app');
        if (!appCursor) return;

        const pc = particlesCursor({
            el: appCursor,
            gpgpuSize: 512,
            colors: [0x00ff00, 0x0000ff],
            color: 0xff0000,
            coordScale: 0.5,
            noiseIntensity: 0.001,
            noiseTimeCoef: 0.0001,
            pointSize: 5,
            pointDecay: 0.0025,
            sleepRadiusX: 250,
            sleepRadiusY: 250,
            sleepTimeCoefX: 0.001,
            sleepTimeCoefY: 0.002
        });

        const clickHandler = () => {
            if (pc && pc.uniforms) {
                pc.uniforms.uColor.value.set(Math.random() * 0xffffff);
                pc.uniforms.uCoordScale.value = 0.001 + Math.random() * 2;
                pc.uniforms.uNoiseIntensity.value = 0.0001 + Math.random() * 0.001;
                pc.uniforms.uPointSize.value = 1 + Math.random() * 10;
            }
        };

        document.body.addEventListener('click', clickHandler);

        return () => {
            document.body.removeEventListener('click', clickHandler);
            if (appCursor) {
                // Safely remove only the canvas child so we don't destroy React siblings
                const canvas = appCursor.querySelector('canvas');
                if (canvas) {
                    appCursor.removeChild(canvas);
                }
            }
            initRef.current = false;
        };
    }, []);

    return (
        // 1. Aggiunto z-10 qui per posizionare la sezione sopra le stelle
        <section className="relative w-full h-screen bg-transparent overflow-hidden z-10">
            <style>{`
                #particles-hero-app {
                    width: 100%;
                    height: 100%;
                    position: relative;
                }

                #particles-hero-app canvas {
                    display: block;
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    inset: 0;
                    z-index: 0;
                    
                    /* IL TRUCCO MAGICO: Rende il nero della libreria completamente trasparente! */
                    mix-blend-mode: screen;
                }

                #hero-content {
                    position: absolute;
                    inset: 0;
                    z-index: 10;
                    height: 100%;
                    width: 100%;
                    pointer-events: none;
                }

                #hero-content h1, #hero-content p, #hero-content a {
                    text-shadow: 0 0 5px #ffffff, 0 0 20px #000, 0 0 30px #000;
                }
            `}</style>

            <div id="particles-hero-app"></div>

            <div id="hero-content" className="flex flex-col items-center justify-center px-6 text-center">
                <h1 className="text-[#ffffff] text-4xl sm:text-5xl md:text-7xl tracking-tight mb-2 font-['Impact',_sans-serif]">
                    CARLOS ALBERTO<br />SOLIZ PANIAGUA
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 mt-4 max-w-3xl">
                    A software Developer building iterative experiences.
                </p>

                <a 
                    href="#skills" 
                    className="pointer-events-auto absolute bottom-10 flex flex-col items-center animate-bounce text-gray-400 hover:text-white transition-colors duration-300"
                >
                    <span className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase mb-2">Scroll Down</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </a>
            </div>
        </section>
    );
};

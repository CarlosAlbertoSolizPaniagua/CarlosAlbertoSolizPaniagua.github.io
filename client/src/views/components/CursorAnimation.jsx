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
        <section className="relative w-full h-screen bg-[#14110F] overflow-hidden">
            {/* Embedded CSS */}
            <style>{`
                #particles-hero-app {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    /* VERY IMPORTANT: Must not be pointer-events: none so threejs-toys can track the cursor */
                }

                #particles-hero-app canvas {
                    display: block;
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    inset: 0;
                    z-index: 0; /* Keep canvas behind text */
                }

                #hero-content {
                    position: relative;
                    z-index: 10;
                    height: 100%;
                    width: 100%;
                    pointer-events: none; /* Let the mouse events pass through the text down to the canvas/wrapper */
                }

                #hero-content h1, #hero-content p, #hero-content a {
                    text-shadow: 0 0 5px #ffffff, 0 0 20px #000, 0 0 30px #000;
                }
            `}</style>

            {/* Unified App Container: Event listeners will be bound here by threejs-toys */}
            <div id="particles-hero-app">
                <div id="hero-content" className="flex flex-col items-center justify-center px-6 text-center">
                    <h1 className="text-[#ffffff] text-4xl sm:text-5xl md:text-7xl tracking-tight mb-2 font-['Impact',_sans-serif]">
                        Carlos Alberto<br />Soliz Paniagua
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 mt-4 max-w-3xl">
                        A software Developer building iterative experiences.
                    </p>
                </div>
            </div>
        </section>
    );
};

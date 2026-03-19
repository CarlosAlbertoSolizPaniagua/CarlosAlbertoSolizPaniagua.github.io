import { useEffect } from 'react';

/**
 * CVPage Component
 * 
 * Displays the user's Curriculum Vitae (CV) in a full-screen iframe
 * and provides a clear button to download the PDF directly.
 * Designed to look modern and integrate with the site's styling.
 * 
 * @returns {JSX.Element} The CV viewing page
 */
export function CVPage() {
    // Scroll to top when loading this page
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full min-h-screen bg-transparent text-[#F3F3F4] pt-24 px-6 pb-12 flex flex-col items-center">

            <div className="max-w-4xl w-full flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                <h1 className="text-3xl md:text-4xl font-bold font-['Impact',_sans-serif] tracking-wider text-white">
                    Curriculum Vitae
                </h1>

                <a
                    href="/assets/CV_Carlos_Soliz.pdf"
                    download="CV_Carlos_Soliz.pdf"
                    className="flex items-center gap-2 bg-white text-[#14110F] hover:bg-gray-200 px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                    </svg>
                    Download CV
                </a>
            </div>

            <div className="w-full max-w-4xl h-[70vh] bg-white rounded-xl overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.1)] border border-white/10 relative">
                {/* Fallback text if iframe is not supported or pdf is missing */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 z-0 text-center p-6">
                    <p className="mb-4">Loading CV document...</p>
                    <p className="text-sm">If the PDF doesn't load automatically, please use the download button above.</p>
                </div>

                {/* The iframe sits above the wrapper when loaded */}
                <iframe
                    src="/assets/CV_Carlos_Soliz.pdf"
                    className="relative z-10 w-full h-full border-0"
                    title="Curriculum Vitae Preview"
                />
            </div>

        </div>
    );
}

import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

/**
 * Navbar Component
 * 
 * Global navigation hook. Includes a dynamically rendered "Back" button
 * when the user navigates away from the main landing page, using React Router.
 * 
 * @returns {JSX.Element}
 */
export function Navbar() {
    const [isNegative, setIsNegative] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Determine if we're on the root page
    const isHomePage = location.pathname === '/' || location.pathname === '';

    useEffect(() => {
        if (isNegative) {
            document.documentElement.classList.add('invert');
            // Adding a small transition to body for smoother color switch
            document.documentElement.style.transition = 'filter 0.5s ease';
        } else {
            document.documentElement.classList.remove('invert');
        }
    }, [isNegative]);

    const handleScrollTop = (e) => {
        if (isHomePage) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 md:px-6 py-4 bg-[#14110F]/80 backdrop-blur-md border-b border-white/10 text-white transition-all">
            <div className="flex items-center gap-4">
                {/* Back Button - Only visible when not on home page */}
                {!isHomePage && (
                    <button 
                        onClick={() => navigate(-1)}
                        className="flex items-center justify-center bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                        aria-label="Go back"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                        </svg>
                    </button>
                )}

                <Link 
                    to="/" 
                    onClick={handleScrollTop}
                    className="text-xl font-bold font-['Impact',_sans-serif] tracking-wider hover:text-gray-300 transition-colors"
                >
                    solizspace.com
                </Link>
            </div>
            
            <div className="flex items-center space-x-4 md:space-x-6">
                <Link to="/about" className="hidden sm:block text-sm font-medium hover:text-gray-300 transition-colors uppercase tracking-wider">About me</Link>
                <Link to="/cv" className="text-sm font-medium hover:text-gray-300 transition-colors uppercase tracking-wider">CV</Link>
                
                <button 
                    onClick={() => setIsNegative(!isNegative)}
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                    aria-label="Toggle negative colors"
                    title="Toggle negative colors"
                >
                    {/* An icon that represents contrast/invert */}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                    </svg>
                </button>
            </div>
        </nav>
    );
}

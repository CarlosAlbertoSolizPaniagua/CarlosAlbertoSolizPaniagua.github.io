import { useState, useEffect } from 'react';

export const StarBackground = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        // Generiamo le stelle solo una volta all'avvio
        const generateStars = () => {
            const screenArea = window.innerWidth * window.innerHeight;
            
            // Calcoliamo il numero, ma mettiamo un limite massimo di 300 stelle 
            // per evitare di bloccare i monitor grandi (4K, UltraWide)
            const rawCount = Math.floor(screenArea / 4000);
            const numberOfStars = Math.min(rawCount, 300); 
            
            const newStars = [];

            for (let i = 0; i < numberOfStars; i++) {
                newStars.push({
                    id: i,
                    // Math.floor per avere pixel interi (1px, 2px, 3px) e migliorare le performance
                    size: Math.floor(Math.random() * 3) + 1, 
                    x: Math.random() * 100, 
                    y: Math.random() * 100, 
                    opacity: Math.random() * 0.5 + 0.5, 
                    animationDuration: Math.random() * 4 + 2, 
                });
            }
            setStars(newStars);
        };

        generateStars();
        
        // Abbiamo rimosso il window.addEventListener('resize'). 
        // Grazie al posizionamento in %, le stelle seguiranno lo schermo fluidamente.
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div 
                    key={star.id} 
                    className="star animate-pulse-subtle" 
                    style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        opacity: star.opacity,
                        animationDuration: `${star.animationDuration}s`,
                    }} 
                />
            ))}
        </div>
    );
};
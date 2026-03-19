import { useEffect } from 'react';

/**
 * AboutPage Component
 * 
 * Displays Carlos Alberto's profile, education, skills, and projects based on his CV.
 */
export function AboutPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full min-h-[calc(100vh-80px)] bg-transparent text-[#F3F3F4] pt-24 px-6 pb-12 flex flex-col items-center">
            <div className="max-w-4xl w-full">
                {/* Header */}
                <h1 className="text-4xl md:text-5xl font-bold font-['Impact',_sans-serif] tracking-wider text-white mb-2">
                    Carlos Alberto Soliz Paniagua
                </h1>
                <p className="text-xl text-gray-400 mb-10 font-medium">Sviluppatore Software & Studente di Informatica</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left Column: Profile & Languages */}
                    <div className="md:col-span-1 space-y-8">
                        {/* Profilo */}
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-lg">
                            <h2 className="text-xl font-bold font-['Impact',_sans-serif] text-white mb-4 tracking-wide uppercase border-b border-white/10 pb-2">
                                Profilo
                            </h2>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Studente universitario extra UE iscritto al corso di laurea Triennale in Informatica presso l'Università degli Studi di Torino. Curioso e con forte interesse per il settore informatico, in particolare nell'IA e nell'Analisi dei Dati. Capacità di lavorare in team, buona attitudine al problem solving e forte desiderio di apprendere nuove tecnologie.
                            </p>
                        </div>

                        {/* Competenze */}
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-lg">
                            <h2 className="text-xl font-bold font-['Impact',_sans-serif] text-white mb-4 tracking-wide uppercase border-b border-white/10 pb-2">
                                Competenze
                            </h2>
                            <ul className="text-sm text-gray-300 space-y-2">
                                <li>• Java, C, Python</li>
                                <li>• Web Development (Front-End & Back-End)</li>
                                <li>• Database (SQL, PostgreSQL, MongoDB, NoSQL)</li>
                                <li>• Analisi dei dati (Pandas, Matplotlib, Seaborn)</li>
                                <li>• Git, GitHub, Linux</li>
                                <li>• Microsoft Office, Excel</li>
                            </ul>
                        </div>

                        {/* Lingue */}
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-lg">
                            <h2 className="text-xl font-bold font-['Impact',_sans-serif] text-white mb-4 tracking-wide uppercase border-b border-white/10 pb-2">
                                Lingue
                            </h2>
                            <ul className="text-sm text-gray-300 space-y-2">
                                <li><strong className="text-white">Spagnolo:</strong> Madrelingua</li>
                                <li><strong className="text-white">Italiano:</strong> B2 (Certificato PLIDA 2021)</li>
                                <li><strong className="text-white">Inglese:</strong> B1</li>
                            </ul>
                        </div>
                    </div>
                    
                    {/* Right Column: Experience, Education, Projects */}
                    <div className="md:col-span-2 space-y-8">
                        
                        {/* Esperienza Professionale */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold font-['Impact',_sans-serif] text-white mb-6 tracking-wider uppercase border-l-4 border-blue-500 pl-4">
                                Esperienza Professionale
                            </h2>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-lg hover:border-blue-500/30 transition-colors">
                                <h3 className="text-lg font-bold text-white">Stage Interno - Federated Learning</h3>
                                <p className="text-sm text-blue-400 mb-3">HPC4AI</p>
                                <p className="text-sm text-gray-300 leading-relaxed">
                                    Durante lo stage presso il centro di ricerca HPC4AI, mi sono occupato dell'addestramento federato di un Large Language Model (BabyLM) orchestrato tramite il framework xFFL. L'attività ha previsto la selezione e la gestione dei dataset in Python, estratti da Hugging Face, affiancata dal monitoraggio e dall'analisi dettagliata delle metriche di addestramento attraverso Weights & Biases (WandB).
                                </p>
                            </div>
                        </div>

                        {/* Istruzione e Formazione */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold font-['Impact',_sans-serif] text-white mb-6 tracking-wider uppercase border-l-4 border-emerald-500 pl-4">
                                Istruzione e Formazione
                            </h2>
                            
                            <div className="space-y-4">
                                <div className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-lg flex flex-col sm:flex-row justify-between">
                                    <div>
                                        <h3 className="text-lg font-bold text-white">Laurea Triennale in Informatica</h3>
                                        <p className="text-sm text-emerald-400">Università degli Studi di Torino</p>
                                    </div>
                                    <div className="mt-2 sm:mt-0 text-sm text-gray-400">
                                        2021 - Oggi
                                    </div>
                                </div>
                                
                                <div className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-lg flex flex-col sm:flex-row justify-between">
                                    <div>
                                        <h3 className="text-lg font-bold text-white">Diploma di Scuola Superiore</h3>
                                        <p className="text-sm text-emerald-400">Liceo "Salesiano Esteban Bertolusso"</p>
                                    </div>
                                    <div className="mt-2 sm:mt-0 text-sm text-gray-400">
                                        2014 - 2019
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Progetti e Corsi Rilevanti */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold font-['Impact',_sans-serif] text-white mb-6 tracking-wider uppercase border-l-4 border-purple-500 pl-4">
                                Progetti & Studi Accademici
                            </h2>
                            
                            <div className="space-y-4">
                                <div className="border-b border-white/10 pb-4">
                                    <h4 className="font-bold text-white mb-1">Interazione Uomo Macchina e Tecnologie Web</h4>
                                    <p className="text-sm text-gray-300">Sviluppo di applicazioni Web (Front-End: HTML, CSS, Bootstrap, Handlebars; Back-End: JS, Socket.io, Node.js, Express, Spring Boot). DB: PostgreSQL e MongoDB. Prototipazione user-centered e design con Figma (accessibile/mobile). Utilizzo di Python, Pandas, Matplotlib, Seaborn per analisi e pulizia dati.</p>
                                </div>

                                <div className="border-b border-white/10 pb-4">
                                    <h4 className="font-bold text-white mb-1">Sviluppo Applicazioni Software (Programmazione III)</h4>
                                    <p className="text-sm text-gray-300">Sviluppo in Java di un sistema di posta elettronica Client-Server con gestione concorrente dei client (Multithreading). Interfaccia GUI in JavaFX con pattern MVC e Observer. Comunicazione di rete e persistenza dati tramite Socket e I/O file.</p>
                                </div>

                                <div className="border-b border-white/10 pb-4">
                                    <h4 className="font-bold text-white mb-1">Algoritmi e Strutture Dati</h4>
                                    <p className="text-sm text-gray-300">Studio e sviluppo di strutture dati avanzate (alberi, grafi), algoritmi di ordinamento (Quicksort, Mergesort in C). Gestione di grafi in Java (Minimum Spanning Forest).</p>
                                </div>

                                <div className="border-b border-white/10 pb-4">
                                    <h4 className="font-bold text-white mb-1">Basi di Dati</h4>
                                    <p className="text-sm text-gray-300">Progettazione DB relazionali tramite Entity-Relationship (ER), normalizzazione dati, uso di SQL e ottimizzazione query.</p>
                                </div>

                                <div className="pt-2">
                                    <h4 className="font-bold text-white mb-1">Sistemi Operativi</h4>
                                    <p className="text-sm text-gray-300">Sviluppo di un semplice sistema operativo in C, esplorando la gestione di processi, memoria, I/O e file system.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

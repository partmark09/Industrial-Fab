'use client';

import { useState, useEffect, useCallback } from 'react';

type Item = {
    title: string;
    desc: string;
    images: string[];
}

interface ProductModalProps {
    product: Item | null; 
    onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isShowing, setIsShowing] = useState(false);
    
    const [prevImageKey, setPrevImageKey] = useState<string | undefined>(undefined);
    const currentImageKey = product?.images?.[0];

    if (currentImageKey !== prevImageKey) {
        setPrevImageKey(currentImageKey);
        setCurrentIndex(0);
    }

    if (!product && isShowing) {
        setIsShowing(false);
    }

    useEffect(() => {
        if (product) {
            const timer = setTimeout(() => setIsShowing(true), 10);
            return () => clearTimeout(timer);
        }
    }, [product]);

    const handleClose = useCallback(() => {
        setIsShowing(false);
        setTimeout(onClose, 300);
    }, [onClose]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') handleClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleClose]); 

    if (!product) return null;

    const hasMultipleImages = product.images?.length > 1;

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
    };

    return (
        <div 
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ease-out ${isShowing ? 'opacity-100' : 'opacity-0'}`}
            onClick={handleClose}
        >
            <div 
                className={`bg-white rounded-3xl w-full max-w-6xl max-h-[90vh] flex flex-col md:flex-row relative shadow-2xl transition-all duration-300 ease-out transform overflow-hidden ${isShowing ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}`}
                onClick={(e) => e.stopPropagation()} 
            >
                <button 
                    onClick={handleClose} 
                    className="absolute top-4 right-4 md:top-6 md:right-6 z-30 w-10 h-10 flex items-center justify-center bg-gray-100/80 hover:bg-gray-200 rounded-full text-gray-800 transition-colors shadow-sm backdrop-blur-md"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>

                <div className="w-full md:w-[55%] relative flex items-center justify-center bg-white p-6 md:p-10 min-h-[350px]">
                    
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                        src={product.images[currentIndex]} 
                        alt={product.title} 
                        className="max-w-full max-h-[40vh] md:max-h-[75vh] object-contain"
                    />

                    <div className="hidden">
                        {product.images.map((src: string) => (
                            /* eslint-disable-next-line @next/next/no-img-element */
                            <img key={`preload-${src}`} src={src} alt="preload" />
                        ))}
                    </div>

                    {hasMultipleImages && (
                        <>
                            <button onClick={prevImage} className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-md text-gray-800 transition-transform hover:scale-110 border border-gray-100 z-20">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                            </button>
                            <button onClick={nextImage} className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-md text-gray-800 transition-transform hover:scale-110 border border-gray-100 z-20">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                            </button>

                            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                                {product.images.map((_: unknown, idx: number) => (
                                    <button 
                                        key={idx}
                                        onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                                        className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-gray-800' : 'w-2 bg-gray-300 hover:bg-gray-400'}`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>

                <div className="w-full md:w-[45%] bg-[#fafafa] p-6 md:p-10 lg:p-14 overflow-y-auto flex flex-col justify-center border-t md:border-t-0 md:border-l border-gray-100">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-[-0.02em] mb-6 pr-8 transition-colors duration-300">
                        {product.title}
                    </h3>
                    <div className="w-16 h-1 bg-[linear-gradient(90deg,#e8091d,#ff8c00)] mb-8" />
                    
                    <p className="text-base md:text-lg text-(--fg-muted) leading-[1.8] whitespace-pre-line transition-colors duration-300">
                        {product.desc}
                    </p>
                </div>
            </div>
        </div>
    );
}


// components/Slider.tsx
'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

type Slide = {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    tag: string;
}

const slides: Slide[] = [
    {
        id: 1,
        title: "NIGHT VIBES",
        subtitle: "Midnight Collection",
        description: "Embrace the darkness with our exclusive midnight series. Bold designs that command attention in the shadows.",
        image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b",
        tag: "LIMITED EDITION"
    },
    {
        id: 2,
        title: "SHADOW ELITE",
        subtitle: "Premium Dark Fashion",
        description: "Where luxury meets darkness. Sophisticated pieces designed for those who dare to stand apart from the crowd.",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
        tag: "EXCLUSIVE"
    },
    {
        id: 3,
        title: "DARK MATTER",
        subtitle: "Cosmic Fashion Line",
        description: "Inspired by the mysteries of the universe. Transform your style with pieces that defy conventional fashion.",
        image: "https://images.unsplash.com/photo-1490481651871-ab68de81d0cf",
        tag: "NEW ARRIVAL"
    }
];

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        if (!isPlaying) return;
        
        const timer = setInterval(nextSlide, 4000);
        return () => clearInterval(timer);
    }, [nextSlide, isPlaying]);

    return (
        <div className="relative h-screen w-full overflow-hidden bg-black">
            {/* Background Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90 z-10"></div>
            
            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-20 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl animate-pulse delay-75"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gray-800/30 rounded-full blur-2xl animate-pulse delay-150"></div>
            </div>

            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                        index === currentSlide
                            ? 'opacity-100 scale-100'
                            : 'opacity-0 scale-105'
                    }`}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 z-10" />
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="h-full w-full object-cover"
                    />

                    {/* Content */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center">
                        <div className="text-center px-4 max-w-6xl mx-auto">
                            {/* Tag */}
                            <div className="mb-8">
                                <span className="inline-block text-xs uppercase tracking-widest font-bold text-gray-400 bg-gray-900/80 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700">
                                    {slide.tag}
                                </span>
                            </div>
                            
                            {/* Title */}
                            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight animate-fade-in-up">
                                {slide.title}
                            </h1>
                            
                            {/* Subtitle */}
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-300 mb-8 tracking-wide">
                                {slide.subtitle}
                            </h2>
                            
                            {/* Description */}
                            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                                {slide.description}
                            </p>
                            
                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
                                    EXPLORE COLLECTION
                                </button>
                                <button className="px-8 py-4 bg-transparent text-white font-bold rounded-full border-2 border-white hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
                                    VIEW LOOKBOOK
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Controls */}
            <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-4">
                <button
                    onClick={prevSlide}
                    className="bg-gray-900/80 backdrop-blur-sm hover:bg-gray-800/80 rounded-full p-4 transition-all duration-300 group border border-gray-700"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                </button>
                <button
                    onClick={togglePlayPause}
                    className="bg-gray-900/80 backdrop-blur-sm hover:bg-gray-800/80 rounded-full p-4 transition-all duration-300 group border border-gray-700"
                    aria-label={isPlaying ? "Pause" : "Play"}
                >
                    {isPlaying ? (
                        <Pause className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                    ) : (
                        <Play className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                    )}
                </button>
            </div>

            <button
                onClick={nextSlide}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-gray-900/80 backdrop-blur-sm hover:bg-gray-800/80 rounded-full p-4 transition-all duration-300 group border border-gray-700"
                aria-label="Next slide"
            >
                <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all duration-300 ${
                            index === currentSlide
                                ? 'w-12 h-2 bg-white rounded-full'
                                : 'w-2 h-2 bg-gray-600 rounded-full hover:bg-gray-400'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Side Information Panel */}
            <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 hidden xl:block">
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                    <div className="text-white mb-4">
                        <p className="text-sm text-gray-400 mb-1">COLLECTION</p>
                        <p className="text-2xl font-bold">{currentSlide + 1}/{slides.length}</p>
                    </div>
                    <div className="text-white">
                        <p className="text-sm text-gray-400 mb-1">STATUS</p>
                        <p className="text-lg font-bold text-green-400">LIVE</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
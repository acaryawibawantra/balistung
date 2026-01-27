'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useState } from 'react';
import Container from '@/components/layout/container';

const galleryImages = [
    {
        url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800',
        alt: 'Children learning',
    },
    {
        url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
        alt: 'Yoga class',
    },
    {
        url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
        alt: 'Classroom',
    },
    {
        url: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=800',
        alt: 'Kids reading',
    },
    {
        url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800',
        alt: 'Books stack',
    },
    {
        url: 'https://images.unsplash.com/photo-1503676382389-480959635821?auto=format&fit=crop&q=80&w=800',
        alt: 'Teacher explaining',
    },
];

// Duplicating images for seamless loop
const row1Images = [...galleryImages, ...galleryImages];
const row2Images = [...galleryImages.slice().reverse(), ...galleryImages.slice().reverse()];

export default function GallerySection() {
    const [isPaused, setIsPaused] = useState(false);

    return (
        <section
            className="py-20 bg-white overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <Container className="mb-12">
                <h2 className="text-center font-accent font-bold text-3xl md:text-5xl text-[#ff8c42] uppercase tracking-tight">
                    Gallery Keceriaan di Balistung
                </h2>
            </Container>

            <div className="flex flex-col gap-6">
                {/* Row 1: Left to Right */}
                <div className="flex overflow-hidden relative">
                    <motion.div
                        className="flex gap-6 whitespace-nowrap"
                        animate={{
                            x: isPaused ? undefined : ['0%', '-50%'],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: 'loop',
                                duration: 60,
                                ease: 'linear',
                            },
                        }}
                    >
                        {row1Images.map((img, idx) => (
                            <div
                                key={`row1-${idx}`}
                                className="w-[300px] md:w-[450px] aspect-video flex-shrink-0 bg-gray-800 rounded-2xl overflow-hidden relative group"
                            >
                                <img
                                    src={img.url}
                                    alt={img.alt}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Row 2: Right to Left */}
                <div className="flex overflow-hidden relative">
                    <motion.div
                        className="flex gap-6 whitespace-nowrap"
                        animate={{
                            x: isPaused ? undefined : ['-50%', '0%'],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: 'loop',
                                duration: 60,
                                ease: 'linear',
                            },
                        }}
                    >
                        {row2Images.map((img, idx) => (
                            <div
                                key={`row2-${idx}`}
                                className="w-[300px] md:w-[450px] aspect-video flex-shrink-0 bg-gray-800 rounded-2xl overflow-hidden relative group"
                            >
                                <img
                                    src={img.url}
                                    alt={img.alt}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

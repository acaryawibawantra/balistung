'use client';

import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Container from '@/components/layout/container';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonials = [
    {
        name: "Bunda Arini",
        role: "Mama dari Kenzie (5 thn)",
        image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        content: "Luar biasa peningkatannya! Hanya dalam 3 bulan, anak saya yang tadinya susah fokus sekarang sudah mulai lancar membaca kalimat pendek. Tutornya sabar banget.",
        rating: 5,
        verified: true
    },
    {
        name: "Ibu Ratna",
        role: "Mama dari Clarissa (6 thn)",
        image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        content: "Belajar berhitung jadi gak membosankan lewat metode visual Balistung. Anak saya jadi selalu semangat nunggu jadwal lesnya setiap minggu.",
        rating: 5,
        verified: true
    },
    {
        name: "Ayah Dimas",
        role: "Papa dari Althaf (4 thn)",
        image: "https://i.pravatar.cc/150?u=a04258114e29026302d",
        content: "Metode menulisnya sangat terstruktur. Awalnya pegang pensil saja masih kaku, sekarang sudah bisa menulis nama sendiri dengan rapi.",
        rating: 5,
        verified: true
    },
    {
        name: "Ibu Ratna",
        role: "Mama dari Clarissa (6 thn)",
        image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        content: "Belajar berhitung jadi gak membosankan lewat metode visual Balistung. Anak saya jadi selalu semangat nunggu jadwal lesnya setiap minggu.",
        rating: 5,
        verified: true
    },
    {
        name: "Bunda Arini",
        role: "Mama dari Kenzie (5 thn)",
        image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        content: "Luar biasa peningkatannya! Hanya dalam 3 bulan, anak saya yang tadinya susah fokus sekarang sudah mulai lancar membaca kalimat pendek. Tutornya sabar banget.",
        rating: 5,
        verified: true
    },
    {
        name: "Ibu Ratna",
        role: "Mama dari Clarissa (6 thn)",
        image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        content: "Belajar berhitung jadi gak membosankan lewat metode visual Balistung. Anak saya jadi selalu semangat nunggu jadwal lesnya setiap minggu.",
        rating: 5,
        verified: true
    },
];

const TestimonialCard = ({ item }: { item: typeof testimonials[0] }) => (
    <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
        {/* Stars */}
        <div className="flex gap-1 mb-6">
            {[...Array(item.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary-yellow text-primary-yellow" />
            ))}
        </div>

        {/* Content */}
        <blockquote className="flex-1 mb-8">
            <p className="text-gray-600 italic leading-relaxed">
                "{item.content}"
            </p>
        </blockquote>

        {/* User Profile */}
        <div className="flex items-center gap-4 mt-auto">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 relative shrink-0">
                <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                />
            </div>
            <div>
                <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                    {item.verified && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wider">
                            Verified Parent
                        </span>
                    )}
                </div>
                <p className="text-xs text-gray-500">{item.role}</p>
            </div>
        </div>
    </div>
);

export default function TestimonialsSection() {
    return (
        <section className="py-20 md:py-32 bg-white relative overflow-hidden">
            <Container>
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900">
                        Apa Kata Orang Tua Balistung?
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Pengalaman nyata dari para orang tua yang melihat langsung kemajuan belajar putra-putri mereka bersama kami.
                    </p>
                </div>

                {/* Swiper Carousel */}
                <div className="relative pb-16">
                    <Swiper
                        modules={[Pagination, Autoplay, Navigation]}
                        spaceBetween={20}
                        slidesPerView={1}
                        pagination={{
                            clickable: true,
                            dynamicBullets: false,
                        }}
                        navigation={{
                            prevEl: '.testimonial-prev',
                            nextEl: '.testimonial-next',
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        className="!pb-16"
                    >
                        {testimonials.map((item, idx) => (
                            <SwiperSlide key={idx}>
                                <TestimonialCard item={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation Buttons - Desktop Only */}
                    <button
                        className="testimonial-prev hidden md:flex absolute top-[calc(50%-4rem)] -left-4 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg hover:bg-primary-green hover:text-white transition-all duration-300 border border-gray-200"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        className="testimonial-next hidden md:flex absolute top-[calc(50%-4rem)] -right-4 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg hover:bg-primary-green hover:text-white transition-all duration-300 border border-gray-200"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </Container>
        </section>
    );
}

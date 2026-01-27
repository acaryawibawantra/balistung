'use client';

import Container from '@/components/layout/container';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
    {
        category: "EDUKASI",
        date: "12 MAR 2024",
        title: "Tips Mengajar Anak Membaca Tanpa Rasa Bosan",
        excerpt: "Gunakan permainan dan alat peraga warna-warni agar si kecil tetap antusias belajar mengenal huruf setiap hari.",
        image: "/hero-image.jpg",
        categoryColor: "text-red-500"
    },
    {
        category: "NUMERASI",
        date: "10 MAR 2024",
        title: "Pentingnya Mengenalkan Konsep Berhitung Sejak Dini",
        excerpt: "Berhitung bukan sekadar angka, tapi melatih logika dasar anak untuk memecahkan masalah sehari-hari.",
        image: "/fotoblog.webp",
        categoryColor: "text-orange-500"
    },
    {
        category: "KREATIVITAS",
        date: "05 MAR 2024",
        title: "Membangun Kepercayaan Diri Anak Melalui Mewarnai",
        excerpt: "Ekspresi warna membantu anak mengenal emosi dan meningkatkan koordinasi motorik halus mereka secara alami.",
        image: "/fotoblog.webp",
        categoryColor: "text-green-500"
    }
];

export default function BlogSection() {
    return (
        <section className="py-15 md:py-32 bg-gray-50">
            <Container>
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
                    <div>
                        <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-3">
                            Blog & Artikel Edukasi
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Wawasan dan tips praktis untuk mendukung tumbuh kembang anak di rumah.
                        </p>
                    </div>
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-red-500 font-bold hover:gap-3 transition-all duration-300 group"
                    >
                        Lihat Semua Artikel
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Blog Cards Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {blogPosts.map((post, idx) => (
                        <article
                            key={idx}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                        >
                            {/* Image */}
                            <div className="relative aspect-[5/3] overflow-hidden bg-gray-100">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                {/* Meta */}
                                <div className="flex items-center gap-2 text-sm">
                                    <span className={`font-bold uppercase ${post.categoryColor}`}>
                                        {post.category}
                                    </span>
                                    <span className="text-gray-400">•</span>
                                    <span className="text-gray-500">{post.date}</span>
                                </div>

                                {/* Title */}
                                <h4 className="font-bold text-xl text-gray-900 leading-tight">
                                    {post.title}
                                </h4>

                                {/* Excerpt */}
                                <p className="text-gray-600 leading-relaxed line-clamp-3">
                                    {post.excerpt}
                                </p>

                                {/* Read More Link */}
                                <Link
                                    href={`/blog/${idx + 1}`}
                                    className="inline-flex items-center gap-2 text-red-500 font-bold hover:gap-3 transition-all duration-300"
                                >
                                    Baca Selengkapnya
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
}

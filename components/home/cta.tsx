'use client';

import Container from '@/components/layout/container';
import Link from 'next/link';

export default function CTASection() {
    return (
        <section className="py-20 md:py-32 bg-gradient-to-br from-pink-50 to-orange-50">
            <Container>
                <div className="text-center max-w-4xl mx-auto space-y-8">
                    {/* Heading */}
                    <h2 className="font-display font-bold text-3xl md:text-5xl text-gray-900">
                        Siap Memberikan Masa Depan Terbaik untuk Anak?
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                        Ribuan orang tua telah mempercayakan perkembangan anak mereka kepada tutor Balistung yang tersertifikasi.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                        <Link
                            href="https://wa.me/6281138802800"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-red-400 to-pink-400 text-white font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                        >
                            Daftar Kelas Trial Sekarang
                        </Link>
                        <Link
                            href="/programs"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-gray-900 font-bold text-lg border-2 border-gray-200 hover:border-primary-green hover:bg-gray-50 transition-all duration-300 w-full sm:w-auto"
                        >
                            Lihat Semua Program
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
}

'use client';

import { ShieldCheck, PartyPopper, BarChart3, Users, MessageCircle, HelpCircle } from 'lucide-react';
import Container from '@/components/layout/container';

const features = [
    {
        icon: <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-primary-green" />,
        title: "Tutor Berpengalaman",
        description: "Pengajar bersertifikasi yang memahami psikologi perkembangan anak."
    },
    {
        icon: <PartyPopper className="w-8 h-8 md:w-10 md:h-10 text-primary-green" />,
        title: "Fun Learning",
        description: "Belajar menggunakan alat peraga menarik agar anak tidak cepat bosan."
    },
    {
        icon: <BarChart3 className="w-8 h-8 md:w-10 md:h-10 text-primary-green" />,
        title: "Laporan Berkala",
        description: "Pantau perkembangan buah hati melalui raport progres bulanan."
    },
    {
        icon: <Users className="w-8 h-8 md:w-10 md:h-10 text-primary-green" />,
        title: "Kelas Kecil",
        description: "Interaksi maksimal dengan jumlah siswa terbatas per kelas."
    }
];

export default function WhyChooseUs() {
    return (
        <section className="py-10">
            <Container className="max-w-[85rem]">
                <div className="bg-white rounded-[1rem] p-8 md:p-16">
                    <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
                        {/* Content */}
                        <div>
                            <h2 className="font-display font-bold text-4xl md:text-4xl text-gray-900 mb-6">
                                Mengapa Balistung Menjadi Pilihan Utama?
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Kami menggabungkan kurikulum berstandar nasional dengan metode pengajaran kreatif yang menyenangkan bagi anak.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-8">
                                {features.map((feature, idx) => (
                                    <div key={idx} className="flex flex-col gap-3">
                                        {feature.icon}
                                        <h4 className="font-bold text-gray-900 text-lg">{feature.title}</h4>
                                        <p className="text-sm text-gray-500 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Card */}
                        <div className="flex flex-col justify-center items-center bg-green-50/50 rounded-2xl p-8 border-2 border-dashed border-primary-green/20 text-center h-full">
                            <div className="w-20 h-20 bg-primary-green/10 text-primary-green rounded-full flex items-center justify-center mb-6">
                                <HelpCircle className="w-10 h-10" />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Punya Pertanyaan?</h3>
                            <p className="text-gray-600 mb-6 max-w-sm mx-auto">
                                Jangan ragu untuk mengobrol dengan tim kami mengenai kebutuhan belajar anak Anda.
                            </p>

                            <a
                                href="https://wa.me/6281138802800"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-primary-green font-bold hover:underline group"
                            >
                                Hubungi Admin via WhatsApp
                                <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
                            </a>
                        </div>

                    </div>
                </div>
            </Container>
        </section>
    );
}

'use client';

import { useState } from 'react';
import Container from '@/components/layout/container';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
    {
        question: "Berapa usia minimal anak untuk mengikuti program Balistung?",
        answer: "Program Balistung dirancang untuk anak usia 4-12 tahun. Kami memiliki kelas yang disesuaikan dengan tingkat perkembangan anak, mulai dari PAUD hingga SD kelas 6."
    },
    {
        question: "Apakah ada kelas trial sebelum mendaftar?",
        answer: "Ya, kami menyediakan kelas trial GRATIS untuk 1 sesi pertemuan. Ini membantu orang tua dan anak merasakan metode pengajaran kami sebelum memutuskan untuk bergabung."
    },
    {
        question: "Berapa jumlah siswa dalam satu kelas?",
        answer: "Kami membatasi maksimal 8 siswa per kelas untuk memastikan setiap anak mendapatkan perhatian yang cukup dari tutor. Kelas kecil membantu proses belajar lebih efektif."
    },
    {
        question: "Bagaimana sistem pembayaran dan biaya program?",
        answer: "Biaya program bervariasi tergantung paket yang dipilih (bulanan, semester, atau tahunan). Kami menerima pembayaran melalui transfer bank, e-wallet, dan cicilan. Hubungi admin kami untuk informasi detail biaya."
    },
    {
        question: "Apakah tutor Balistung bersertifikat?",
        answer: "Ya, semua tutor Balistung telah melalui proses seleksi ketat dan memiliki sertifikasi pendidikan anak usia dini. Mereka juga rutin mengikuti pelatihan untuk meningkatkan kualitas pengajaran."
    },
    {
        question: "Bagaimana cara memantau perkembangan anak?",
        answer: "Orang tua akan menerima laporan perkembangan bulanan yang mencakup kemajuan belajar, area yang perlu ditingkatkan, dan rekomendasi aktivitas di rumah. Kami juga terbuka untuk konsultasi langsung dengan tutor."
    },
    {
        question: "Apakah tersedia kelas online?",
        answer: "Ya, kami menyediakan kelas online untuk memberikan fleksibilitas bagi orang tua yang sibuk atau tinggal di luar area layanan offline kami. Kelas online tetap interaktif dengan metode yang sama efektifnya."
    },
    {
        question: "Apa yang membedakan Balistung dengan les lainnya?",
        answer: "Balistung menggunakan metode fun learning dengan alat peraga menarik, tutor berpengalaman, kelas kecil untuk perhatian maksimal, dan kurikulum yang disesuaikan dengan perkembangan psikologi anak."
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-10 md:py-32 bg-gradient-to-br from-blue-50 to-indigo-50">
            <Container>
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                        <HelpCircle className="w-8 h-8 text-blue-600" />
                    </div>
                    <h2 className="font-display font-bold text-3xl md:text-5xl text-gray-900 mb-4">
                        Pertanyaan yang Sering Diajukan
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Temukan jawaban untuk pertanyaan umum seputar program Balistung
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="max-w-4xl mx-auto space-y-3">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 md:px-8 py-6 flex items-start justify-between gap-4 text-left hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-bold text-lg text-gray-900 flex-1">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                    }`}
                            >
                                <div className="px-6 md:px-8 pb-6 pt-2">
                                    <p className="text-gray-600 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Footer */}
                <div className="text-center mt-12">
                    <p className="text-gray-600 mb-4">
                        Masih ada pertanyaan lain?
                    </p>
                    <a
                        href="https://wa.me/6281138802800"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
                    >
                        Hubungi Kami via WhatsApp
                    </a>
                </div>
            </Container>
        </section>
    );
}

'use client';

import React from 'react';
import Link from 'next/link';
import {
    MapPin,
    Baby,
    PenTool,
    Calculator,
    CheckCircle2,
    Clock,
    Users,
    Sparkles,
    Languages,
    FunctionSquare,
    MessageCircle,
    ArrowRight,
    ChevronRight
} from 'lucide-react';
import Container from '@/components/layout/container';

export default function ProgramDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = React.use(params);
    const isOffline = slug === 'offline';
    const isPrivate = slug === 'private';

    if (!isOffline && !isPrivate) {
        return (
            <div className="min-h-screen pt-32 text-center">
                <Container>
                    <h1 className="text-4xl font-bold mb-4">Program tidak ditemukan</h1>
                    <p className="text-gray-600 mb-8">Halaman ini sedang dalam pengembangan.</p>
                    <Link href="/programs" className="btn btn-primary">
                        Kembali ke Daftar Program
                    </Link>
                </Container>
            </div>
        );
    }

    // Content configuration based on slug
    const content = {
        offline: {
            title: "Kelas Offline: Tatap Muka",
            subtitle: "Pusat Belajar Balistung",
            description: "Lingkungan belajar aman, nyaman, dan interaktif dengan pendampingan langsung dari tutor berpengalaman.",
            heroIcon: <MapPin className="w-3.5 h-3.5 text-primary-blue" />,
            paud: [
                {
                    title: "Kelas Bermain",
                    icon: <Baby className="w-5 h-5 text-primary-orange" />,
                    tag: "Fokus Motorik",
                    description: "Meningkatkan kemampuan sensorik dan motorik halus melalui aktivitas kreatif yang menyenangkan.",
                    features: ["Stimulasi Kreativitas & Imajinasi", "Sosialisasi & Kerjasama Tim"],
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgPgZBtImtInL8QKi8-1L3B8Gz2ihmIESOt6TGHy08lCb_wHy6IDCvikazb8IkhXubINT2JZYz4i9ohjuNAm1cnJSPcXsW1iKVoAsOEZdaG8DEUbDEHyQqdy7Hn-E-pnMkX5kxaov4JKMbgUPs1bHLy8E891J310r5ikLKR-jgGlldGV5mIg9wwlA1xQAvpfBGwHYpbEPq5JpPXWsT6T1YARHZlndyWoMrSetgebKsJCy6kud4pPYCkfJlf-Ryio70zgg4Q4Aism0",
                    theme: "orange"
                },
                {
                    title: "Baca Tulis",
                    icon: <PenTool className="w-5 h-5 text-primary-blue" />,
                    tag: "Literasi Dasar",
                    description: "Metode fonetik yang memudahkan anak mengenal huruf, suku kata, hingga membaca kalimat sederhana.",
                    features: ["Pengenalan Abjad & Suku Kata", "Latihan Menulis Rapi & Benar"],
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDN15OD1B3KpLhp_SDKdKmFSTTxaPFh-mP1KvbIlQLChR1V3Inz7Y9jl8ENDafZOlKjxqIrNUrrngyghHFXZHOr6PrVesE6HVez9OpKvP5Ztxpsfu4XGom_xGcUy15Jm3w161o57jZTXVtI5rwMoFRFiWUicWlscAVnW5QjwGHWesVUGX5nyYKbk5vVLpr6A6yYW2KB5MgeaumLNE_eBFqvZxkdPG41FGVrXfBggVJjzqvGi48lJKEgeBiFRdmgFPMvCG0xp-t4n5c",
                    theme: "blue",
                    featured: true
                },
                {
                    title: "Menghitung",
                    icon: <Calculator className="w-5 h-5 text-accent-purple" />,
                    tag: "Numerasi Dini",
                    description: "Mengenal konsep angka dan logika dasar matematika lewat alat peraga yang konkret.",
                    features: ["Logika Angka & Perbandingan", "Penjumlahan & Pengurangan Dasar"],
                    theme: "purple",
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAe7xn46ZclSRxQkR3uxtU1Rw7fWWIr3QXGtA78eSP4M5Q4hT2qu4bpsXjl0rjYlS4QOHDLHWA_ZWMNvRxiuPCj6xLwdChQocUwhN1ZRqaReDXzQYSPWV8UbrDj9wJxsFtaDRroR2xIYGi7c9Qf4hmJ27xe3jfFlVsnnfwbRKegXD6-XOJY-LVHN4VyGMjxMpWoZ0qPmPZRT1Yc7lD1rYvYm1aO0rvJWB6aW9js2GTE5ZIbRukTm5cqCWoxhfFP_VJzUkhX3rzPDOc"
                }
            ],
            sd: [
                {
                    title: "Paket Combo",
                    description: "Program intensif pendampingan tugas sekolah: Pancasila, IPAS, dan Bahasa Indonesia.",
                    features: ["Fokus Persiapan Ujian", "Pemahaman Materi Kurikulum"],
                    theme: "blue",
                    tag: "Program Unggulan",
                    popular: true
                },
                {
                    title: "Bahasa Inggris",
                    description: "Membangun kepercayaan diri dalam berkomunikasi menggunakan Bahasa Inggris secara aktif.",
                    features: ["Speaking & Vocabulary", "Interactive Games"],
                    theme: "green",
                    tag: "Global Skill"
                },
                {
                    title: "Matematika Fokus",
                    description: "Membedah logika matematika tingkat lanjut agar anak tidak lagi takut dengan angka.",
                    features: ["Trik Hitung Cepat", "Pemecahan Soal Cerita"],
                    theme: "orange",
                    tag: "Logika Lanjut"
                }
            ],
            info: {
                title: "Kenapa Offline?",
                benefits: [
                    "Interaksi sosial langsung antar siswa.",
                    "Tutor memantau cara menulis secara detail.",
                    "Fasilitas alat peraga fisik yang lengkap.",
                    "Lingkungan khusus yang bebas distraksi."
                ],
                capacity: "Maksimal 5 anak per kelompok."
            }
        },
        private: {
            title: "Kelas Private: Guru ke Rumah",
            subtitle: "Bimbingan Personal 1-on-1",
            description: "Anak dapat belajar lebih nyaman di rumah dengan porsi perhatian penuh dari tutor untuk hasil maksimal.",
            heroIcon: <Sparkles className="w-3.5 h-3.5 text-primary-orange" />,
            paud: [
                {
                    title: "Baca Tulis",
                    icon: <PenTool className="w-5 h-5 text-primary-blue" />,
                    tag: "Literasi Dasar",
                    description: "Metode fonetik individual yang disesuaikan dengan kecepatan belajar anak di rumah.",
                    features: ["Personalisasi Materi Belajar", "Pemantauan Progress Detail"],
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDN15OD1B3KpLhp_SDKdKmFSTTxaPFh-mP1KvbIlQLChR1V3Inz7Y9jl8ENDafZOlKjxqIrNUrrngyghHFXZHOr6PrVesE6HVez9OpKvP5Ztxpsfu4XGom_xGcUy15Jm3w161o57jZTXVtI5rwMoFRFiWUicWlscAVnW5QjwGHWesVUGX5nyYKbk5vVLpr6A6yYW2KB5MgeaumLNE_eBFqvZxkdPG41FGVrXfBggVJjzqvGi48lJKEgeBiFRdmgFPMvCG0xp-t4n5c",
                    theme: "blue",
                    featured: true
                },
                {
                    title: "Menghitung",
                    icon: <Calculator className="w-5 h-5 text-accent-purple" />,
                    tag: "Numerasi Dini",
                    description: "Mempelajari matematika dasar dengan cara yang tidak menjenuhkan dalam suasana santai.",
                    features: ["Logika Angka Realistik", "Penggunaan Alat Peraga Mandiri"],
                    theme: "purple",
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAe7xn46ZclSRxQkR3uxtU1Rw7fWWIr3QXGtA78eSP4M5Q4hT2qu4bpsXjl0rjYlS4QOHDLHWA_ZWMNvRxiuPCj6xLwdChQocUwhN1ZRqaReDXzQYSPWV8UbrDj9wJxsFtaDRroR2xIYGi7c9Qf4hmJ27xe3jfFlVsnnfwbRKegXD6-XOJY-LVHN4VyGMjxMpWoZ0qPmPZRT1Yc7lD1rYvYm1aO0rvJWB6aW9js2GTE5ZIbRukTm5cqCWoxhfFP_VJzUkhX3rzPDOc"
                }
            ],
            sd: [
                {
                    title: "Paket Combo",
                    description: "Review materi sekolah & bantuan PR untuk mata pelajaran Pancasila, IPAS, dan Bahasa Indonesia.",
                    features: ["Bantuan PR & Tugas", "Review Materi Harian"],
                    theme: "blue",
                    tag: "Bimbingan Personal",
                    popular: true
                },
                {
                    title: "Bahasa Inggris",
                    description: "Latihan percakapan intensif (Conversation) dan Vocabulary yang fleksibel di rumah.",
                    features: ["Confidence Building", "Daily Conversation"],
                    theme: "green",
                    tag: "Global Skill"
                },
                {
                    title: "Matematika",
                    description: "Fokus pada penguatan konsep dasar agar anak mahir berhitung secara akurat.",
                    features: ["Problem Solving Personalis", "Latihan Terarah"],
                    theme: "orange",
                    tag: "Akademik Fokus"
                }
            ],
            info: {
                title: "Kenapa Memilih Private?",
                benefits: [
                    "Waktu belajar lebih fleksibel dan hemat waktu.",
                    "Konsentrasi anak lebih fokus (1-on-1).",
                    "Orang tua bisa memantau langsung proses belajar.",
                    "Tutor bisa menyesuaikan kepribadian anak."
                ],
                capacity: "Personal (1 Tutor untuk 1 Anak)."
            }
        }
    }[slug as 'offline' | 'private'];

    return (
        <div className="min-h-screen bg-cream pb-20">
            {/* Set some theme variables for blue and purple used in design */}
            <style jsx global>{`
        :root {
          --color-primary-blue: #13a4ec;
          --color-accent-purple: #8b5cf6;
        }
        .text-primary-blue { color: var(--color-primary-blue); }
        .bg-primary-blue { background-color: var(--color-primary-blue); }
        .bg-primary-blue\/10 { background-color: rgba(19, 164, 236, 0.1); }
        .text-accent-purple { color: var(--color-accent-purple); }
        .bg-accent-purple\/10 { background-color: rgba(139, 92, 246, 0.1); }
      `}</style>

            {/* Hero Section */}
            <section className="pt-8 pb-12 md:pt-16 md:pb-16 border-b border-gray-100 bg-white/50">
                <Container>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="space-y-4 max-w-2xl">
                            <div className={`inline-flex items-center gap-2 px-3 py-1 ${isOffline ? 'bg-primary-blue/10' : 'bg-primary-orange/10'} rounded-full animate-fade-in-up`}>
                                {content.heroIcon}
                                <span className={`${isOffline ? 'text-primary-blue' : 'text-primary-orange'} text-[10px] font-bold uppercase tracking-widest`}>
                                    {content.subtitle}
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                                {content.title.split(':')[0]}: <span className={isOffline ? 'text-primary-blue' : 'text-primary-orange'}>{content.title.split(':')[1]}</span>
                            </h2>

                            <p className="text-base text-gray-600 leading-relaxed animate-fade-in-up max-w-xl" style={{ animationDelay: '0.2s' }}>
                                {content.description}
                            </p>
                        </div>

                        <div className="hidden lg:flex items-center gap-4 animate-fade-in-right">
                            <Link href="/register" className="btn btn-primary px-8">
                                Daftar Sekarang
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>

            {/* PAUD Level Section */}
            <section className="py-12 md:py-20">
                <Container>
                    <div className="flex items-center gap-4 mb-12">
                        <div className={`h-10 w-2 ${isOffline ? 'bg-primary-orange' : 'bg-primary-blue'} rounded-full shadow-lg`}></div>
                        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Jenjang PAUD (3 - 6 Tahun)</h3>
                    </div>

                    <div className={`grid grid-cols-1 md:grid-cols-${content.paud.length} gap-8 md:gap-10`}>
                        {content.paud.map((card, idx) => (
                            <div key={idx} className={`bg-white rounded-[2rem] overflow-hidden shadow-playful hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 border border-gray-100 flex flex-col ${card.featured ? 'scale-105 z-10' : ''}`}>
                                {card.image && (
                                    <div
                                        className="h-56 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{ backgroundImage: `url('${card.image}')` }}
                                    />
                                )}
                                <div className="p-8 flex-1 flex flex-col">
                                    <div className="flex items-center gap-2 mb-4">
                                        {card.icon}
                                        <span className={`font-bold text-xs uppercase tracking-wider ${card.theme === 'orange' ? 'text-primary-orange' : card.theme === 'blue' ? 'text-primary-blue' : 'text-accent-purple'}`}>
                                            {card.tag}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{card.title}</h3>
                                    <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-1">{card.description}</p>

                                    <ul className="space-y-3 mb-8">
                                        {card.features.map((feature, fIdx) => (
                                            <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                                                <CheckCircle2 className="w-5 h-5 text-primary-green flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Link href="/register" className={`w-full py-4 ${isOffline ? 'bg-primary-blue' : 'bg-primary-orange'} text-white rounded-2xl font-bold text-center shadow-lg hover:scale-105 active:scale-95 transition-all`}>
                                        Daftar Sekarang
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* SD Level Section */}
            <section className="py-20 md:py-32 bg-white/30">
                <Container>
                    <div className="flex items-center gap-4 mb-16">
                        <div className={`h-10 w-2 ${isOffline ? 'bg-primary-blue' : 'bg-primary-orange'} rounded-full shadow-lg`}></div>
                        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Jenjang SD (Kelas 1 - 6)</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {content.sd.map((card, idx) => (
                            <div key={idx} className="bg-white rounded-[2.5rem] overflow-hidden shadow-playful hover:shadow-2xl transition-all duration-300 group border border-gray-100 flex flex-col">
                                {/* Card Header Visual/Gradient */}
                                <div className={`h-44 bg-gradient-to-br ${card.theme === 'blue' ? 'from-blue-300 to-blue-500' : card.theme === 'green' ? 'from-green-200 to-emerald-500' : 'from-yellow-300 to-orange-400'} relative overflow-hidden flex items-center justify-center`}>
                                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                                    {card.theme === 'blue' && <Sparkles className="w-16 h-16 text-white/20" />}
                                    {card.theme === 'green' && <Languages className="w-16 h-16 text-white/20" />}
                                    {card.theme === 'orange' && <FunctionSquare className="w-16 h-16 text-white/20" />}
                                </div>

                                <div className="p-8 flex-1 flex flex-col">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-2">
                                            {card.theme === 'blue' && <Sparkles className={`w-5 h-5 ${isOffline ? 'text-primary-blue' : 'text-primary-orange'}`} />}
                                            {card.theme === 'green' && <Languages className={`w-5 h-5 text-primary-green`} />}
                                            {card.theme === 'orange' && <FunctionSquare className={`w-5 h-5 text-primary-orange`} />}
                                            <span className={`${card.theme === 'blue' && (isOffline ? 'text-primary-blue' : 'text-primary-orange')} ${card.theme === 'green' && 'text-primary-green'} ${card.theme === 'orange' && 'text-primary-orange'} font-bold text-[10px] uppercase tracking-wider`}>
                                                {card.tag}
                                            </span>
                                        </div>
                                        {card.popular && <span className={`px-3 py-1 ${isOffline ? 'bg-primary-blue' : 'bg-primary-orange'} text-white text-[9px] font-black rounded-full uppercase tracking-widest shadow-lg`}>Terpopuler</span>}
                                    </div>

                                    <h3 className="text-2xl font-black mb-3 text-gray-900 leading-tight">{card.title}</h3>
                                    <p className="text-xs text-gray-500 mb-6 leading-relaxed">
                                        {card.description}
                                    </p>

                                    <ul className="space-y-3 mb-8 flex-1">
                                        {card.features.map((feature, fIdx) => (
                                            <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-700 font-semibold">
                                                <CheckCircle2 className="w-5 h-5 text-primary-green flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Link href="/register" className={`w-full py-4 border-2 ${isOffline ? 'border-primary-blue text-primary-blue hover:bg-primary-blue' : 'border-primary-orange text-primary-orange hover:bg-primary-orange'} hover:text-white transition-all rounded-2xl font-bold text-center`}>
                                        Pilih Paket
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Info Blocks */}
            <section className="py-20">
                <Container>
                    <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-[3rem] shadow-playful border border-gray-50">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:divide-x divide-gray-100">
                            <div className="space-y-8">
                                <h4 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                                    <Clock className={`w-6 h-6 ${isOffline ? 'text-primary-blue' : 'text-primary-orange'}`} />
                                    Informasi Kelas
                                </h4>
                                <div className="space-y-6">
                                    <div className="flex gap-4 p-4 bg-gray-50 rounded-2xl">
                                        <div className={`w-1.5 h-full ${isOffline ? 'bg-primary-blue' : 'bg-primary-orange'} rounded-full`}></div>
                                        <div>
                                            <p className="font-extrabold text-sm text-gray-900 mb-1">Durasi Belajar</p>
                                            <p className="text-sm text-gray-500 font-medium">{isOffline ? '60 Menit per sesi pertemuan.' : 'Disesuaikan dengan paket bimbingan.'}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 p-4 bg-gray-50 rounded-2xl">
                                        <div className={`w-1.5 h-full ${isOffline ? 'bg-primary-orange' : 'bg-primary-blue'} rounded-full`}></div>
                                        <div>
                                            <p className="font-extrabold text-sm text-gray-900 mb-1">Kapasitas Kelas</p>
                                            <p className="text-sm text-gray-500 font-medium">{content.info.capacity}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="md:pl-16 space-y-8">
                                <h4 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                                    <Sparkles className="w-6 h-6 text-primary-green" />
                                    {content.info.title}
                                </h4>
                                <ul className="space-y-4">
                                    {content.info.benefits.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-4 text-sm font-semibold text-gray-600">
                                            <div className="w-2 h-2 bg-primary-green rounded-full shadow-sm"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}

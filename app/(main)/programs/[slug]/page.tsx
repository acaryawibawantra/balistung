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
    ChevronRight,
    Monitor,
    BookOpen,
    MousePointer2,
    Layout,
    Calendar,
    Search,
    FileText,
    GraduationCap,
    Laptop
} from 'lucide-react';
import Container from '@/components/layout/container';

export default function ProgramDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = React.use(params);
    const isOffline = slug === 'offline';
    const isPrivat = slug === 'privat';
    const isOnline = slug === 'online';

    if (!isOffline && !isPrivat && !isOnline) {
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
        privat: {
            title: "Kelas Privat: Guru ke Rumah",
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
                title: "Kenapa Memilih Privat?",
                benefits: [
                    "Waktu belajar lebih fleksibel dan hemat waktu.",
                    "Konsentrasi anak lebih fokus (1-on-1).",
                    "Orang tua bisa memantau langsung proses belajar.",
                    "Tutor bisa menyesuaikan kepribadian anak."
                ],
                capacity: "Personal (1 Tutor untuk 1 Anak)."
            }
        },
        online: {
            title: "Kelas Online: Interaktif",
            subtitle: "Belajar dari Rumah",
            description: "Sistem belajar daring yang interaktif dengan metode visual kreatif, memudahkan anak memahami materi tanpa harus keluar rumah.",
            heroIcon: <Monitor className="w-3.5 h-3.5 text-primary-green" />,
            paud: [
                {
                    title: "Baca Tulis",
                    icon: <BookOpen className="w-5 h-5 text-primary-blue" />,
                    tag: "MEDIA INTERAKTIF & IKON CERIA",
                    description: "Belajar membaca dan menulis jadi lebih menyenangkan dengan metode visual yang membantu stimulasi kognitif anak sejak dini.",
                    features: ["Pengenalan huruf melalui visual interaktif", "Latihan menulis daring dengan panduan langsung"],
                    image: "/images/programs/online_paud_baca_tulis.png",
                    theme: "blue",
                    btnText: "Daftar Kelas Trial Online"
                },
                {
                    title: "Hitung",
                    icon: <MousePointer2 className="w-5 h-5 text-primary-green" />,
                    tag: "PERMAINAN LOGIKA & ALAT VISUAL",
                    description: "Membangun fondasi matematika yang kuat melalui pendekatan yang interaktif dan permainan logika sederhana yang menarik.",
                    features: ["Konsep angka dengan animasi menarik", "Latihan logika matematika usia dini"],
                    image: "/images/programs/online_paud_hitung.png",
                    theme: "green",
                    btnText: "Daftar Kelas Trial Online"
                }
            ],
            sd: {
                title: "Bimbel Custom SD, SMP, SMA",
                tag: "PREMIUM CUSTOM PROGRAM",
                description: "Kami memahami setiap siswa memiliki tantangan yang unik. Di Balistung Online, kurikulum dan mata pelajaran dapat disesuaikan sepenuhnya dengan kebutuhan sekolah dan target akademik siswa.",
                features: [
                    { icon: <Layout className="w-5 h-5 text-primary-green" />, text: "Materi Fleksibel" },
                    { icon: <Calendar className="w-5 h-5 text-primary-green" />, text: "Jadwal Menyesuaikan" },
                    { icon: <Search className="w-5 h-5 text-primary-green" />, text: "Guru Privat Online" },
                    { icon: <FileText className="w-5 h-5 text-primary-green" />, text: "Persiapan Ujian Khusus" }
                ],
                image: "/images/programs/online_custom_bimbel.png",
                btnText: "Request Materi Pelajaran"
            },
            info: {
                title: "Keunggulan Online",
                benefits: [
                    "Belajar nyaman dari mana saja.",
                    "Metode visual yang sangat interaktif.",
                    "Tutor ramah dan ahli teknologi.",
                    "Laporan progress digital real-time."
                ],
                capacity: "Interaksi Langsung via Zoom/Meet."
            }
        }
    }[slug as 'offline' | 'privat' | 'online'];

    return (
        <div className="min-h-screen bg-cream pb-20">
            {/* Set some theme variables for blue and purple used in design */}
            <style jsx global>{`
        :root {
          --color-primary-blue: #58bbe4;
          --color-accent-purple: #8b5cf6;
          --color-primary-green: #8ec31f;
        }
        .text-primary-blue { color: var(--color-primary-blue); }
        .bg-primary-blue { background-color: var(--color-primary-blue); }
        .bg-primary-blue\/10 { background-color: rgba(88, 187, 228, 0.1); }
        .text-accent-purple { color: var(--color-accent-purple); }
        .bg-accent-purple\/10 { background-color: rgba(139, 92, 246, 0.1); }
        .text-primary-green { color: var(--color-primary-green); }
        .bg-primary-green { background-color: var(--color-primary-green); }
        .bg-primary-green\/10 { background-color: rgba(142, 195, 31, 0.1); }
        .hover\:bg-primary-green-dark:hover { background-color: #79a61a; }
        .hover\:bg-primary-blue-dark:hover { background-color: #449ec4; }
        .hover\:bg-primary-orange-dark:hover { background-color: #d47a26; }
      `}</style>

            {/* Hero Section */}
            <section className="pt-8 pb-12 md:pt-16 md:pb-16 border-b border-gray-100 bg-white/50">
                <Container>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="space-y-4 max-w-2xl">
                            <div className={`inline-flex items-center gap-2 px-3 py-1 ${isOnline ? 'bg-primary-green/10' : isOffline ? 'bg-primary-blue/10' : 'bg-primary-orange/10'} rounded-full animate-fade-in-up`}>
                                {content.heroIcon}
                                <span className={`${isOnline ? 'text-primary-green' : isOffline ? 'text-primary-blue' : 'text-primary-orange'} text-[10px] font-bold uppercase tracking-widest`}>
                                    {content.subtitle}
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                                {content.title.split(':')[0]}: <span className={isOnline ? 'text-primary-green' : isOffline ? 'text-primary-blue' : 'text-primary-orange'}>{content.title.split(':')[1]}</span>
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
                        <div className={`h-10 w-10 flex items-center justify-center rounded-2xl ${isOnline ? 'bg-primary-green/10 text-primary-green' : isOffline ? 'bg-primary-orange/10 text-primary-orange' : 'bg-primary-blue/10 text-primary-blue'}`}>
                            {isOnline ? <Monitor className="w-6 h-6" /> : <Baby className="w-6 h-6" />}
                        </div>
                        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Jenjang PAUD</h3>
                    </div>

                    <div className={`grid grid-cols-1 md:grid-cols-${content.paud.length} gap-8 md:gap-10 ${content.paud.length < 3 ? 'max-w-4xl mx-auto' : ''}`}>
                        {content.paud.map((card: any, idx: number) => (
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
                                        {card.features.map((feature: string, fIdx: number) => (
                                            <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                                                <CheckCircle2 className="w-5 h-5 text-primary-green flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Link href="/register" className={`w-full py-4 ${isOnline ? 'bg-primary-green hover:bg-primary-green-dark' : isOffline ? 'bg-primary-blue hover:bg-primary-blue-dark' : 'bg-primary-orange hover:bg-primary-orange-dark'} text-white shadow-lg rounded-4xl font-bold text-center active:brightness-90 transition-all`}>
                                        {isOnline ? 'Daftar Kelas Trial Online' : 'Daftar Sekarang'}
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
                        <div className={`h-10 w-10 flex items-center justify-center rounded-2xl ${isOnline ? 'bg-primary-green/10 text-primary-green' : isOffline ? 'bg-primary-blue/10 text-primary-blue' : 'bg-primary-orange/10 text-primary-orange'}`}>
                            {isOnline ? <GraduationCap className="w-6 h-6" /> : <Laptop className="w-6 h-6" />}
                        </div>
                        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Bimbel SD - SMA</h3>
                    </div>

                    {isOnline ? (
                        <div className="bg-[#0a2a1a] rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
                            {/* Decorative background element */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-green/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

                            <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
                                <div className="flex-1 space-y-8">
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#123a26] border border-white/5 rounded-full">
                                        <div className="w-2 h-2 bg-primary-green rounded-full animate-pulse"></div>
                                        <span className="text-primary-green text-[10px] font-bold uppercase tracking-widest">
                                            {(content.sd as any).tag}
                                        </span>
                                    </div>

                                    <h3 className="text-3xl md:text-5xl font-black text-white leading-tight">
                                        {(content.sd as any).title}
                                    </h3>

                                    <p className="text-gray-300 text-base leading-relaxed max-w-xl">
                                        {(content.sd as any).description}
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        {(content.sd as any).features.map((item: { icon: React.ReactNode; text: string }, idx: number) => (
                                            <div key={idx} className="flex items-center gap-4 group">
                                                <div className="w-10 h-10 rounded-xl bg-[#123a26] flex items-center justify-center group-hover:scale-110 transition-transform">
                                                    {item.icon}
                                                </div>
                                                <span className="text-white font-semibold text-sm">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Link
                                        href="/register"
                                        className={`inline-flex items-center justify-center gap-3 bg-primary-green hover:bg-primary-green-dark text-white px-10 py-5 rounded-2xl font-black text-lg shadow-[0_10px_30px_rgba(34,197,94,0.3)] active:brightness-90 transition-all group`}
                                    >
                                        Request Materi Pelajaran
                                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>

                                <div className="w-full lg:w-[45%]">
                                    <div className="relative group">
                                        <div className="absolute inset-0 bg-primary-green/20 blur-3xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-700"></div>
                                        <img
                                            src={(content.sd as any).image}
                                            alt="Bimbel Online"
                                            className="relative w-full h-auto rounded-[2rem] shadow-2xl transition-transform duration-500 group-hover:translate-y-[-10px]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {(content.sd as any[]).map((card, idx) => (
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
                                            {card.features.map((feature: string, fIdx: number) => (
                                                <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-700 font-semibold">
                                                    <CheckCircle2 className="w-5 h-5 text-primary-green flex-shrink-0" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <Link href="/register" className={`w-full py-4 border-2 ${isOffline ? 'border-primary-blue text-primary-blue hover:bg-primary-blue' : 'border-primary-orange text-primary-orange hover:bg-primary-orange'} hover:text-white active:brightness-75 transition-all rounded-2xl font-bold text-center`}>
                                            Pilih Paket
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </Container>
            </section>

            {/* Info Blocks */}
            <section className="py-10">
                <Container>
                    <div className="max-w-5xl mx-auto bg-white p-8 md:p-14 rounded-[2rem] shadow-[0_20px_70px_rgba(0,0,0,0.05)]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 relative">
                            {/* Vertical divider for desktop */}
                            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-gray-100 -translate-x-1/2"></div>

                            <div className="space-y-10">
                                <div className="space-y-3">
                                    <div className={`w-12 h-12 rounded-2xl ${isOnline ? 'bg-primary-green/10 text-primary-green' : isOffline ? 'bg-primary-blue/10 text-primary-blue' : 'bg-primary-orange/10 text-primary-orange'} flex items-center justify-center`}>
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-3xl font-black text-gray-900 tracking-tight">
                                        Informasi Kelas
                                    </h4>
                                </div>

                                <div className="space-y-5">
                                    <div className="group p-6 rounded-3xl bg-gray-50/50 border border-transparent hover:border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300">
                                        <div className="flex items-center gap-5">
                                            <div className={`w-1.5 h-12 ${isOnline ? 'bg-primary-green' : isOffline ? 'bg-primary-blue' : 'bg-primary-orange'} rounded-full`}></div>
                                            <div>
                                                <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Durasi Belajar</p>
                                                <p className="text-base text-gray-900 font-bold">{isOffline ? '60 Menit per sesi pertemuan.' : 'Disesuaikan dengan paket bimbingan.'}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="group p-6 rounded-3xl bg-gray-50/50 border border-transparent hover:border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300">
                                        <div className="flex items-center gap-5">
                                            <div className={`w-1.5 h-12 ${isOnline ? 'bg-primary-green' : isOffline ? 'bg-primary-orange' : 'bg-primary-blue'} rounded-full`}></div>
                                            <div>
                                                <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Kapasitas Kelas</p>
                                                <p className="text-base text-gray-900 font-bold">{content.info.capacity}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-10">
                                <div className="space-y-3">
                                    <div className={`w-12 h-12 rounded-2xl ${isOnline ? 'bg-primary-green/10 text-primary-green' : isOffline ? 'bg-primary-blue/10 text-primary-blue' : 'bg-primary-orange/10 text-primary-orange'} flex items-center justify-center`}>
                                        <Sparkles className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-3xl font-black text-gray-900 tracking-tight">
                                        {content.info.title}
                                    </h4>
                                </div>

                                <ul className="space-y-5">
                                    {content.info.benefits.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-4 p-2 group">
                                            <div className={`mt-1 w-5 h-5 rounded-full ${isOnline ? 'bg-primary-green/10 text-primary-green' : isOffline ? 'bg-primary-blue/10 text-primary-blue' : 'bg-primary-orange/10 text-primary-orange'} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                                                <div className={`w-1.5 h-1.5 rounded-full ${isOnline ? 'bg-primary-green' : isOffline ? 'bg-primary-blue' : 'bg-primary-orange'}`}></div>
                                            </div>
                                            <span className="text-lg font-bold text-gray-600 leading-snug group-hover:text-gray-900 transition-colors">
                                                {item}
                                            </span>
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

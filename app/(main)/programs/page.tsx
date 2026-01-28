'use client';

import React from 'react';
import Link from 'next/link';
import {
    School,
    Home,
    Laptop,
    CheckCircle2,
    Clock,
    Users,
    User,
    Smartphone,
    HelpCircle,
    ArrowRight
} from 'lucide-react';
import Container from '@/components/layout/container';

const programCategories = [
    {
        title: 'Kelas Offline',
        subtitle: '(Pusat Belajar)',
        description: 'Belajar tatap muka di pusat bimbingan dengan fasilitas pendukung yang lengkap dan lingkungan yang kondusif untuk konsentrasi anak.',
        badge: 'Khusus PAUD - SD',
        icon: School,
        color: 'bg-primary-blue',
        textColor: 'text-primary-blue',
        borderColor: 'border-primary-blue',
        lightBg: 'bg-blue-50',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgPgZBtImtInL8QKi8-1L3B8Gz2ihmIESOt6TGHy08lCb_wHy6IDCvikazb8IkhXubINT2JZYz4i9ohjuNAm1cnJSPcXsW1iKVoAsOEZdaG8DEUbDEHyQqdy7Hn-E-pnMkX5kxaov4JKMbgUPs1bHLy8E891J310r5ikLKR-jgGlldGV5mIg9wwlA1xQAvpfBGwHYpbEPq5JpPXWsT6T1YARHZlndyWoMrSetgebKsJCy6kud4pPYCkfJlf-Ryio70zgg4Q4Aism0',
        features: [
            { icon: CheckCircle2, text: 'Kurikulum: Baca, Tulis, Hitung' },
            { icon: Clock, text: 'Durasi: 60 Menit / Sesi' },
            { icon: Users, text: 'Kelompok Kecil (Maks. 5 Anak)' },
        ],
        ctaColor: 'bg-primary-blue hover:brightness-110 shadow-blue-500/25',
        slug: 'offline'
    },
    {
        title: 'Kelas Private',
        subtitle: '(Guru ke Rumah)',
        description: 'Layanan guru datang ke rumah Anda. Memberikan perhatian penuh 1-on-1 yang lebih personal dan waktu belajar yang fleksibel.',
        badge: 'Khusus PAUD - SD',
        icon: Home,
        color: 'bg-primary-orange',
        textColor: 'text-primary-orange',
        borderColor: 'border-primary-orange',
        lightBg: 'bg-orange-50',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDN15OD1B3KpLhp_SDKdKmFSTTxaPFh-mP1KvbIlQLChR1V3Inz7Y9jl8ENDafZOlKjxqIrNUrrngyghHFXZHOr6PrVesE6HVez9OpKvP5Ztxpsfu4XGom_xGcUy15Jm3w161o57jZTXVtI5rwMoFRFiWUicWlscAVnW5QjwGHWesVUGX5nyYKbk5vVLpr6A6yYW2KB5MgeaumLNE_eBFqvZxkdPG41FGVrXfBggVJjzqvGi48lJKEgeBiFRdmgFPMvCG0xp-t4n5c',
        features: [
            { icon: CheckCircle2, text: 'Kurikulum: Baca, Tulis, Hitung' },
            { icon: Clock, text: 'Durasi: 60 Menit / Sesi' },
            { icon: User, text: 'Fokus Personal 1-on-1' },
        ],
        ctaColor: 'bg-primary-orange hover:brightness-110 shadow-orange-500/25',
        slug: 'private'
    },
    {
        title: 'Kelas Online',
        subtitle: '(Interaktif)',
        description: 'Belajar dari mana saja melalui platform video interaktif. Efisien dan menyenangkan dengan bantuan alat peraga digital.',
        badge: 'Semua Jenjang',
        icon: Laptop,
        color: 'bg-primary-green',
        textColor: 'text-primary-green',
        borderColor: 'border-primary-green',
        lightBg: 'bg-green-50',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAe7xn46ZclSRxQkR3uxtU1Rw7fWWIr3QXGtA78eSP4M5Q4hT2qu4bpsXjl0rjYlS4QOHDLHWA_ZWMNvRxiuPCj6xLwdChQocUwhN1ZRqaReDXzQYSPWV8UbrDj9wJxsFtaDRroR2xIYGi7c9Qf4hmJ27xe3jfFlVsnnfwbRKegXD6-XOJY-LVHN4VyGMjxMpWoZ0qPmPZRT1Yc7lD1rYvYm1aO0rvJWB6aW9js2GTE5ZIbRukTm5cqCWoxhfFP_VJzUkhX3rzPDOc',
        features: [
            { icon: Smartphone, text: 'Materi Visual & Animasi' },
            { icon: Clock, text: 'Durasi: 60 Menit / Sesi' },
            { icon: CheckCircle2, text: 'Belajar dari Mana Saja' },
        ],
        ctaColor: 'bg-primary-green hover:brightness-110 shadow-green-500/25',
        slug: 'online'
    }
];

export default function ProgramsPage() {
    return (
        <div className="min-h-screen bg-cream py-16 md:py-24">
            {/* Set some theme variables for blue which is missing in global theme but used in design */}
            <style jsx global>{`
        :root {
          --color-primary-blue: #13a4ec;
        }
        .bg-primary-blue { background-color: var(--color-primary-blue); }
        .text-primary-blue { color: var(--color-primary-blue); }
        .border-primary-blue { border-color: var(--color-primary-blue); }
        .bg-blue-50 { background-color: #eff6ff; }
      `}</style>

            <Container>
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12 md:mb-16">
                    <div className="max-w-2xl space-y-4">
                        <p className="text-primary-green font-bold uppercase tracking-wider text-sm">Pilihan Program</p>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                            Pilih Program Terbaik untuk Si Kecil
                        </h1>
                        <p className="text-lg text-gray-600 font-medium">
                            Temukan metode belajar yang paling nyaman dan efektif untuk mendukung pertumbuhan kembang buah hati Anda sejak dini.
                        </p>
                    </div>
                    <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 text-gray-700 font-bold rounded-xl shadow-sm hover:bg-gray-50 transition-all group">
                        <HelpCircle className="w-5 h-5 text-primary-orange" />
                        <span>Bantuan Memilih</span>
                    </button>
                </div>

                {/* Program Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {programCategories.map((program) => (
                        <div
                            key={program.slug}
                            className={`flex flex-col bg-white rounded-3xl shadow-xl shadow-gray-200/50 border-t-8 ${program.borderColor} overflow-hidden transition-all duration-300 hover:-translate-y-2`}
                        >
                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex items-center justify-between mb-6">
                                    <div className={`p-4 ${program.lightBg} rounded-2xl`}>
                                        <program.icon className={`w-8 h-8 ${program.textColor}`} />
                                    </div>
                                    <span className={`px-4 py-1.5 ${program.lightBg} ${program.textColor} text-xs font-bold rounded-full uppercase tracking-wider`}>
                                        {program.badge}
                                    </span>
                                </div>

                                <Link href={`/programs/${program.slug}`}>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-1 hover:text-primary-blue transition-colors">{program.title}</h3>
                                </Link>
                                <p className={`font-bold ${program.textColor} mb-4 text-sm`}>{program.subtitle}</p>

                                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                                    {program.description}
                                </p>

                                <Link href={`/programs/${program.slug}`}>
                                    <div
                                        className="w-full h-48 bg-center bg-cover rounded-2xl mb-8 shadow-inner hover:opacity-90 transition-opacity cursor-pointer"
                                        style={{ backgroundImage: `url(${program.image})` }}
                                    />
                                </Link>

                                <div className="space-y-4 mb-8">
                                    {program.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <feature.icon className={`w-5 h-5 ${program.textColor}`} />
                                            <span className="text-sm font-semibold text-gray-700">{feature.text}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-4">
                                    <Link
                                        href={`/programs/${program.slug}`}
                                        className={`w-full flex items-center justify-center gap-2 py-3 border-2 ${program.borderColor} ${program.textColor} font-bold rounded-2xl hover:bg-gray-50 transition-all`}
                                    >
                                        Lihat Detail Program <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    <Link
                                        href="/register"
                                        className={`w-full flex items-center justify-center py-4 px-6 ${program.ctaColor} text-white text-base font-bold rounded-2xl shadow-lg transition-all active:scale-95`}
                                    >
                                        Daftar Kelas Trial
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* FAQ / Help Section */}
                <div className="mt-20 md:mt-32 max-w-4xl mx-auto">
                    <div className="bg-white/50 backdrop-blur-sm border border-primary-green/20 rounded-3xl p-8 md:p-12 text-center shadow-playful relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-primary-green"></div>

                        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Masih Bingung Memilih?</h2>
                        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                            Hubungi tim kurikulum kami untuk mendapatkan rekomendasi program yang paling sesuai dengan profil belajar si kecil.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <Link
                                href="https://wa.me/6281138802800"
                                target="_blank"
                                className="flex items-center gap-3 px-8 py-4 bg-primary-green text-white font-bold rounded-2xl shadow-lg shadow-green-500/20 hover:scale-105 transition-all"
                            >
                                <span>Konsultasi Gratis</span>
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="#pricing"
                                className="flex items-center gap-3 px-8 py-4 bg-white border-2 border-gray-100 text-gray-700 font-bold rounded-2xl shadow-sm hover:border-primary-orange hover:text-primary-orange transition-all"
                            >
                                Lihat Harga Paket
                            </Link>
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-gray-500 font-medium">
                            <span className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-primary-orange" />
                                Tersedia Setiap Hari: 08.00 - 17.00 WIB
                            </span>
                            <span className="hidden md:block text-gray-300">|</span>
                            <span className="flex items-center gap-2">
                                <SupportAgentIcon className="w-4 h-4 text-primary-blue" />
                                Layanan Pelanggan Cepat
                            </span>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

// Minimal mock for SupportAgent icon which might not be in lucide-react standard
function SupportAgentIcon(props: any) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24" height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M4.8 16.2A10 10 0 0 1 20 12c0 1.2-.3 2.3-.9 3.3" />
            <path d="M22 18v-2a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4l1-2v-2z" />
            <path d="M2 18v-2a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H2v-4z" />
        </svg>
    );
}

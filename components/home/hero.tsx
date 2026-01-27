'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Home, User, Video, ArrowRight, MapPin, BookOpen, ChevronDown } from 'lucide-react';
import Container from '@/components/layout/container';

const programs = [
    {
        icon: <Home className="w-6 h-6 text-blue-500" />,
        title: 'Offline',
        description: 'Pembelajaran langsung di pusat Balistung terdekat. Anak berinteraksi dengan tutor dan teman sebaya.',
        bgIcon: 'bg-blue-50',
        color: 'text-blue-600',
        link: '#offline'
    },
    {
        icon: <User className="w-6 h-6 text-yellow-500" />,
        title: 'Private',
        description: 'Tutor berpengalaman datang langsung ke rumah Anda. Fokus penuh 1-on-1.',
        bgIcon: 'bg-yellow-50',
        color: 'text-yellow-600',
        link: '#private'
    },
    {
        icon: <Video className="w-6 h-6 text-green-500" />,
        title: 'Online',
        description: 'Belajar interaktif dari mana saja melalui platform virtual kami.',
        bgIcon: 'bg-green-50',
        color: 'text-green-600',
        link: '#online'
    }
];

// Quick Access Categories Data
const allCategories = [
    { title: "Membaca", icon: "📖", color: "bg-red-100 text-red-600" },
    { title: "Menulis", icon: "✏️", color: "bg-orange-100 text-orange-600" },
    { title: "Berhitung", icon: "🔢", color: "bg-pink-100 text-pink-600" },
    { title: "Mewarnai", icon: "🎨", color: "bg-purple-100 text-purple-600" },
    // Page 2
    { title: "B. Inggris", icon: "🇬🇧", color: "bg-blue-100 text-blue-600" },
    { title: "Sempoa", icon: "🧮", color: "bg-yellow-100 text-yellow-600" },
    { title: "Sains", icon: "🔬", color: "bg-green-100 text-green-600" },
    { title: "Komputer", icon: "💻", color: "bg-indigo-100 text-indigo-600" },
];

// Dummy data for search suggestions
const dummyPrograms = [
    "Calistung (Baca Tulis Hitung)",
    "Matematika SD",
    "Bahasa Inggris Kids",
    "Bimbingan Belajar SD",
    "Persiapan Masuk SD",
    "Matematika SMP",
    "Sains / IPA SD",
    "Kelas Bermain",
    "Persiapan Masuk SMA",
    "Matematika SMA",
    "Numerik",
    "Sempoa",
];

const learningModes = [
    { id: 'offline', label: 'Offline (Ke Lokasi)', icon: Home },
    { id: 'private', label: 'Private (Guru ke Rumah)', icon: User },
    { id: 'online', label: 'Online (Virtual)', icon: Video },
];

export default function HeroSection() {
    const [isFocused, setIsFocused] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedMode, setSelectedMode] = useState(learningModes[0]);
    const [isModeOpen, setIsModeOpen] = useState(false);

    // Category Pagination State
    const [categoryPage, setCategoryPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    // Responsive items per page
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setItemsPerPage(4); // Desktop: 4 items + button = 5 total
            } else {
                setItemsPerPage(3); // Mobile: 3 items + button = 4 total
            }
        };

        // Initial check
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const visibleCategories = allCategories.slice(
        categoryPage * itemsPerPage,
        (categoryPage + 1) * itemsPerPage
    );

    const hasNextPage = (categoryPage + 1) * itemsPerPage < allCategories.length;

    // Filter suggestions based on query
    const filteredPrograms = dummyPrograms.filter(prog =>
        prog.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <section
            className="relative pt-24 pb-32 overflow-hidden bg-gradient-to-b from-green-100 to-white"
            style={{
                backgroundImage: 'url(/background2.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <Container>
                <div className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-10">

                    {/* Headline */}
                    {/* ... (Headline remains same) ... */}
                    <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight text-yellow-500">
                        Baca, Tulis & Hitung<br />
                        dengan <span className="text-primary-green">Menyenangkan</span>
                    </h1>

                    {/* Interactive Search Bar */}
                    {/* ... (Search bar code remains same) ... */}
                    <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg border border-gray-100 relative z-20">
                        {/* ... (Content of search bar) ... */}
                        <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-100">

                            {/* Program Search Input */}
                            <div className="relative flex-1 p-2">
                                <div className="flex items-center px-4 h-12 bg-gray-50 rounded-xl hover:bg-white transition-colors">
                                    <BookOpen className="w-5 h-5 text-primary-green mr-3" />
                                    <input
                                        type="text"
                                        placeholder="Mau belajar apa hari ini?"
                                        className="w-full bg-transparent border-none focus:ring-0 text-gray-700 placeholder:text-gray-400 font-semibold text-sm md:text-base outline-none"
                                        onFocus={() => setIsFocused(true)}
                                        onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>

                                {/* Dropdown Suggestions */}
                                {isFocused && (
                                    <div className="absolute top-[110%] left-0 w-full bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden animate-scale-in origin-top">
                                        <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">Program Populer</div>
                                        {filteredPrograms.length > 0 ? (
                                            filteredPrograms.map((prog, idx) => (
                                                <button
                                                    key={idx}
                                                    className="w-full text-left px-4 py-3 hover:bg-gray-50 text-gray-700 font-medium flex items-center gap-3 transition-colors"
                                                    onClick={() => setSearchQuery(prog)}
                                                >
                                                    <Search className="w-4 h-4 text-gray-400" />
                                                    {prog}
                                                </button>
                                            ))
                                        ) : (
                                            <div className="px-4 py-3 text-gray-500 text-sm">Program tidak ditemukan</div>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Mode Selector */}
                            <div className="relative md:w-[280px] p-2">
                                <button
                                    className="w-full flex items-center justify-between px-4 h-12 bg-gray-50 rounded-xl hover:bg-white transition-colors"
                                    onClick={() => setIsModeOpen(!isModeOpen)}
                                    onBlur={() => setTimeout(() => setIsModeOpen(false), 200)}
                                >
                                    <div className="flex items-center gap-3">
                                        <selectedMode.icon className="w-5 h-5 text-primary-orange" />
                                        <div className="text-left">
                                            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Mode Belajar</div>
                                            <div className="text-sm font-bold text-gray-700 truncate">{selectedMode.id === 'offline' ? 'Offline' : selectedMode.id === 'private' ? 'Private' : 'Online'}</div>
                                        </div>
                                    </div>
                                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isModeOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {/* Mode Dropdown */}
                                {isModeOpen && (
                                    <div className="absolute top-[110%] left-0 w-full bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden animate-scale-in origin-top">
                                        {learningModes.map((mode) => (
                                            <button
                                                key={mode.id}
                                                className={`w-full text-left px-4 py-3 hover:bg-gray-50 font-medium flex items-center gap-3 transition-colors ${selectedMode.id === mode.id ? 'bg-orange-50 text-primary-orange' : 'text-gray-700'}`}
                                                onClick={() => {
                                                    setSelectedMode(mode);
                                                    setIsModeOpen(false);
                                                }}
                                            >
                                                <mode.icon className="w-4 h-4" />
                                                {mode.label}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* CTA Trial Button */}
                            <div className="p-2">
                                <Link
                                    href="https://wa.me/6281138802800"
                                    className="w-full h-12 bg-primary-orange hover:bg-orange-600 text-white rounded-xl font-bold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 px-6"
                                >
                                    <span>🚀</span>
                                    <span className="hidden md:inline">Coba Trial Class</span>
                                    <span className="md:hidden">Coba Trial Class</span>
                                </Link>
                            </div>

                        </div>
                    </div>

                    {/* Quick Access Categories */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 pt-2 animate-fade-in-up">
                        {visibleCategories.map((cat, idx) => (
                            <button
                                key={idx}
                                className="group flex flex-col items-center gap-3 p-2 transition-transform hover:-translate-y-1"
                                onClick={() => setSearchQuery(cat.title)}
                            >
                                <div className={`w-14 h-14 ${cat.color} rounded-full flex items-center justify-center text-2xl shadow-sm group-hover:shadow-md transition-all`}>
                                    {cat.icon}
                                </div>
                                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider group-hover:text-gray-700">{cat.title}</span>
                            </button>
                        ))}

                        {/* Toggle Button (Next/Back) */}
                        <button
                            className="group flex flex-col items-center gap-3 p-2 transition-transform hover:-translate-y-1"
                            onClick={() => setCategoryPage(hasNextPage ? categoryPage + 1 : 0)}
                        >
                            <div className={`w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-2xl shadow-sm group-hover:shadow-md transition-all`}>
                                {hasNextPage ? "➡️" : "⬅️"}
                            </div>
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider group-hover:text-gray-700">
                                {hasNextPage ? "Semua" : "Kembali"}
                            </span>
                        </button>
                    </div>

                    {/* Program Cards */}
                    <div className="grid md:grid-cols-3 gap-6 w-full pt-8 relative z-10">
                        {programs.map((program, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-50 group text-left"
                            >
                                <div className={`w-12 h-12 ${program.bgIcon} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                    {program.icon}
                                </div>
                                <h3 className="font-display font-bold text-xl mb-3 text-gray-900">{program.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    {program.description}
                                </p>
                                <Link
                                    href={program.link}
                                    className={`inline-flex items-center text-sm font-semibold ${program.color} hover:underline`}
                                >
                                    Selengkapnya <ArrowRight className="w-4 h-4 ml-1" />
                                </Link>
                            </div>
                        ))}
                    </div>

                </div>
            </Container>

            {/* Gradient overlay for smooth transition */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white pointer-events-none"></div>
        </section>
    );
}

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from './container';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
    { name: 'Beranda', href: '/' },
    { name: 'Tentang Kami', href: '/about' },
    {
        name: 'Program',
        href: '/programs',
        submenu: [
            { name: 'Program PAUD', href: '/programs/paud', icon: '🎨' },
            { name: 'SD Kelas 1-2', href: '/programs/sd-kelas-1-2', icon: '📚' },
            { name: 'SD Kelas 3-6', href: '/programs/sd-kelas-3-6', icon: '🎓' },
        ]
    },
    {
        name: 'Mata Pelajaran',
        href: '/subjects',
        submenu: [
            { name: 'Bahasa Bali', href: '/subjects/bahasa-bali', icon: '🏝️' },
            { name: 'Bahasa Inggris', href: '/subjects/english', icon: '🌍' },
            { name: 'Matematik', href: '/subjects/math', icon: '🔢' },
            { name: 'Tematik', href: '/subjects/thematic', icon: '📖' },
        ]
    },
    { name: 'Blog', href: '/blog' },
    { name: 'Kontak', href: '/contact' },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? 'bg-white/95 backdrop-blur-2xl shadow-xl border-b-2 border-primary-100'
                : 'bg-white/80 backdrop-blur-md'
                }`}
        >
            <Container>
                <nav className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 group relative">
                        <motion.div
                            whileHover={{ scale: 1.05, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative w-14 h-14 flex items-center justify-center transition-all duration-300"
                        >
                            <Image
                                src="/logo-balistung.jpg"
                                alt="Balistung Logo"
                                width={56}
                                height={56}
                                className="rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                                priority
                            />
                        </motion.div>
                        <div className="flex flex-col">
                            <span className="font-heading font-bold text-xl bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
                                Balistung
                            </span>
                            <span className="text-xs text-neutral-600 font-medium -mt-1">
                                Les Baca Tulis Hitung
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navigation.map((item) => (
                            <div
                                key={item.name}
                                className="relative group"
                                onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    href={item.href}
                                    className="relative px-4 py-2.5 rounded-xl text-sm font-semibold text-neutral-700 hover:text-primary-600 transition-all duration-300 flex items-center gap-1 overflow-hidden group"
                                >
                                    <span className="absolute inset-0 bg-gradient-to-r from-primary-50 via-secondary-50 to-accent-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                                    <span className="relative z-10">{item.name}</span>
                                    {item.submenu && (
                                        <ChevronDown className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:rotate-180" />
                                    )}
                                </Link>

                                {/* Dropdown Menu */}
                                {item.submenu && activeDropdown === item.name && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                        transition={{ duration: 0.2, ease: 'easeOut' }}
                                        className="absolute top-full left-0 mt-3 w-64 bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-neutral-100 py-3 overflow-hidden"
                                    >
                                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500" />
                                        {item.submenu.map((subItem, idx) => (
                                            <motion.div
                                                key={subItem.name}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.05 }}
                                            >
                                                <Link
                                                    href={subItem.href}
                                                    className="group/item flex items-center gap-3 px-5 py-3.5 text-sm font-medium text-neutral-700 hover:bg-gradient-to-r hover:from-primary-50 hover:via-secondary-50 hover:to-accent-50 hover:text-primary-700 transition-all duration-300"
                                                >
                                                    <span className="text-2xl">{subItem.icon}</span>
                                                    <span className="flex-1">{subItem.name}</span>
                                                    <ChevronDown className="w-4 h-4 -rotate-90 opacity-0 group-hover/item:opacity-100 transition-all duration-300" />
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Link
                            href="https://wa.me/6281138802800"
                            target="_blank"
                            className="relative px-5 py-3 text-sm font-bold text-primary-600 hover:text-primary-700 transition-colors group"
                        >
                            <span className="relative z-10">Hubungi Kami</span>
                            <span className="absolute inset-0 border-2 border-primary-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                href="/contact"
                                className="relative px-8 py-3 text-sm font-bold text-white bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-accent-500 via-primary-500 to-secondary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <span className="relative z-10 flex items-center gap-2">
                                    <Sparkles className="w-4 h-4" />
                                    Daftar Sekarang
                                </span>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2.5 rounded-xl text-neutral-700 hover:bg-neutral-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <AnimatePresence mode="wait">
                            {isOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X className="w-6 h-6" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu className="w-6 h-6" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </nav>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden border-t border-neutral-200 py-6 max-h-[80vh] overflow-y-auto"
                        >
                            <div className="flex flex-col space-y-2">
                                {navigation.map((item, idx) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                    >
                                        <Link
                                            href={item.href}
                                            className="block px-4 py-3 rounded-xl text-base font-semibold text-neutral-700 hover:bg-gradient-to-r hover:from-primary-50 hover:via-secondary-50 hover:to-accent-50 hover:text-primary-600 transition-all duration-300"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.name}
                                        </Link>

                                        {/* Mobile Submenu */}
                                        {item.submenu && (
                                            <div className="pl-6 space-y-1 mt-2">
                                                {item.submenu.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-neutral-600 hover:bg-primary-50 hover:text-primary-600 transition-all duration-300"
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        <span className="text-lg">{subItem.icon}</span>
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>

                            {/* Mobile CTA Buttons */}
                            <div className="mt-8 space-y-3 px-4">
                                <Link
                                    href="https://wa.me/6281138802800"
                                    target="_blank"
                                    className="block w-full text-center px-6 py-4 text-base font-bold text-primary-600 border-2 border-primary-500 rounded-xl hover:bg-primary-50 transition-all duration-300"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Hubungi Kami
                                </Link>
                                <Link
                                    href="/contact"
                                    className="block w-full text-center px-6 py-4 text-base font-bold text-white bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <span className="flex items-center justify-center gap-2">
                                        <Sparkles className="w-5 h-5" />
                                        Daftar Sekarang
                                    </span>
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Container>
        </header>
    );
}

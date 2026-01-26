'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Container from './container';

const navigation = [
    { name: 'Beranda', href: '/' },
    { name: 'Program', href: '#program' },
    { name: 'Tentang Kami', href: '#tentang' },
    { name: 'Galeri', href: '#galeri' },
    { name: 'Testimoni', href: '#testimoni' },
    { name: 'Kontak', href: '#kontak' },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <Container>
                <nav className="flex items-center justify-between py-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-playful group-hover:scale-110 transition-transform duration-300">
                            <Image
                                src="/logo-balistung.jpg"
                                alt="Logo Balistung"
                                width={48}
                                height={48}
                                className="object-cover"
                            />
                        </div>
                        <div className="hidden sm:block">
                            <span className="text-xl font-display font-bold text-gradient-primary">
                                Balistung
                            </span>
                            <p className="text-xs text-gray-600 -mt-1">Les Baca Tulis Hitung</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-gray-700 hover:text-primary-green font-medium transition-colors duration-300 relative group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-green to-primary-yellow group-hover:w-full transition-all duration-300" />
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:flex items-center gap-4">
                        <a
                            href="https://wa.me/6281138802800"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            <Phone className="w-4 h-4" />
                            Hubungi Kami
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        type="button"
                        className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </nav>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="lg:hidden py-4 border-t border-gray-100 animate-fade-in-up">
                        <div className="flex flex-col gap-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-700 hover:text-primary-green font-medium transition-colors px-4 py-2 rounded-lg hover:bg-gray-50"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <a
                                href="https://wa.me/6281138802800"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary mx-4"
                            >
                                <Phone className="w-4 h-4" />
                                Hubungi Kami
                            </a>
                        </div>
                    </div>
                )}
            </Container>
        </header>
    );
}

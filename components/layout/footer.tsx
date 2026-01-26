import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import Container from './container';

const footerLinks = {
    program: [
        { name: 'Program PAUD', href: '#program' },
        { name: 'Program SD', href: '#program' },
        { name: 'Program SMP', href: '#program' },
    ],
    perusahaan: [
        { name: 'Tentang Kami', href: '#tentang' },
        { name: 'Galeri', href: '#galeri' },
        { name: 'Testimoni', href: '#testimoni' },
    ],
    bantuan: [
        { name: 'FAQ', href: '#faq' },
        { name: 'Kontak', href: '#kontak' },
        { name: 'Cara Daftar', href: '#kontak' },
    ],
};

const socialMedia = [
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/balistung/',
        icon: Instagram,
    },
    {
        name: 'Facebook',
        href: '#',
        icon: Facebook,
    },
];

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <Container>
                {/* Main Footer */}
                <div className="py-12 md:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                        {/* Brand Section */}
                        <div className="lg:col-span-1">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-playful">
                                    <Image
                                        src="/logo-balistung.jpg"
                                        alt="Logo Balistung"
                                        width={48}
                                        height={48}
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <span className="text-xl font-display font-bold text-white">
                                        Balistung
                                    </span>
                                    <p className="text-xs text-gray-400 -mt-1">Les Baca Tulis Hitung</p>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm mb-6">
                                Tempat les privat terpercaya untuk anak PAUD, SD, dan SMP di Denpasar, Bali.
                                Belajar dengan cara yang menyenangkan!
                            </p>

                            {/* Social Media */}
                            <div className="flex gap-3">
                                {socialMedia.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary-green flex items-center justify-center transition-all duration-300 hover:scale-110"
                                        aria-label={social.name}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Program Links */}
                        <div>
                            <h3 className="font-display font-semibold text-lg mb-4">Program</h3>
                            <ul className="space-y-3">
                                {footerLinks.program.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-primary-yellow transition-colors text-sm"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company Links */}
                        <div>
                            <h3 className="font-display font-semibold text-lg mb-4">Perusahaan</h3>
                            <ul className="space-y-3">
                                {footerLinks.perusahaan.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-primary-yellow transition-colors text-sm"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="font-display font-semibold text-lg mb-4">Hubungi Kami</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-primary-yellow flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-400 text-sm">
                                        Jl. Tukad Pakerisan 75b, Denpasar, Bali 80225
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-primary-yellow flex-shrink-0" />
                                    <a
                                        href="https://wa.me/6281138802800"
                                        className="text-gray-400 hover:text-primary-yellow transition-colors text-sm"
                                    >
                                        +62 811-3880-2800
                                    </a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-primary-yellow flex-shrink-0" />
                                    <a
                                        href="mailto:bimbel.balistung@gmail.com"
                                        className="text-gray-400 hover:text-primary-yellow transition-colors text-sm"
                                    >
                                        bimbel.balistung@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="border-t border-gray-700 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            © {new Date().getFullYear()} Balistung. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <Link href="#" className="text-gray-400 hover:text-primary-yellow transition-colors text-sm">
                                Kebijakan Privasi
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-primary-yellow transition-colors text-sm">
                                Syarat & Ketentuan
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import Container from './container';

const footerLinks = {
    program: [
        { name: 'Program PAUD', href: '/#program' },
        { name: 'Program SD', href: '/#program' },
        { name: 'Program SMP', href: '/#program' },
        { name: 'Daftar Sekarang', href: '/register' },
    ],
    perusahaan: [
        { name: 'Tentang Kami', href: '/#tentang' },
        { name: 'Galeri', href: '/#galeri' },
        { name: 'Testimoni', href: '/#testimoni' },
    ],
    bantuan: [
        { name: 'FAQ', href: '/#faq' },
        { name: 'Kontak', href: '/#kontak' },
        { name: 'Cara Daftar', href: '/#kontak' },
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
        href: 'https://facebook.com/balistung',
        icon: Facebook,
    },
];

export default function Footer() {
    return (
        <footer id="kontak" className="bg-white border-t border-gray-100">
            <Container>
                {/* Main Footer */}
                <div className="py-16 md:py-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {/* Brand Section */}
                        <div className="space-y-6">
                            <Link href="/" className="flex items-center gap-3">
                                <div className="relative w-12 h-12 rounded-2xl overflow-hidden shadow-playful">
                                    <Image
                                        src="/logo-balistung.jpg"
                                        alt="Logo Balistung"
                                        width={48}
                                        height={48}
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <span className="text-xl font-display font-bold text-gray-900">
                                        Balistung
                                    </span>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider -mt-1">Les Baca Tulis Hitung</p>
                                </div>
                            </Link>
                            <p className="text-gray-500 text-sm leading-relaxed max-w-xs font-medium">
                                Belajar dengan cara menyenangkan!
                            </p>

                            {/* Social Media */}
                            <div className="flex gap-4">
                                {socialMedia.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-xl bg-gray-50 text-gray-400 hover:bg-primary-green hover:text-white flex items-center justify-center transition-all duration-300 hover:shadow-lg active:scale-90"
                                        aria-label={social.name}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Program Links */}
                        <div>
                            <h3 className="text-gray-900 font-bold text-base mb-6">Program Belajar</h3>
                            <ul className="space-y-4 text-sm">
                                {footerLinks.program.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className={`transition-colors font-medium ${link.name === 'Daftar Sekarang' ? 'text-primary-orange hover:text-orange-600 font-bold' : 'text-gray-500 hover:text-primary-green'}`}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company Links */}
                        <div>
                            <h3 className="text-gray-900 font-bold text-base mb-6">Informasi</h3>
                            <ul className="space-y-4 text-sm">
                                {footerLinks.perusahaan.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-500 hover:text-primary-green transition-colors font-medium"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="text-gray-900 font-bold text-base mb-6">Hubungi Kami</h3>
                            <ul className="space-y-5">
                                <li className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-4 h-4 text-red-500" />
                                    </div>
                                    <span className="text-gray-500 text-sm leading-snug">
                                        Jl. Tukad Pakerisan 75, Denpasar, Bali 80225
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-4 h-4 text-green-500" />
                                    </div>
                                    <a
                                        href="https://wa.me/6281138802800"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-primary-green transition-colors text-sm font-medium"
                                    >
                                        +62 811-3880-2800
                                    </a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-4 h-4 text-blue-500" />
                                    </div>
                                    <a
                                        href="mailto:bimbel.balistung@gmail.com"
                                        className="text-gray-500 hover:text-primary-green transition-colors text-sm font-medium"
                                    >
                                        balistung@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="border-t border-gray-100 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-gray-400 text-xs font-medium text-center md:text-left">
                            © {new Date().getFullYear()} Balistung. Dikelola oleh pendidik profesional.
                            <span className="hidden sm:inline"> | Made with ❤️ for children.</span>
                        </p>
                        <div className="flex gap-8">
                            <Link href="#" className="text-gray-400 hover:text-primary-green transition-colors text-xs font-semibold">
                                Kebijakan Privasi
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-primary-green transition-colors text-xs font-semibold">
                                Syarat & Ketentuan
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

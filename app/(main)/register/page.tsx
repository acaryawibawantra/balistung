'use client';

import { useState, FormEvent } from 'react';
import Container from '@/components/layout/container';
import { RegistrationFormData, GradeLevel, ProgramType } from '@/types/registration';
import { HelpCircle, CheckCircle2, Smile, Brain, TrendingUp, Star, MessageCircle } from 'lucide-react';

export default function RegisterPage() {
    const [formData, setFormData] = useState<RegistrationFormData>({
        parentName: '',
        whatsappNumber: '',
        studentName: '',
        studentAge: '',
        currentGrade: '',
        programChoice: '',
    });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!formData.parentName || !formData.whatsappNumber || !formData.studentName ||
            !formData.studentAge || !formData.currentGrade || !formData.programChoice) {
            alert('Mohon lengkapi semua field yang diperlukan');
            return;
        }

        // Format grade label
        const gradeLabels: Record<string, string> = {
            'paud': 'PAUD',
            'tk': 'TK',
            'sd1': '1 SD',
            'sd2': '2 SD',
            'sd3': '3 SD',
            'sd4': '4 SD',
            'sd5': '5 SD',
            'sd6': '6 SD',
            'smp': 'SMP'
        };

        // Format program label
        const programLabels: Record<string, string> = {
            'calistung': 'Balistung (Calistung)',
            'english': 'English for Kids',
            'math': 'Matematika SD/SMP',
            'homework': 'Bimbingan PR (Semua Mapel)'
        };

        // Send data to Google Spreadsheet
        try {
            const spreadsheetUrl = 'https://script.google.com/macros/s/AKfycbz_rgsTYhrqGSM2ZTvLDVN5cTOrmowrAQu97l93G72VHERU8iqiZWH_33QbFs0T7Ng/exec';

            const response = await fetch(spreadsheetUrl, {
                method: 'POST',
                mode: 'no-cors', // Important for Google Apps Scriptgit 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    parentName: formData.parentName,
                    whatsappNumber: formData.whatsappNumber,
                    studentName: formData.studentName,
                    studentAge: formData.studentAge,
                    currentGrade: gradeLabels[formData.currentGrade] || formData.currentGrade,
                    programChoice: programLabels[formData.programChoice] || formData.programChoice
                })
            });

            console.log('Data berhasil dikirim ke spreadsheet');
        } catch (error) {
            console.error('Error mengirim ke spreadsheet:', error);
            // Continue anyway - user can still use WhatsApp
        }

        // Create WhatsApp message
        const message = `*PENDAFTARAN SISWA BARU BALISTUNG*

*Data Orang Tua*
Nama: ${formData.parentName}
WhatsApp: ${formData.whatsappNumber}

*Data Anak*
Nama: ${formData.studentName}
Usia: ${formData.studentAge}
Kelas Saat Ini: ${gradeLabels[formData.currentGrade] || formData.currentGrade}

*Program yang Dipilih*
${programLabels[formData.programChoice] || formData.programChoice}

---
Saya tertarik untuk mendaftarkan anak saya. Mohon informasi lebih lanjut mengenai jadwal dan biaya. Terima kasih!`;

        // Encode message for URL
        const encodedMessage = encodeURIComponent(message);

        // WhatsApp admin number (from header component)
        const adminWhatsApp = '6282340981718';

        // Create WhatsApp URL
        const whatsappUrl = `https://wa.me/${adminWhatsApp}?text=${encodedMessage}`;

        // Open WhatsApp in new tab
        window.open(whatsappUrl, '_blank');

        // Show success message
        alert('Data pendaftaran telah tersimpan! Anda akan diarahkan ke WhatsApp untuk konfirmasi.');
    };

    const handleInputChange = (field: keyof RegistrationFormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
            <Container>
                <div className="py-12">
                    {/* Page Heading */}
                    <div className="flex flex-wrap justify-between items-end gap-6 mb-12">
                        <div className="flex-1 min-w-72">
                            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-3">
                                Pendaftaran Siswa Baru
                            </h1>
                            <p className="text-lg text-gray-600 max-w-2xl">
                                Lengkapi formulir di bawah ini untuk memulai perjalanan belajar buah hati Anda.
                                Tim kami akan segera menghubungi Ayah/Bunda.
                            </p>
                        </div>
                        <a
                            href="https://wa.me/6281138802800"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 font-bold hover:bg-gray-50 transition-all shadow-sm"
                        >
                            <HelpCircle className="w-5 h-5" />
                            <span>Butuh Bantuan?</span>
                        </a>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                        {/* Form Section */}
                        <div className="lg:col-span-7">
                            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Parent Info */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <label className="flex flex-col">
                                            <span className="text-gray-900 text-base font-semibold mb-2">
                                                Nama Orang Tua
                                            </span>
                                            <input
                                                type="text"
                                                value={formData.parentName}
                                                onChange={(e) => handleInputChange('parentName', e.target.value)}
                                                className="input"
                                                placeholder="Nama lengkap Ayah/Bunda"
                                                required
                                            />
                                        </label>
                                        <label className="flex flex-col">
                                            <span className="text-gray-900 text-base font-semibold mb-2">
                                                Nomor WhatsApp
                                            </span>
                                            <input
                                                type="tel"
                                                value={formData.whatsappNumber}
                                                onChange={(e) => handleInputChange('whatsappNumber', e.target.value)}
                                                className="input"
                                                placeholder="Contoh: 08123456789"
                                                required
                                            />
                                        </label>
                                    </div>

                                    {/* Child Info */}
                                    <div className="space-y-6 pt-4 border-t border-gray-100">
                                        <label className="flex flex-col">
                                            <span className="text-gray-900 text-base font-semibold mb-2">
                                                Nama Anak
                                            </span>
                                            <input
                                                type="text"
                                                value={formData.studentName}
                                                onChange={(e) => handleInputChange('studentName', e.target.value)}
                                                className="input"
                                                placeholder="Nama lengkap calon siswa"
                                                required
                                            />
                                        </label>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <label className="flex flex-col">
                                                <span className="text-gray-900 text-base font-semibold mb-2">
                                                    Usia Anak
                                                </span>
                                                <input
                                                    type="text"
                                                    value={formData.studentAge}
                                                    onChange={(e) => handleInputChange('studentAge', e.target.value)}
                                                    className="input"
                                                    placeholder="Contoh: 6 Tahun"
                                                    required
                                                />
                                            </label>
                                            <label className="flex flex-col">
                                                <span className="text-gray-900 text-base font-semibold mb-2">
                                                    Kelas Saat Ini
                                                </span>
                                                <select
                                                    value={formData.currentGrade}
                                                    onChange={(e) => handleInputChange('currentGrade', e.target.value as GradeLevel)}
                                                    className="input appearance-none cursor-pointer"
                                                    required
                                                >
                                                    <option value="">Pilih Jenjang</option>
                                                    <option value="paud">PAUD</option>
                                                    <option value="tk">TK</option>
                                                    <option value="sd1">1 SD</option>
                                                    <option value="sd2">2 SD</option>
                                                    <option value="sd3">3 SD</option>
                                                    <option value="sd4">4 SD</option>
                                                    <option value="sd5">5 SD</option>
                                                    <option value="sd6">6 SD</option>
                                                    <option value="smp">SMP</option>
                                                </select>
                                            </label>
                                        </div>
                                    </div>

                                    {/* Program Choice */}
                                    <div className="space-y-6 pt-4 border-t border-gray-100">
                                        <label className="flex flex-col">
                                            <span className="text-gray-900 text-base font-semibold mb-2">
                                                Pilih Program Belajar
                                            </span>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <label className="relative flex items-center p-4 rounded-lg border-2 border-gray-200 hover:border-primary-green transition-all cursor-pointer has-[:checked]:border-primary-green has-[:checked]:bg-primary-green/5">
                                                    <input
                                                        type="radio"
                                                        name="program"
                                                        value="calistung"
                                                        checked={formData.programChoice === 'calistung'}
                                                        onChange={(e) => handleInputChange('programChoice', e.target.value as ProgramType)}
                                                        className="w-4 h-4 text-primary-green focus:ring-primary-green"
                                                    />
                                                    <span className="ml-3 font-medium">Balistung (Calistung)</span>
                                                </label>
                                                <label className="relative flex items-center p-4 rounded-lg border-2 border-gray-200 hover:border-primary-green transition-all cursor-pointer has-[:checked]:border-primary-green has-[:checked]:bg-primary-green/5">
                                                    <input
                                                        type="radio"
                                                        name="program"
                                                        value="english"
                                                        checked={formData.programChoice === 'english'}
                                                        onChange={(e) => handleInputChange('programChoice', e.target.value as ProgramType)}
                                                        className="w-4 h-4 text-primary-green focus:ring-primary-green"
                                                    />
                                                    <span className="ml-3 font-medium">English for Kids</span>
                                                </label>
                                                <label className="relative flex items-center p-4 rounded-lg border-2 border-gray-200 hover:border-primary-green transition-all cursor-pointer has-[:checked]:border-primary-green has-[:checked]:bg-primary-green/5">
                                                    <input
                                                        type="radio"
                                                        name="program"
                                                        value="math"
                                                        checked={formData.programChoice === 'math'}
                                                        onChange={(e) => handleInputChange('programChoice', e.target.value as ProgramType)}
                                                        className="w-4 h-4 text-primary-green focus:ring-primary-green"
                                                    />
                                                    <span className="ml-3 font-medium">Matematika SD/SMP</span>
                                                </label>
                                                <label className="relative flex items-center p-4 rounded-lg border-2 border-gray-200 hover:border-primary-green transition-all cursor-pointer has-[:checked]:border-primary-green has-[:checked]:bg-primary-green/5">
                                                    <input
                                                        type="radio"
                                                        name="program"
                                                        value="homework"
                                                        checked={formData.programChoice === 'homework'}
                                                        onChange={(e) => handleInputChange('programChoice', e.target.value as ProgramType)}
                                                        className="w-4 h-4 text-primary-green focus:ring-primary-green"
                                                    />
                                                    <span className="ml-3 font-medium">Bimbingan PR (Semua Mapel)</span>
                                                </label>
                                            </div>
                                        </label>
                                    </div>

                                    <div className="pt-6">
                                        <button
                                            type="submit"
                                            className="w-full btn btn-primary btn-lg shadow-lg shadow-primary-green/20 hover:scale-[1.01] active:scale-[0.99] transition-all"
                                        >
                                            Kirim Formulir Pendaftaran
                                        </button>
                                        <p className="text-center text-sm text-gray-600 mt-4">
                                            Dengan mendaftar, Anda menyetujui kebijakan privasi Balistung.
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Benefits Sidebar */}
                        <div className="lg:col-span-5 flex flex-col gap-6">
                            {/* Why Choose Balistung */}
                            <div className="bg-primary-green/10 rounded-2xl p-6 md:p-8 border border-primary-green/20">
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                    <CheckCircle2 className="text-primary-green w-6 h-6" />
                                    Kenapa Memilih Balistung?
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="bg-white p-3 rounded-xl h-fit shadow-sm">
                                            <Smile className="text-primary-green w-7 h-7" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">Metode Menyenangkan</h4>
                                            <p className="text-gray-600">
                                                Belajar serasa bermain dengan kurikulum interaktif yang disesuaikan dengan minat anak.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="bg-white p-3 rounded-xl h-fit shadow-sm">
                                            <Brain className="text-primary-green w-7 h-7" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">Pengajar Berpengalaman</h4>
                                            <p className="text-gray-600">
                                                Didampingi oleh tutor yang sabar, ramah anak, dan ahli dalam bidang pedagogik.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="bg-white p-3 rounded-xl h-fit shadow-sm">
                                            <TrendingUp className="text-primary-green w-7 h-7" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">Perkembangan Terukur</h4>
                                            <p className="text-gray-600">
                                                Laporan berkala hasil belajar untuk memantau kemajuan buah hati Anda secara detail.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial Highlight */}
                            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm relative overflow-hidden">
                                <div className="absolute -top-4 -right-4 opacity-5">
                                    <MessageCircle className="w-36 h-36 text-gray-900" />
                                </div>
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-primary-yellow fill-primary-yellow" />
                                    ))}
                                </div>
                                <p className="italic text-gray-900 text-lg leading-relaxed mb-6 relative z-10">
                                    "Sangat puas dengan kemajuan anak saya di Balistung. Tutornya sangat telaten dan
                                    metode belajarnya tidak membuat anak bosan."
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                                        <Smile className="w-6 h-6 text-gray-500" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm">Bunda Clarissa</p>
                                        <p className="text-xs text-gray-600">Orang Tua Siswa SD Kelas 2</p>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Support */}
                            <div className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300">
                                <div className="flex items-center gap-4">
                                    <div className="bg-[#25D366] p-2 rounded-full text-white">
                                        <MessageCircle className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm">Konsultasi via WhatsApp</p>
                                        <p className="text-xs text-gray-600">Aktif 08:00 - 17:00</p>
                                    </div>
                                </div>
                                <a
                                    href="https://wa.me/6281138802800"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary-green font-bold text-sm hover:underline"
                                >
                                    Hubungi Kami
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

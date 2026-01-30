'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Container from '@/components/layout/container';
import { RegistrationFormData, GradeLevel, ProgramType, registrationSchema, RegistrationSchema } from '@/types/registration';
import { HelpCircle, CheckCircle2, Smile, Brain, TrendingUp, Star, MessageCircle, AlertCircle } from 'lucide-react';

export default function RegisterPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch,
        clearErrors
    } = useForm<RegistrationSchema>({
        resolver: zodResolver(registrationSchema),
        defaultValues: {
            parentName: '',
            whatsappNumber: '',
            studentName: '',
            studentAge: '',
            currentGrade: '',
            learningMethod: '',
            programChoice: [],
        }
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [whatsappUrl, setWhatsappUrl] = useState('');

    const learningMethod = watch('learningMethod');
    const programChoice = watch('programChoice') || [];

    const onSubmit = async (data: RegistrationSchema) => {
        setIsSubmitting(true);

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
            'smp': 'SMP',
            'sma': 'SMA'
        };

        // Format program labels for display
        const programLabels: Record<ProgramType, string> = {
            'bermain': 'Kelas Bermain (PAUD)',
            'bacatulis': 'Baca Tulis (PAUD)',
            'hitung': 'Berhitung (PAUD)',
            'combo': 'Paket Combo SD (Pancasila, IPAS, B. Indo)',
            'english': 'Bahasa Inggris',
            'math': 'Matematika',
            'request': 'Bimbingan SD-SMA (By Request)'
        };

        const methodLabels: Record<string, string> = {
            'offline': 'Offline (Ke Lokasi)',
            'private': 'Private (Guru ke Rumah)',
            'online': 'Online (Virtual)'
        };

        const selectedPrograms = data.programChoice.map(p => programLabels[p as ProgramType]).join(', ');

        // Send data to Google Spreadsheet
        try {
            const spreadsheetUrl = 'https://script.google.com/macros/s/AKfycbz_rgsTYhrqGSM2ZTvLDVN5cTOrmowrAQu97l93G72VHERU8iqiZWH_33QbFs0T7Ng/exec';

            await fetch(spreadsheetUrl, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    parentName: data.parentName,
                    whatsappNumber: data.whatsappNumber,
                    studentName: data.studentName,
                    studentAge: data.studentAge,
                    currentGrade: gradeLabels[data.currentGrade] || data.currentGrade,
                    learningMethod: methodLabels[data.learningMethod] || data.learningMethod,
                    programChoice: selectedPrograms
                })
            });
        } catch (error) {
            console.error('Error mengirim ke spreadsheet:', error);
        }

        // Create WhatsApp message
        const message = `*PENDAFTARAN SISWA BARU BALISTUNG*

*Data Orang Tua*
Nama: ${data.parentName}
WhatsApp: ${data.whatsappNumber}

*Data Anak*
Nama: ${data.studentName}
Usia: ${data.studentAge}
Kelas Saat Ini: ${gradeLabels[data.currentGrade] || data.currentGrade}
Metode Belajar: ${methodLabels[data.learningMethod] || data.learningMethod}

*Program yang Dipilih*
${selectedPrograms}

---
Saya tertarik untuk mendaftarkan anak saya. Mohon informasi lebih lanjut mengenai jadwal dan biaya. Terima kasih!`;

        const encodedMessage = encodeURIComponent(message);
        const adminWhatsApp = '628989124150';
        const url = `https://wa.me/${adminWhatsApp}?text=${encodedMessage}`;

        setWhatsappUrl(url);
        setShowSuccessModal(true);
        setIsSubmitting(false);
    };

    const handleWhatsAppRedirect = () => {
        window.location.href = whatsappUrl;
    };

    const handleProgramToggle = (program: ProgramType) => {
        const currentChoice = [...programChoice];
        const index = currentChoice.indexOf(program);
        let newChoice;
        if (index > -1) {
            newChoice = currentChoice.filter(p => p !== program);
        } else {
            newChoice = [...currentChoice, program];
        }
        setValue('programChoice', newChoice, { shouldValidate: true });
    };

    const PROGRAMS_BY_METHOD: Record<string, ProgramType[]> = {
        offline: ['bermain', 'bacatulis', 'hitung', 'combo', 'english', 'math'],
        private: ['bacatulis', 'hitung', 'combo', 'english', 'math'],
        online: ['bacatulis', 'hitung', 'request']
    };

    const PROGRAM_DETAILS: Record<ProgramType, { label: string; subLabel: string }> = {
        bermain: { label: 'Kelas Bermain', subLabel: 'PAUD' },
        bacatulis: { label: 'Baca Tulis', subLabel: 'PAUD' },
        hitung: { label: 'Berhitung', subLabel: 'PAUD' },
        combo: { label: 'Paket Combo SD', subLabel: 'Pancasila, IPAS, B. Indo' },
        english: { label: 'Bahasa Inggris', subLabel: 'SD' },
        math: { label: 'Matematika', subLabel: 'SD' },
        request: { label: 'Bimbingan SD-SMA', subLabel: 'By Request' }
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
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    {/* Parent Info */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="flex flex-col">
                                            <label className="text-gray-900 text-base font-semibold mb-2">
                                                Nama Orang Tua
                                            </label>
                                            <input
                                                {...register('parentName')}
                                                className={`input ${errors.parentName ? 'border-red-500 focus:ring-red-500' : ''}`}
                                                placeholder="Nama lengkap Ayah/Bunda"
                                            />
                                            {errors.parentName && (
                                                <span className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                                    <AlertCircle className="w-3 h-3" /> {errors.parentName.message}
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="text-gray-900 text-base font-semibold mb-2">
                                                Nomor WhatsApp
                                            </label>
                                            <input
                                                {...register('whatsappNumber')}
                                                type="tel"
                                                className={`input ${errors.whatsappNumber ? 'border-red-500 focus:ring-red-500' : ''}`}
                                                placeholder="Contoh: 08123456789"
                                            />
                                            {errors.whatsappNumber && (
                                                <span className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                                    <AlertCircle className="w-3 h-3" /> {errors.whatsappNumber.message}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Child Info */}
                                    <div className="space-y-6 pt-4 border-t border-gray-100">
                                        <div className="flex flex-col">
                                            <label className="text-gray-900 text-base font-semibold mb-2">
                                                Nama Anak
                                            </label>
                                            <input
                                                {...register('studentName')}
                                                className={`input ${errors.studentName ? 'border-red-500 focus:ring-red-500' : ''}`}
                                                placeholder="Nama lengkap calon siswa"
                                            />
                                            {errors.studentName && (
                                                <span className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                                    <AlertCircle className="w-3 h-3" /> {errors.studentName.message}
                                                </span>
                                            )}
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="flex flex-col">
                                                <label className="text-gray-900 text-base font-semibold mb-2">
                                                    Usia Anak
                                                </label>
                                                <input
                                                    {...register('studentAge')}
                                                    className={`input ${errors.studentAge ? 'border-red-500 focus:ring-red-500' : ''}`}
                                                    placeholder="Contoh: 6 Tahun"
                                                />
                                                {errors.studentAge && (
                                                    <span className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                                        <AlertCircle className="w-3 h-3" /> {errors.studentAge.message}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex flex-col">
                                                <label className="text-gray-900 text-base font-semibold mb-2">
                                                    Kelas Saat Ini
                                                </label>
                                                <select
                                                    {...register('currentGrade')}
                                                    className={`input appearance-none cursor-pointer ${errors.currentGrade ? 'border-red-500 focus:ring-red-500' : ''}`}
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
                                                    <option value="sma">SMA</option>
                                                </select>
                                                {errors.currentGrade && (
                                                    <span className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                                        <AlertCircle className="w-3 h-3" /> {errors.currentGrade.message}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Learning Method Section */}
                                    <div className="space-y-6 pt-4 border-t border-gray-100">
                                        <div className="flex flex-col">
                                            <span className="text-gray-900 text-base font-semibold mb-2">
                                                Pilih Metode Belajar
                                            </span>
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                                {['offline', 'private', 'online'].map((method) => (
                                                    <label key={method} className={`relative flex items-center p-4 rounded-lg border-2 transition-all cursor-pointer ${learningMethod === method ? 'border-primary-green bg-primary-green/5' : 'border-gray-200 hover:border-primary-green'}`}>
                                                        <input
                                                            type="radio"
                                                            value={method}
                                                            checked={learningMethod === method}
                                                            onChange={(e) => {
                                                                const newMethod = e.target.value as any;
                                                                setValue('learningMethod', newMethod, { shouldValidate: true });
                                                                // Filter out programs not valid for the new method
                                                                const validPrograms = PROGRAMS_BY_METHOD[newMethod] || [];
                                                                const filteredPrograms = programChoice.filter(p => validPrograms.includes(p as ProgramType));
                                                                setValue('programChoice', filteredPrograms);
                                                            }}
                                                            className="w-4 h-4 text-primary-green focus:ring-primary-green"
                                                        />
                                                        <span className="ml-3 font-medium capitalize">{method}</span>
                                                    </label>
                                                ))}
                                            </div>
                                            {errors.learningMethod && (
                                                <span className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                                    <AlertCircle className="w-3 h-3" /> {errors.learningMethod.message}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Program Choice Section - Filtered */}
                                    {learningMethod && (
                                        <div className="space-y-6 pt-4 border-t border-gray-100 animate-fade-in">
                                            <div className="flex flex-col">
                                                <span className="text-gray-900 text-base font-semibold mb-2">
                                                    Pilih Program Belajar (Bisa pilih lebih dari 1)
                                                </span>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    {PROGRAMS_BY_METHOD[learningMethod as string]?.map((program) => (
                                                        <label key={program} className={`relative flex items-center p-4 rounded-lg border-2 transition-all cursor-pointer ${programChoice.includes(program) ? 'border-primary-green bg-primary-green/5' : 'border-gray-200 hover:border-primary-green'}`}>
                                                            <input
                                                                type="checkbox"
                                                                checked={programChoice.includes(program)}
                                                                onChange={() => handleProgramToggle(program)}
                                                                className="w-4 h-4 rounded text-primary-green focus:ring-primary-green"
                                                            />
                                                            <div className="ml-3">
                                                                <span className="block font-medium">{PROGRAM_DETAILS[program].label}</span>
                                                                <span className="block text-xs text-gray-500">{PROGRAM_DETAILS[program].subLabel}</span>
                                                            </div>
                                                        </label>
                                                    ))}
                                                </div>
                                                {errors.programChoice && (
                                                    <span className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                                        <AlertCircle className="w-3 h-3" /> {errors.programChoice.message}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    <div className="pt-6">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full btn btn-primary btn-lg shadow-lg shadow-primary-green/20 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? 'Mengirim...' : 'Kirim Formulir Pendaftaran'}
                                        </button>
                                        <p className="text-center text-sm text-gray-600 mt-4">
                                            Dengan mendaftar, Anda menyetujui kebijakan privasi Balistung.
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Success Modal */}
                        {showSuccessModal && (
                            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
                                <div className="bg-white rounded-3xl shadow-2xl max-w-sm w-full p-8 text-center animate-scale-in">
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 className="w-10 h-10 text-primary-green" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Berhasil Terkirim!</h3>
                                    <p className="text-gray-600 mb-8">
                                        Data pendaftaran telah tersimpan. Silakan klik tombol di bawah untuk konfirmasi pendaftaran melalui WhatsApp Admin.
                                    </p>
                                    <div className="space-y-3">
                                        <button
                                            onClick={handleWhatsAppRedirect}
                                            className="w-full py-4 bg-[#25D366] hover:bg-[#20bd5c] text-white rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2"
                                        >
                                            <MessageCircle className="w-5 h-5" />
                                            Lanjutkan ke WhatsApp
                                        </button>
                                        <button
                                            onClick={() => setShowSuccessModal(false)}
                                            className="w-full py-3 text-gray-500 font-medium hover:text-gray-700 transition-colors"
                                        >
                                            Nanti Saja
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

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

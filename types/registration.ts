import { z } from 'zod';

export interface Registration {
    id: string;
    // Parent/Guardian Information
    parentName: string;
    whatsappNumber: string;

    // Student Information
    studentName: string;
    studentAge: string;
    currentGrade: GradeLevel;

    // Program Selection
    learningMethod: LearningMethod;
    programChoice: ProgramType[];

    // Metadata
    status: RegistrationStatus;
    createdAt: string;
    updatedAt?: string;
}

export type GradeLevel =
    | 'paud'
    | 'tk'
    | 'sd1'
    | 'sd2'
    | 'sd3'
    | 'sd4'
    | 'sd5'
    | 'sd6'
    | 'smp'
    | 'sma';

export type LearningMethod = 'offline' | 'privat' | 'online';

export type ProgramType =
    | 'bermain'
    | 'bacatulis'
    | 'hitung'
    | 'combo'
    | 'english'
    | 'math'
    | 'request';

export type RegistrationStatus =
    | 'pending'
    | 'contacted'
    | 'scheduled'
    | 'enrolled'
    | 'declined';

export interface RegistrationFormData {
    parentName: string;
    whatsappNumber: string;
    studentName: string;
    studentAge: string;
    currentGrade: GradeLevel | '';
    learningMethod: LearningMethod | '';
    programChoice: ProgramType[];
}

export const registrationSchema = z.object({
    parentName: z.string().min(3, 'Nama orang tua minimal 3 karakter'),
    whatsappNumber: z.string()
        .min(10, 'Nomor WhatsApp minimal 10 digit')
        .max(15, 'Nomor WhatsApp maksimal 15 digit')
        .regex(/^[0-9]+$/, 'Nomor WhatsApp hanya boleh berisi angka')
        .startsWith('08', 'Nomor WhatsApp harus diawali dengan 08'),
    studentName: z.string().min(2, 'Nama anak minimal 2 karakter'),
    studentAge: z.string()
        .regex(/^([0-9]+)\s*(Tahun|tahun)$/, 'Format usia harus "X Tahun" (contoh: 6 Tahun)'),
    currentGrade: z.string().min(1, 'Pilih jenjang pendidikan'),
    learningMethod: z.string().min(1, 'Pilih metode belajar'),
    programChoice: z.array(z.string()).min(1, 'Pilih minimal satu program belajar'),
});

export type RegistrationSchema = z.infer<typeof registrationSchema>;

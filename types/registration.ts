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
    programChoice: ProgramType;

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
    | 'smp';

export type ProgramType =
    | 'calistung'
    | 'english'
    | 'math'
    | 'homework';

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
    programChoice: ProgramType | '';
}

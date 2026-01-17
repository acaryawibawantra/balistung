export interface Program {
    id: string;
    title: string;
    slug: string;
    description: string;
    ageRange: string;
    type: ProgramType;
    coverImage: string;
    features: string[];
    curriculum: CurriculumItem[];
    schedule: ScheduleOption[];
    pricing: PricingPackage[];
    learningOutcomes: string[];
    teachers: Teacher[];
}

export type ProgramType = "PAUD" | "SD-1-2" | "SD-3-4";

export interface CurriculumItem {
    topic: string;
    description: string;
    duration: string;
}

export interface ScheduleOption {
    day: string;
    time: string;
    duration: string;
}

export interface PricingPackage {
    name: string;
    price: number;
    sessions: number;
    benefits: string[];
}

export interface Teacher {
    name: string;
    avatar: string;
    specialization: string;
    experience: string;
}

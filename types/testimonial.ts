export interface Testimonial {
    id: string;
    parentName: string;
    studentName: string;
    studentAge: number;
    program: string;
    rating: number;
    content: string;
    avatar?: string;
    date: string;
    videoUrl?: string;
}

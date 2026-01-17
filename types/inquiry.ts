export interface Inquiry {
    id: string;
    parentName: string;
    phone: string;
    email: string;
    studentName: string;
    studentAge: number;
    programInterest: string;
    message: string;
    status: InquiryStatus;
    createdAt: string;
}

export type InquiryStatus = "new" | "contacted" | "scheduled" | "enrolled" | "declined";

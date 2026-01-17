export interface Article {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    coverImage: string;
    category: ArticleCategory;
    author: {
        name: string;
        avatar: string;
        role: string;
    };
    publishedAt: string;
    readTime: number;
    tags: string[];
}

export type ArticleCategory =
    | "Tips Parenting"
    | "Metode Pembelajaran"
    | "Perkembangan Anak"
    | "Aktivitas Edukatif"
    | "Info Promo";

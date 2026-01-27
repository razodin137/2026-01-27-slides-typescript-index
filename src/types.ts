export type SlideType = 'title' | 'content' | 'split' | 'quiz';

export interface Slide {
    id: string;
    type: SlideType;
    title?: string;
    content?: string; // Markdown supported
    image?: string; // URL to image
    bulletPoints?: string[];
    // Quiz specific
    question?: string;
    options?: string[];
    correctAnswer?: number; // Index
}

export interface Lesson {
    id: string;
    title: string; // Lesson Title
    description?: string;
    slides: Slide[];
}

import type { Lesson } from '../../types';

export const lessonTemplate: Lesson = {
    // Unique identifier for the lesson (used in URL)
    id: 'lesson-id',
    // Title displayed in the menu and on the title slide
    title: 'Lesson Title',
    // Brief description of the lesson content
    description: 'A short description of what this lesson covers.',
    slides: [
        // 1. Title Slide
        {
            id: 'slide-1',
            type: 'title',
            title: 'Lesson Title',
            content: 'Subtitle or brief intro text.'
        },
        // 2. Content Slide (Standard)
        {
            id: 'slide-2',
            type: 'content',
            title: 'Content Slide Title',
            content: 'Main content goes here.',
            bulletPoints: [
                'First point',
                'Second point',
                'Third point'
            ]
        },
        // 3. Split Slide (Image + Text)
        {
            id: 'slide-3',
            type: 'split',
            title: 'Split Slide Title',
            content: 'Content that appears alongside the image.',
            image: 'https://images.unsplash.com/photo-1544367563-12123d895951', // Replace with a relevant Unsplash URL
            bulletPoints: [
                'Key detail about the image',
                'Another detail'
            ]
        },
        // 4. Quiz Slide
        {
            id: 'slide-4',
            type: 'quiz',
            title: 'Quiz Time!',
            question: 'What is the answer to this question?',
            options: [
                'Option A',
                'Option B (Correct)',
                'Option C',
                'Option D'
            ],
            correctAnswer: 1 // 0-based index of the correct answer
        },
        // 5. Conclusion
        {
            id: 'slide-5',
            type: 'title',
            title: 'Great Job!',
            content: 'You have completed this lesson.'
        }
    ]
};

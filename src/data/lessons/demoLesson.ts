import type { Lesson } from '../../types';

export const demoLesson: Lesson = {
    id: 'demo',
    title: 'Introduction to English Greetings',
    description: 'Learn how to say hello and introduce yourself.',
    slides: [
        {
            id: 's1',
            type: 'title',
            title: 'English Greetings',
            content: 'Lesson 1: Basics of saying Hello'
        },
        {
            id: 's2',
            type: 'content',
            title: 'Common Greetings',
            content: 'Here are the most common ways to say hello in English:',
            bulletPoints: [
                'Hello (Formal)',
                'Hi (Informal)',
                'Hey (Very Informal)',
                'Good Morning / Afternoon / Evening'
            ]
        },
        {
            id: 's3',
            type: 'split',
            title: 'Practice Time',
            content: 'Look at the image and imagine what they are saying.',
            image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800',
            bulletPoints: ['Is it formal?', 'Is it informal?']
        },
        {
            id: 's4',
            type: 'quiz',
            title: 'Quiz Time!',
            question: 'Which is a formal greeting?',
            options: [
                'Hey!',
                'Good Morning',
                'Sup?',
                'Yo'
            ],
            correctAnswer: 1
        }
    ]
};

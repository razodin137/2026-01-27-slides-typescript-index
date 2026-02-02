import type { Lesson } from '../../types';

export const lessonTemplate: Lesson = {
    id: 'template-lesson',
    title: 'Template Lesson Title',
    description: 'A comprehensive template with 23 slides covering all slide types.',
    slides: [
        // 1. Title Slide
        {
            id: 'template-1',
            type: 'title',
            title: 'Lesson Title',
            content: 'Subtitle or brief intro text.'
        },
        // 2. Introduction
        {
            id: 'template-2',
            type: 'content',
            title: 'Introduction',
            content: 'Main concept introduction.',
            bulletPoints: [
                'Point 1',
                'Point 2',
                'Point 3',
                'Point 4'
            ]
        },
        // 3. Concept 1
        {
            id: 'template-3',
            type: 'content',
            title: 'Key Concept 1',
            content: 'Explanation of the first key concept.',
            bulletPoints: [
                'Detail A',
                'Detail B',
                'Detail C',
                'Detail D'
            ]
        },
        // 4. Concept 1 Details
        {
            id: 'template-4',
            type: 'content',
            title: 'Concept 1: Deeper Dive',
            content: 'More specific details about concept 1.',
            bulletPoints: [
                'Specific 1',
                'Specific 2',
                'Specific 3',
                'Specific 4'
            ]
        },
        // 5. Practice: Concept 1
        {
            id: 'template-5',
            type: 'quiz',
            title: 'Quiz: Concept 1',
            question: 'Question related to concept 1?',
            options: [
                'Distractor 1',
                'Correct Answer',
                'Distractor 2',
                'Distractor 3'
            ],
            correctAnswer: 1
        },
        // 6. Split: Visual Example
        {
            id: 'template-6',
            type: 'split',
            title: 'Visual Example',
            content: 'Context for the image shown.',
            image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800',
            bulletPoints: ['Observation 1', 'Observation 2', 'Observation 3']
        },
        // 7. Section Break: Concept 2
        {
            id: 'template-7',
            type: 'title',
            title: 'Section 2: The Tricky Part',
            content: 'Transition to the next major topic.'
        },
        // 8. Concept 2 Group 1
        {
            id: 'template-8',
            type: 'content',
            title: 'Concept 2 (Group 1)',
            content: 'First group of items in this category.',
            bulletPoints: [
                'Item A',
                'Item B',
                'Item C',
                'Item D'
            ]
        },
        // 9. Concept 2 Group 2
        {
            id: 'template-9',
            type: 'content',
            title: 'Concept 2 (Group 2)',
            content: 'Second group of items in this category.',
            bulletPoints: [
                'Item E',
                'Item F',
                'Item G',
                'Item H'
            ]
        },
        // 10. Concept 2 Group 3
        {
            id: 'template-10',
            type: 'content',
            title: 'Concept 2 (Group 3)',
            content: 'Third group of items or exceptions.',
            bulletPoints: [
                'Exception 1',
                'Exception 2',
                'Exception 3',
                'Exception 4'
            ]
        },
        // 11. Practice: Concept 2
        {
            id: 'template-11',
            type: 'quiz',
            title: 'Quiz: Concept 2',
            question: 'Question related to concept 2?',
            options: [
                'Distractor',
                'Distractor',
                'Correct Answer',
                'Distractor'
            ],
            correctAnswer: 2
        },
        // 12. Split: Visual Example 2
        {
            id: 'template-12',
            type: 'split',
            title: 'Another Visual Example',
            content: 'Context for this specific example.',
            image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800',
            bulletPoints: ['Detail 1', 'Detail 2', 'Detail 3']
        },
        // 13. Negatives / Counter-points
        {
            id: 'template-13',
            type: 'content',
            title: 'Negatives / Exceptions',
            content: 'How to handle negative cases or exceptions.',
            bulletPoints: [
                'Rule for negative',
                'Example negative 1',
                'Example negative 2',
                'Important warning'
            ]
        },
        // 14. Practice: Negatives
        {
            id: 'template-14',
            type: 'quiz',
            title: 'Quiz: Exceptions',
            question: 'Which is the correct negative form?',
            options: [
                'Incorrect form',
                'Correct form',
                'Incorrect form',
                'Incorrect form'
            ],
            correctAnswer: 1
        },
        // 15. Questions / Interrogatives (Type A)
        {
            id: 'template-15',
            type: 'content',
            title: 'Asking Questions (Type A)',
            content: 'Structure for Yes/No questions.',
            bulletPoints: [
                'Structure rule',
                'Example 1',
                'Example 2',
                'Short answers'
            ]
        },
        // 16. Questions / Interrogatives (Type B)
        {
            id: 'template-16',
            type: 'content',
            title: 'Asking Questions (Type B)',
            content: 'Structure for Wh- questions.',
            bulletPoints: [
                'Structure rule',
                'Example A',
                'Example B',
                'Example C'
            ]
        },
        // 17. Special Cases
        {
            id: 'template-17',
            type: 'content',
            title: 'Special Cases',
            content: 'Unique rules that don\'t fit the standard pattern.',
            bulletPoints: [
                'Case 1',
                'Case 2',
                'Case 3',
                'Case 4'
            ]
        },
        // 18. Practice: Special Cases
        {
            id: 'template-18',
            type: 'quiz',
            title: 'Quiz: Special Cases',
            question: 'Test knowledge of special cases.',
            options: [
                'Wrong',
                'Wrong',
                'Correct',
                'Wrong'
            ],
            correctAnswer: 2
        },
        // 19. Context/Keywords
        {
            id: 'template-19',
            type: 'content',
            title: 'Keywords & Context',
            content: 'Words or signals that indicate this topic.',
            bulletPoints: [
                'Keyword 1',
                'Keyword 2',
                'Keyword 3',
                'Keyword 4'
            ]
        },
        // 20. Recap
        {
            id: 'template-20',
            type: 'content',
            title: 'Summary',
            content: 'Recap of all major rules.',
            bulletPoints: [
                'Rule 1 Check',
                'Rule 2 Check',
                'Rule 3 Check',
                'Rule 4 Check'
            ]
        },
        // 21. Final Challenge 1
        {
            id: 'template-21',
            type: 'quiz',
            title: 'Final Challenge 1',
            question: 'Comprehensive question 1.',
            options: [
                'Option A',
                'Option B',
                'Correct Option',
                'Option D'
            ],
            correctAnswer: 2
        },
        // 22. Final Challenge 2
        {
            id: 'template-22',
            type: 'quiz',
            title: 'Final Challenge 2',
            question: 'Comprehensive question 2.',
            options: [
                'Correct Option',
                'Option B',
                'Option C',
                'Option D'
            ],
            correctAnswer: 0
        },
        // 23. Conclusion
        {
            id: 'template-23',
            type: 'title',
            title: 'Conclusion',
            content: 'Wrap up and next steps.'
        }
    ]
};

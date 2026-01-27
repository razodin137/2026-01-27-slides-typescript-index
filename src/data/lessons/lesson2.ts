import type { Lesson } from '../../types';

export const lesson2: Lesson = {
    id: 'past-simple',
    title: 'Mastering Past Simple Tense',
    description: 'Learn how to talk about completed actions in the past with regular and irregular verbs.',
    slides: [
        // 1. Title Slide
        {
            id: 'ls2-1',
            type: 'title',
            title: 'The Past Simple Tense',
            content: 'Talking about yesterday, last year, and history.'
        },
        // 2. Introduction
        {
            id: 'ls2-2',
            type: 'content',
            title: 'When do we use it?',
            content: 'We use the Past Simple to talk about finished actions.',
            bulletPoints: [
                'Finished time words (yesterday, last week, in 1999)',
                'Stories and narratives',
                'Historical events',
                'Habits in the past'
            ]
        },
        // 3. Regular Verbs Rule
        {
            id: 'ls2-3',
            type: 'content',
            title: 'Regular Verbs: +ed',
            content: 'For most verbs, we simply add "-ed" to the base form.',
            bulletPoints: [
                'work → worked',
                'play → played',
                'visit → visited',
                'watch → watched'
            ]
        },
        // 4. Regular Verbs: Spelling Rules
        {
            id: 'ls2-4',
            type: 'content',
            title: 'Spelling Rules for -ed',
            content: 'Be careful with spelling changes!',
            bulletPoints: [
                'live → lived (ends in e, add d)',
                'study → studied (ends in y, change to ied)',
                'stop → stopped (CVC, double consonant)',
                'plan → planned'
            ]
        },
        // 5. Practice: Regular Verbs
        {
            id: 'ls2-5',
            type: 'quiz',
            title: 'Quiz: Spelling Check',
            question: 'What is the past form of "try"?',
            options: [
                'tryed',
                'tried',
                'tred',
                'tired'
            ],
            correctAnswer: 1
        },
        // 6. Split: Visual Example
        {
            id: 'ls2-6',
            type: 'split',
            title: 'Example in Context',
            content: 'Yesterday, she worked late at the office.',
            image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800',
            bulletPoints: ['Subject: She', 'Verb: worked (regular)', 'Time: Yesterday']
        },
        // 7. Irregular Verbs Intro
        {
            id: 'ls2-7',
            type: 'title',
            title: 'The Tricky Part: Irregular Verbs',
            content: 'These do NOT follow the -ed rule.'
        },
        // 8. Common Irregulars 1
        {
            id: 'ls2-8',
            type: 'content',
            title: 'Common Irregular Verbs (Group 1)',
            content: 'Verbs that change completely.',
            bulletPoints: [
                'go → went',
                'do → did',
                'have → had',
                'be → was/were'
            ]
        },
        // 9. Common Irregulars 2
        {
            id: 'ls2-9',
            type: 'content',
            title: 'Common Irregular Verbs (Group 2)',
            content: 'Verbs where the vowel changes.',
            bulletPoints: [
                'come → came',
                'know → knew',
                'write → wrote',
                'sleep → slept'
            ]
        },
        // 10. Common Irregulars 3 (No Change)
        {
            id: 'ls2-10',
            type: 'content',
            title: 'No Change Verbs',
            content: 'Some verbs stay exactly the same!',
            bulletPoints: [
                'cut → cut',
                'put → put',
                'hit → hit',
                'read → read (pronounced "red")'
            ]
        },
        // 11. Practice: Irregular Verbs
        {
            id: 'ls2-11',
            type: 'quiz',
            title: 'Quiz: Irregular Challenge',
            question: 'They ___ to the cinema last night.',
            options: [
                'goed',
                'gone',
                'went',
                'want'
            ],
            correctAnswer: 2
        },
        // 12. Split: Visual Example Irregular
        {
            id: 'ls2-12',
            type: 'split',
            title: 'Example in Context',
            content: 'He bought a new car last month.',
            image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800',
            bulletPoints: ['Verb: buy -> bought', 'Irregular verb', 'Time: last month']
        },
        // 13. Negatives
        {
            id: 'ls2-13',
            type: 'content',
            title: 'Making Negative Sentences',
            content: 'Use "did not" (didn\'t) + Base Verb.',
            bulletPoints: [
                'I played → I didn\'t play',
                'She went → She didn\'t go',
                'They saw → They didn\'t see',
                'IMPORTANT: Don\'t use past form after didn\'t!'
            ]
        },
        // 14. Practice: Negatives
        {
            id: 'ls2-14',
            type: 'quiz',
            title: 'Quiz: Fix the Mistake',
            question: 'Which sentence is CORRECT?',
            options: [
                'I didn\'t saw him.',
                'I didn\'t see him.',
                'I no saw him.',
                'I doesn\'t see him.'
            ],
            correctAnswer: 1
        },
        // 15. Questions (Yes/No)
        {
            id: 'ls2-15',
            type: 'content',
            title: 'Asking Yes/No Questions',
            content: 'Start with "Did" + Subject + Base Verb.',
            bulletPoints: [
                'Did you like the movie?',
                'Did she call you?',
                'Did they arrive on time?',
                'Short Answer: Yes, I did. / No, I didn\'t.'
            ]
        },
        // 16. Questions (Wh-)
        {
            id: 'ls2-16',
            type: 'content',
            title: 'Asking Wh- Questions',
            content: 'Wh- Word + did + Subject + Base Verb.',
            bulletPoints: [
                'Where did you go?',
                'What did you eat?',
                'When did she leave?',
                'Why did they cry?'
            ]
        },
        // 17. To Be (Was/Were)
        {
            id: 'ls2-17',
            type: 'content',
            title: 'Special Case: The Verb "To Be"',
            content: 'We do NOT use "did" with Was/Were.',
            bulletPoints: [
                'I was happy. (Not: I did be happy)',
                'Were you tired? (Not: Did you be tired?)',
                'She wasn\'t ready.',
                'They were late.'
            ]
        },
        // 18. Practice: To Be
        {
            id: 'ls2-18',
            type: 'quiz',
            title: 'Quiz: Was or Were?',
            question: '___ you at school yesterday?',
            options: [
                'Was',
                'Did',
                'Were',
                'Are'
            ],
            correctAnswer: 2
        },
        // 19. Time Expressions
        {
            id: 'ls2-19',
            type: 'content',
            title: 'Keyword: Time Expressions',
            content: 'These words signal Past Simple.',
            bulletPoints: [
                'Yesterday',
                'Last night / week / year',
                'Two days ago / An hour ago',
                'In 2010 / In the 90s'
            ]
        },
        // 20. Recap
        {
            id: 'ls2-20',
            type: 'content',
            title: 'Let\'s Review',
            content: 'Summary of rules:',
            bulletPoints: [
                'Regular: add -ed (played)',
                'Irregular: memorize (went, saw)',
                'Negative: didn\'t + base form',
                'Question: Did + subject + base form'
            ]
        },
        // 21. Final Challenge 1
        {
            id: 'ls2-21',
            type: 'quiz',
            title: 'Final Challenge 1',
            question: 'She ___ pizza last night.',
            options: [
                'eat',
                'eated',
                'ate',
                'eating'
            ],
            correctAnswer: 2
        },
        // 22. Final Challenge 2
        {
            id: 'ls2-22',
            type: 'quiz',
            title: 'Final Challenge 2',
            question: '___ they ___ the game?',
            options: [
                'Did / win',
                'Did / won',
                'Were / win',
                'Do / win'
            ],
            correctAnswer: 0
        },
        // 23. Conclusion
        {
            id: 'ls2-23',
            type: 'title',
            title: 'Great Job!',
            content: 'You have mastered the Past Simple Tense! Go ahead and practice talking about your weekend.'
        }
    ]
};

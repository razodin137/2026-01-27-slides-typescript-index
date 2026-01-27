import type { Lesson } from '../../types';

export const lesson3: Lesson = {
    id: 'present-perfect',
    title: 'Mastering Present Perfect Tense',
    description: 'Learn to connect the past and present, talking about experiences and unfinished actions.',
    slides: [
        // 1. Title Slide
        {
            id: 'ls3-1',
            type: 'title',
            title: 'The Present Perfect Tense',
            content: 'Connecting the past to the present moment.'
        },
        // 2. Introduction
        {
            id: 'ls3-2',
            type: 'content',
            title: 'When do we use it?',
            content: 'We use Present Perfect for actions with a connection to now.',
            bulletPoints: [
                'Life experiences (I have been to Japan)',
                'Recent finished actions (I have just eaten)',
                'Unfinished time (today, this week)',
                'Actions with a result now (I have lost my keys)'
            ]
        },
        // 3. The Formula
        {
            id: 'ls3-3',
            type: 'content',
            title: ' The Formula',
            content: 'Subject + Have/Has + Past Participle (V3).',
            bulletPoints: [
                'I have worked',
                'She has eaten',
                'We have played',
                'The "Past Participle" is the 3rd form of the verb.'
            ]
        },
        // 4. Auxiliary Rule (Have vs Has)
        {
            id: 'ls3-4',
            type: 'content',
            title: 'Have vs. Has',
            content: 'Choosing the correct helper verb is crucial.',
            bulletPoints: [
                'I / You / We / They → HAVE',
                'He / She / It → HAS',
                'Examples: "She has gone home." vs "They have gone home."'
            ]
        },
        // 5. Practice: Auxiliary Verbs
        {
            id: 'ls3-5',
            type: 'quiz',
            title: 'Quiz: Have or Has?',
            question: 'My brother ___ finished his homework.',
            options: [
                'have',
                'having',
                'has',
                'haves'
            ],
            correctAnswer: 2
        },
        // 6. Split: Visual Example
        {
            id: 'ls3-6',
            type: 'split',
            title: 'Example in Context',
            content: 'She has painted a beautiful picture.',
            image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=800',
            bulletPoints: ['Subject: She (Has)', 'Verb: painted (Regular V3)', 'Result: The picture is ready now']
        },
        // 7. Regular Verbs (V3)
        {
            id: 'ls3-7',
            type: 'title',
            title: 'Regular Past Participles',
            content: 'Good news! Regular V3 looks exactly like Past Simple (-ed).'
        },
        // 8. Regular Verbs Examples
        {
            id: 'ls3-8',
            type: 'content',
            title: 'Regular Verbs List',
            content: 'If the past tense is -ed, the participle is -ed.',
            bulletPoints: [
                'play → played → played',
                'visit → visited → visited',
                'cook → cooked → cooked',
                'live → lived → lived'
            ]
        },
        // 9. Irregular Verbs (V3) Intro
        {
            id: 'ls3-9',
            type: 'content',
            title: 'Irregular Past Participles',
            content: 'These are the "3rd Column" verbs you must memorize.',
            bulletPoints: [
                'go → went → GONE',
                'do → did → DONE',
                'eat → ate → EATEN',
                'see → saw → SEEN'
            ]
        },
        // 10. More Irregulars
        {
            id: 'ls3-10',
            type: 'content',
            title: 'More Common Irregulars',
            content: 'Some change completely, some stay the same.',
            bulletPoints: [
                'be → was/were → BEEN',
                'write → wrote → WRITTEN',
                'buy → bought → BOUGHT (Same as past)',
                'read → read → READ (Same as past)'
            ]
        },
        // 11. Practice: Irregular V3
        {
            id: 'ls3-11',
            type: 'quiz',
            title: 'Quiz: Irregular Challenge',
            question: 'I have never ___ that movie.',
            options: [
                'saw',
                'see',
                'seen',
                'seeing'
            ],
            correctAnswer: 2
        },
        // 12. Split: Visual Example Irregular
        {
            id: 'ls3-12',
            type: 'split',
            title: 'Example in Context',
            content: 'They have broken the window!',
            image: 'https://images.unsplash.com/photo-1610312633036-7494da27786b?auto=format&fit=crop&q=80&w=800',
            bulletPoints: ['Subject: They (Have)', 'Verb: break -> broken', 'Result: The window is currently broken']
        },
        // 13. Negatives
        {
            id: 'ls3-13',
            type: 'content',
            title: 'Making Negative Sentences',
            content: 'Use "haven\'t" (have not) or "hasn\'t" (has not) + V3.',
            bulletPoints: [
                'I haven\'t finished yet.',
                'She hasn\'t called me.',
                'We haven\'t been to Paris.',
                'Note: The verb stays in V3 form!'
            ]
        },
        // 14. Practice: Negatives
        {
            id: 'ls3-14',
            type: 'quiz',
            title: 'Quiz: Fix the Mistake',
            question: 'Which sentence is CORRECT?',
            options: [
                'He hasn\'t eating lunch.',
                'He doesn\'t have eaten lunch.',
                'He hasn\'t eaten lunch.',
                'He haven\'t eaten lunch.'
            ],
            correctAnswer: 2
        },
        // 15. Questions (Yes/No)
        {
            id: 'ls3-15',
            type: 'content',
            title: 'Asking Yes/No Questions',
            content: 'Swap the Subject and the Auxiliary (Have/Has).',
            bulletPoints: [
                'Statement: You have eaten.',
                'Question: Have you eaten?',
                'Statement: She has arrived.',
                'Question: Has she arrived?',
                'Short Answer: Yes, I have. / No, she hasn\'t.'
            ]
        },
        // 16. Questions (Wh-)
        {
            id: 'ls3-16',
            type: 'content',
            title: 'Asking Wh- Questions',
            content: 'Wh- Word + have/has + Subject + V3.',
            bulletPoints: [
                'Where have you been?',
                'What has she cooked?',
                'How long have they known each other?',
                'Why have you done that?'
            ]
        },
        // 17. Signal Words: Just/Already/Yet
        {
            id: 'ls3-17',
            type: 'content',
            title: 'Keywords: Just, Already, Yet',
            content: 'These words emphasize timing.',
            bulletPoints: [
                'Just: Very recently ("I have just arrived")',
                'Already: Sooner than expected ("I have already finished")',
                'Yet: Until now (Negatives/Questions only: "Have you started yet?")'
            ]
        },
        // 18. Practice: Keywords
        {
            id: 'ls3-18',
            type: 'quiz',
            title: 'Quiz: Using "Yet"',
            question: 'I haven\'t washed the dishes ___.',
            options: [
                'just',
                'already',
                'yet',
                'ever'
            ],
            correctAnswer: 2
        },
        // 19. Signal Words: For vs Since
        {
            id: 'ls3-19',
            type: 'content',
            title: 'Keywords: For vs. Since',
            content: 'Used to answer "How long?".',
            bulletPoints: [
                'FOR: A duration/amount of time (for 2 hours, for 5 years)',
                'SINCE: A specific starting point (since Monday, since 2010)',
                'Example: I have lived here for 3 years / since 2021.'
            ]
        },
        // 20. Recap
        {
            id: 'ls3-20',
            type: 'content',
            title: 'Let\'s Review',
            content: 'Summary of rules:',
            bulletPoints: [
                'Formula: Have/Has + Past Participle (V3)',
                'Usage: Experiences, recent actions, unfinished time',
                'Keywords: For, Since, Just, Yet, Already, Ever/Never',
                'Be careful with irregular verbs!'
            ]
        },
        // 21. Final Challenge 1
        {
            id: 'ls3-21',
            type: 'quiz',
            title: 'Final Challenge 1',
            question: 'She ___ ___ in London for ten years.',
            options: [
                'have / live',
                'has / lived',
                'is / lived',
                'has / live'
            ],
            correctAnswer: 1
        },
        // 22. Final Challenge 2
        {
            id: 'ls3-22',
            type: 'quiz',
            title: 'Final Challenge 2',
            question: '___ you ever ___ sushi?',
            options: [
                'Did / eat',
                'Have / ate',
                'Have / eaten',
                'Has / eaten'
            ],
            correctAnswer: 2
        },
        // 23. Conclusion
        {
            id: 'ls3-23',
            type: 'title',
            title: 'Excellent Work!',
            content: 'You are now ready to talk about your life experiences using Present Perfect!'
        }
    ]
};
import type { Lesson } from '../../types';

export const adjectiveLesson: Lesson = {
    id: 'mastering-adjectives',
    title: 'Mastering Adjectives',
    description: 'A deep dive into the world of descriptors: from basic types to the correct order of adjectives.',
    slides: [
        // 1. Title Slide
        {
            id: 'adj-1',
            type: 'title',
            title: 'Mastering Adjectives',
            content: 'The Art of Adding Color and Detail to Your Sentences.'
        },
        // 2. Introduction
        {
            id: 'adj-2',
            type: 'content',
            title: 'What is an Adjective?',
            content: 'Adjectives are words that describe or modify nouns and pronouns.',
            bulletPoints: [
                'They tell us more about a person, place, or thing.',
                'They answer: What kind? Which one? How many?',
                'Example: The "blue" car (What kind?)',
                'Example: "Three" apples (How many?)'
            ]
        },
        // 3. Concept 1: Descriptive Adjectives
        {
            id: 'adj-3',
            type: 'content',
            title: 'Descriptive Adjectives',
            content: 'The most common type, used to express qualities or physical traits.',
            bulletPoints: [
                'Size: Large, tiny, massive',
                'Shape: Round, square, flat',
                'Color: Crimson, pale, bright',
                'Texture: Smooth, rough, slimy'
            ]
        },
        // 4. Concept 1 Details: Quantitative Adjectives
        {
            id: 'adj-4',
            type: 'content',
            title: 'Quantitative Adjectives',
            content: 'These describe the quantity or amount of a noun.',
            bulletPoints: [
                'Definite: One, ten, fifty',
                'Indefinite: Some, few, many',
                'Whole: All, half, whole',
                'Example: I have "several" ideas.'
            ]
        },
        // 5. Practice: Concept 1
        {
            id: 'adj-5',
            type: 'quiz',
            title: 'Quiz: Identifying Types',
            question: 'In the sentence "I saw several fluffy clouds," which word is a quantitative adjective?',
            options: [
                'Saw',
                'Several',
                'Fluffy',
                'Clouds'
            ],
            correctAnswer: 1
        },
        // 6. Split: Visual Example
        {
            id: 'adj-6',
            type: 'split',
            title: 'Visualizing Descriptors',
            content: 'Look at how adjectives change the mood of a scene.',
            image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800',
            bulletPoints: [
                'Jagged, snow-capped peaks',
                'Lush, green valleys',
                'A solitary, distant hiker',
                'Clear, turquoise water'
            ]
        },
        // 7. Section Break: Advanced Types
        {
            id: 'adj-7',
            type: 'title',
            title: 'Section 2: Proper & Possessive',
            content: 'Moving beyond simple descriptions.'
        },
        // 8. Concept 2 Group 1: Proper Adjectives
        {
            id: 'adj-8',
            type: 'content',
            title: 'Proper Adjectives',
            content: 'Derived from proper nouns (places or people) and always capitalized.',
            bulletPoints: [
                'Italian pasta (from Italy)',
                'Shakespearean play (from Shakespeare)',
                'Victorian era (from Victoria)',
                'Martian soil (from Mars)'
            ]
        },
        // 9. Concept 2 Group 2: Possessive Adjectives
        {
            id: 'adj-9',
            type: 'content',
            title: 'Possessive Adjectives',
            content: 'Used to show ownership over a noun.',
            bulletPoints: [
                'My / Your / His / Her',
                'Its (no apostrophe!)',
                'Our / Their',
                'Example: "Their" house is "our" favorite.'
            ]
        },
        // 10. Concept 2 Group 3: Demonstrative Adjectives
        {
            id: 'adj-10',
            type: 'content',
            title: 'Demonstrative Adjectives',
            content: 'Point out specific nouns in space or time.',
            bulletPoints: [
                'This (singular, near)',
                'That (singular, far)',
                'These (plural, near)',
                'Those (plural, far)'
            ]
        },
        // 11. Practice: Concept 2
        {
            id: 'adj-11',
            type: 'quiz',
            title: 'Quiz: Demonstratives',
            question: 'Which adjective should you use for plural items that are far away?',
            options: [
                'This',
                'These',
                'Those',
                'That'
            ],
            correctAnswer: 2
        },
        // 12. Split: Visual Example 2
        {
            id: 'adj-12',
            type: 'split',
            title: 'Proper Adjectives in Action',
            content: 'Cultural and geographic descriptors.',
            image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800',
            bulletPoints: [
                'Spicy Mexican street food',
                'Traditional culinary techniques',
                'Colorful ceramic plates',
                'Sizzling grilled meat'
            ]
        },
        // 13. Negatives / Counter-points: Coordinate Adjectives
        {
            id: 'adj-13',
            type: 'content',
            title: 'Punctuation: Coordinate Adjectives',
            content: 'When do you use a comma between two adjectives?',
            bulletPoints: [
                'Rule: Use a comma if you can reverse the order.',
                'Test: Can you put "and" between them?',
                'Example: A cold, dark night (Correct)',
                'Example: A bright yellow bus (No comma - you can\'t say "yellow bright bus")'
            ]
        },
        // 14. Practice: Negatives
        {
            id: 'adj-14',
            type: 'quiz',
            title: 'Quiz: The Comma Test',
            question: 'Which phrase is punctuated correctly?',
            options: [
                'The long, red ribbon',
                'The long red, ribbon',
                'The, long red ribbon',
                'The long red ribbon,'
            ],
            correctAnswer: 0
        },
        // 15. The Order of Adjectives (Part A)
        {
            id: 'adj-15',
            type: 'content',
            title: 'The Royal Order (Part 1)',
            content: 'Native speakers follow a specific order instinctively.',
            bulletPoints: [
                '1. Opinion (Beautiful, ugly)',
                '2. Size (Big, small)',
                '3. Age (Old, new)',
                '4. Shape (Square, round)'
            ]
        },
        // 16. The Order of Adjectives (Part B)
        {
            id: 'adj-16',
            type: 'content',
            title: 'The Royal Order (Part 2)',
            content: 'The second half of the sequence.',
            bulletPoints: [
                '5. Color (Red, bluish)',
                '6. Origin (French, lunar)',
                '7. Material (Wooden, silk)',
                '8. Purpose (Sleeping bag, frying pan)'
            ]
        },
        // 17. Special Cases: Compound Adjectives
        {
            id: 'adj-17',
            type: 'content',
            title: 'Special Case: Compound Adjectives',
            content: 'Multiple words acting as a single descriptor.',
            bulletPoints: [
                'Usually hyphenated before the noun.',
                'Example: A "well-known" actor.',
                'Example: A "six-foot-tall" wall.',
                'Exception: No hyphen if it comes after the noun (The actor is well known).'
            ]
        },
        // 18. Practice: Special Cases
        {
            id: 'adj-18',
            type: 'quiz',
            title: 'Quiz: Compound Order',
            question: 'Choose the correct order for these adjectives: [Italian, delicious, old]',
            options: [
                'Italian delicious old pizza',
                'Old Italian delicious pizza',
                'Delicious old Italian pizza',
                'Delicious Italian old pizza'
            ],
            correctAnswer: 2
        },
        // 19. Context/Keywords
        {
            id: 'adj-19',
            type: 'content',
            title: 'Degrees of Comparison',
            content: 'Adjusting adjectives for intensity.',
            bulletPoints: [
                'Positive: Large',
                'Comparative: Larger (compares two)',
                'Superlative: Largest (compares three+)',
                'Irregular: Good -> Better -> Best'
            ]
        },
        // 20. Recap
        {
            id: 'adj-20',
            type: 'content',
            title: 'Summary Checklist',
            content: 'What we learned today:',
            bulletPoints: [
                'Descriptive vs. Quantitative',
                'Proper adjectives need capitals',
                'Possessive vs. Demonstrative',
                'The specific "Order of Adjectives"',
                'Compound hyphens'
            ]
        },
        // 21. Final Challenge 1
        {
            id: 'adj-21',
            type: 'quiz',
            title: 'Final Challenge 1',
            question: 'Identify the possessive adjective: "She left her blue umbrella in the Victorian hallway."',
            options: [
                'Blue',
                'Victorian',
                'Her',
                'Umbrella'
            ],
            correctAnswer: 2
        },
        // 22. Final Challenge 2
        {
            id: 'adj-22',
            type: 'quiz',
            title: 'Final Challenge 2',
            question: 'Which of these is a Proper Adjective?',
            options: [
                'Japanese',
                'Gigantic',
                'Those',
                'Wooden'
            ],
            correctAnswer: 0
        },
        // 23. Conclusion
        {
            id: 'adj-23',
            type: 'title',
            title: 'Great Job!',
            content: 'Now go forth and make your writing more colorful.'
        }
    ]
};

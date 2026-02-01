import type { Lesson } from '../../types';

export const beginnerAdjectivesLesson: Lesson = {
    id: 'everyday-adjectives-beginner',
    title: 'Describing Your World',
    description: 'Learn simple words to describe people and things in daily life.',
    slides: [
        // --- SECTION 1: SIZE (BIG & SMALL) ---
        {
            id: 's1',
            type: 'title',
            title: 'Describing Your World',
            content: 'Words for Size, Shape, and People.'
        },
        {
            id: 's2',
            type: 'content',
            title: 'What is an Adjective?',
            content: 'Adjectives are "describing words." They tell us more about a person, place, or thing.',
            bulletPoints: [
                'A car -> A **red** car.',
                'A house -> A **big** house.',
                'A friend -> A **tall** friend.'
            ]
        },
        {
            id: 's3',
            type: 'split',
            title: 'Basic Size: Big and Small',
            content: 'We use these every day for food, clothes, and animals.',
            image: 'https://images.unsplash.com/photo-1516750105099-4b8a83e217ee', // Elephant and Mouse vibe
            bulletPoints: [
                'Big: "The elephant is **big**."',
                'Small: "The mouse is **small**."',
                'Huge: "That bus is **huge**!"'
            ]
        },
        {
            id: 's4',
            type: 'content',
            title: 'Example Sentences: Size',
            content: 'Try saying these out loud:',
            bulletPoints: [
                '1. I have a **small** family.',
                '2. He lives in a **big** city.',
                '3. This coffee cup is **huge**!'
            ]
        },
        {
            id: 's5',
            type: 'quiz',
            title: 'Practice 1',
            question: 'An airplane is ____.',
            options: ['Tiny', 'Small', 'Big', 'Short'],
            correctAnswer: 2
        },

        // --- SECTION 2: SHAPE (ROUND & SQUARE) ---
        {
            id: 's6',
            type: 'title',
            title: 'Shapes Around Us',
            content: 'Common shapes we see every day.'
        },
        {
            id: 's7',
            type: 'split',
            title: 'Round and Square',
            content: 'Look at the objects in your room.',
            image: 'https://images.unsplash.com/photo-1518131394553-c6686144b0ad', // Clock and boxes
            bulletPoints: [
                'Round: "The wall clock is **round**."',
                'Square: "The window is **square**."',
                'Long: "The table is **long**."'
            ]
        },
        {
            id: 's8',
            type: 'content',
            title: 'Example Sentences: Shapes',
            content: 'How do we describe things?',
            bulletPoints: [
                '1. Soccer balls are **round**.',
                '2. A pizza box is **square**.',
                '3. A pencil is **long** and **thin**.'
            ]
        },
        {
            id: 's9',
            type: 'quiz',
            title: 'Practice 2',
            question: 'A coin is ____.',
            options: ['Square', 'Round', 'Long', 'Tall'],
            correctAnswer: 1
        },

        // --- SECTION 3: DESCRIBING PEOPLE (HEIGHT & WEIGHT) ---
        {
            id: 's10',
            type: 'title',
            title: 'Describing People',
            content: 'How to talk about your friends and family.'
        },
        {
            id: 's11',
            type: 'split',
            title: 'Height: Tall and Short',
            content: 'Comparing how high someone stands.',
            image: 'https://images.unsplash.com/photo-1508801935500-264775466d7f', // Tall person/Short person
            bulletPoints: [
                'Tall: "The basketball player is **tall**."',
                'Short: "The young child is **short**."',
                'Average: "I am **average height**."'
            ]
        },
        {
            id: 's12',
            type: 'content',
            title: 'Thin and Strong',
            content: 'Words for body types.',
            bulletPoints: [
                'Thin: "The marathon runner is **thin**."',
                'Strong: "The weightlifter is **strong**."',
                'Young: "My baby brother is **young**."',
                'Old: "My grandfather is **old**."'
            ]
        },
        {
            id: 's13',
            type: 'content',
            title: 'Example Sentences: People',
            content: 'Practice with these:',
            bulletPoints: [
                '1. My father is very **tall**.',
                '2. She is a **strong** woman.',
                '3. The **young** boy is playing.'
            ]
        },
        {
            id: 's14',
            type: 'quiz',
            title: 'Practice 3',
            question: 'The opposite of "Young" is ____.',
            options: ['Big', 'Strong', 'Old', 'Thin'],
            correctAnswer: 2
        },

        // --- SECTION 4: WEIGHT AND FEEL ---
        {
            id: 's15',
            type: 'title',
            title: 'Heavy and Light',
            content: 'How things feel when we pick them up.'
        },
        {
            id: 's16',
            type: 'split',
            title: 'Heavy vs. Light',
            content: 'Use these when moving things!',
            image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a', // Feathers and rocks
            bulletPoints: [
                'Heavy: "This suitcase is **heavy**."',
                'Light: "A feather is **light**."',
                'Hard: "The rock is **hard**."',
                'Soft: "The pillow is **soft**."'
            ]
        },
        {
            id: 's17',
            type: 'content',
            title: 'Sentence Practice',
            content: 'Pick the right word:',
            bulletPoints: [
                '1. I cannot lift this box. It is too **heavy**.',
                '2. My bed is very **soft**.',
                '3. Diamonds are very **hard**.'
            ]
        },
        {
            id: 's18',
            type: 'quiz',
            title: 'Practice 4',
            question: 'A pillow is usually ____.',
            options: ['Hard', 'Heavy', 'Soft', 'Long'],
            correctAnswer: 2
        },

        // --- SECTION 5: SIMPLE WORD ORDER ---
        {
            id: 's19',
            type: 'title',
            title: 'Putting it Together',
            content: 'How to use two adjectives together.'
        },
        {
            id: 's20',
            type: 'content',
            title: 'The "Size First" Rule',
            content: 'Always put the Size before the Color or Shape.',
            bulletPoints: [
                'Correct: A **big red** apple.',
                'Correct: A **small round** table.',
                'Correct: A **tall young** man.'
            ]
        },
        {
            id: 's21',
            type: 'content',
            title: 'Let\'s Practice Writing!',
            content: 'Describe these objects:',
            bulletPoints: [
                '1. [Blue] [Large] [Book] -> A **large blue book**.',
                '2. [Small] [Square] [Box] -> A **small square box**.',
                '3. [Tall] [Old] [Tree] -> A **tall old tree**.'
            ]
        },
        {
            id: 's22',
            type: 'quiz',
            title: 'Final Quiz',
            question: 'Which is correct?',
            options: ['A green big balloon', 'A big green balloon', 'A round big balloon', 'A short tall man'],
            correctAnswer: 1
        },
        {
            id: 's23',
            type: 'title',
            title: 'Great Job!',
            content: 'You can now describe things and people in English! Practice by looking around your room right now.'
        }
    ]
};
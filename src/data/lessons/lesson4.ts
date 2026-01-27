import type { Lesson } from '../../types';

export const cookingHouseholdLesson: Lesson = {
    id: 'cooking-household',
    title: 'Cooking & Household Vocabulary',
    description: 'Learn essential English vocabulary for cooking and household activities.',
    slides: [
        {
            id: 'ch-s1',
            type: 'title',
            title: 'Cooking & Household Vocabulary',
            content: 'Master everyday words for the kitchen and home'
        },
        {
            id: 'ch-s2',
            type: 'content',
            title: 'Kitchen Appliances',
            content: 'Common appliances you\'ll find in most kitchens:',
            bulletPoints: [
                'Refrigerator (Fridge) - keeps food cold',
                'Oven - for baking and roasting',
                'Microwave - heats food quickly',
                'Dishwasher - cleans dishes automatically',
                'Blender - mixes ingredients',
                'Toaster - toasts bread'
            ]
        },
        {
            id: 'ch-s3',
            type: 'content',
            title: 'Cooking Utensils & Equipment',
            content: 'Essential tools for preparing meals:',
            bulletPoints: [
                'Knife - for cutting ingredients',
                'Cutting board - for chopping food',
                'Pot - for boiling and cooking',
                'Pan - for frying and sautéing',
                'Whisk - for beating and mixing',
                'Spatula - for flipping and stirring'
            ]
        },
        {
            id: 'ch-s4',
            type: 'split',
            title: 'Cooking Methods',
            content: 'Different ways to prepare food. Each method uses different equipment and techniques.',
            image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&q=80&w=800',
            bulletPoints: [
                'Boiling - cooking in hot water',
                'Frying - cooking in oil',
                'Baking - cooking with dry heat',
                'Grilling - cooking over fire or heat'
            ]
        },
        {
            id: 'ch-s5',
            type: 'content',
            title: 'Household Chores & Activities',
            content: 'Common tasks around the house:',
            bulletPoints: [
                'Vacuum - to clean carpets',
                'Sweep - to clean floors with a broom',
                'Mop - to clean hard floors with water',
                'Dust - to remove dust from surfaces',
                'Laundry - washing and drying clothes',
                'Dishes - washing plates and cups'
            ]
        },
        {
            id: 'ch-s6',
            type: 'split',
            title: 'Household Items & Furniture',
            content: 'Items you find throughout your home. These are objects used daily for comfort and functionality.',
            image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800',
            bulletPoints: [
                'Bed - for sleeping',
                'Sofa (Couch) - for sitting',
                'Table - for eating and working',
                'Chair - for sitting',
                'Cupboard - for storing items',
                'Curtains - for privacy and light control'
            ]
        },
        {
            id: 'ch-s7',
            type: 'quiz',
            title: 'Quiz Time!',
            question: 'Which appliance is used for toasting bread?',
            options: [
                'Blender',
                'Toaster',
                'Refrigerator',
                'Microwave'
            ],
            correctAnswer: 1
        },
        {
            id: 'ch-s8',
            type: 'quiz',
            title: 'Another Quiz!',
            question: 'What is the action of cleaning carpets called?',
            options: [
                'Sweeping',
                'Mopping',
                'Vacuuming',
                'Dusting'
            ],
            correctAnswer: 2
        },
        {
            id: 'ch-s9',
            type: 'title',
            title: 'Excellent Work!',
            content: 'You\'ve learned cooking and household vocabulary. Keep practicing these words in your daily life!'
        }
    ]
};

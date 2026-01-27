import type { Lesson } from '../../types';

// Load all .ts files in the current directory
const modules = import.meta.glob('./*.ts', { eager: true });

export const lessons: Record<string, Lesson> = {};

// Iterate over the modules to find Lesson exports
for (const path in modules) {
    // Skip the index file itself and any file starting with _
    if (path.includes('index.ts') || path.split('/').pop()?.startsWith('_')) continue;

    const mod = modules[path] as any;

    // Check all exports in the module
    for (const key in mod) {
        const exportedItem = mod[key];

        // Duck typing: Check if the exported item looks like a Lesson
        if (
            exportedItem &&
            typeof exportedItem === 'object' &&
            'id' in exportedItem &&
            'title' in exportedItem &&
            'slides' in exportedItem
        ) {
            lessons[exportedItem.id] = exportedItem as Lesson;
        }
    }
}

export const getLesson = (id: string): Lesson | undefined => {
    return lessons[id];
};

export const getAllLessons = (): Lesson[] => {
    return Object.values(lessons);
};

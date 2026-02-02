# 📚 English Lessons

A simple, beautiful app for creating and learning English lessons with interactive slides.


### To view the slides: 

```bash
npm run dev
```

Then **Ctrl+Click** the link in the terminal (usually `http://localhost:5173`) to open the app in your browser. Your changes will update instantly!

## 🖨️ Printing Lessons

You can print any lesson as a PDF (one slide per page).

1. Open the lesson you want to print.
2. Click the **Print PDF** button in the top right corner.
3. In the print dialog, ensure **Landscape** is selected.

> **Tip:** If the slides aren't aligning well in the print, try switching between "scale" and "fit to page width" options in the print settings.

![Print Preview Example](https://via.placeholder.com/800x400?text=Print+Preview+Example)

---

## ➕ Adding a New Lesson

### Step 1: Create a Lesson File

Create a new file in `src/data/lessons/` called something like `lesson5.ts`:

```typescript
import type { Lesson } from '../../types';

export const myNewLesson: Lesson = {
    id: 'unique-lesson-id',           // Used internally (no spaces, use hyphens)
    title: 'My Lesson Title',          // Shown in the menu
    description: 'Brief description',  // Shows in lesson preview
    slides: [
        // Add your slides here
    ]
};
```

### Step 2: Add Your Slides

Each lesson is made of slides. You have 4 types to choose from:

#### Title Slide (Opening/Closing)
```typescript
{
    id: 'slide-1',
    type: 'title',
    title: 'Welcome!',
    content: 'Subtitle or intro text'
}
```

#### Content Slide (Text with Bullets)
```typescript
{
    id: 'slide-2',
    type: 'content',
    title: 'Main Content',
    content: 'Main text goes here.',
    bulletPoints: [
        'First point',
        'Second point',
        'Third point'
    ]
}
```

#### Split Slide (Text + Image)
```typescript
{
    id: 'slide-3',
    type: 'split',
    title: 'Image & Text',
    content: 'Text that appears alongside an image.',
    image: 'https://images.unsplash.com/photo-...',  // Unsplash URL
    bulletPoints: [
        'Detail about the image',
        'Another detail'
    ]
}
```

#### Quiz Slide
```typescript
{
    id: 'slide-4',
    type: 'quiz',
    title: 'Quiz Time!',
    question: 'What is the correct answer?',
    options: [
        'Option A',
        'Option B (Correct)',
        'Option C',
        'Option D'
    ],
    correctAnswer: 1  // 0-based index (0 = first option, 1 = second, etc.)
}
```

### Step 3: Save Your Work

```bash
git add src/data/lessons/lesson5.ts
git commit -m "Add new lesson: My Lesson Title"
git push
```

---

## 📁 Project Structure

```
src/
├── data/lessons/        ← Add your lessons here!
│   ├── demoLesson.ts
│   ├── lesson2.ts
│   ├── lesson3.ts
│   ├── lesson4.ts
│   └── index.ts         (auto-discovers all lessons)
```


## 💡 Tips

- **Images**: Use [Unsplash](https://unsplash.com) for free, high-quality images. Just copy the photo URL!
- **IDs**: Use unique IDs with hyphens (e.g., `cooking-household`, not `cooking household`)
- **Auto-Discovery**: Your lesson will automatically appear once saved—no registration needed!
- **Hot Reload**: The app updates instantly when you save—no need to refresh!

---

**Happy teaching!** 💕

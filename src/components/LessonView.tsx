import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getLesson } from '../data/lessons';
import AppLayout from './Layout/AppLayout';
import SlideRenderer from './Slides/SlideRenderer';

const LessonView: React.FC = () => {
    const { lessonId } = useParams<{ lessonId: string }>();
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);

    const lesson = getLesson(lessonId || '');

    useEffect(() => {
        // Reset slide when lesson changes
        setCurrentSlide(0);
    }, [lessonId]);

    if (!lesson) {
        return (
            <div style={{ padding: '2rem', textAlign: 'center' }}>
                <h1>Lesson Not Found</h1>
                <button onClick={() => navigate('/')}>Go Home</button>
            </div>
        );
    }

    const handleNext = () => {
        if (currentSlide < lesson.slides.length - 1) {
            setCurrentSlide(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentSlide > 0) {
            setCurrentSlide(prev => prev - 1);
        }
    };

    return (
        <AppLayout
            currentSlideIndex={currentSlide}
            totalSlides={lesson.slides.length}
            lessonTitle={lesson.title}
            onNext={handleNext}
            onPrev={handlePrev}
        >
            <SlideRenderer slide={lesson.slides[currentSlide]} />
        </AppLayout>
    );
};

export default LessonView;

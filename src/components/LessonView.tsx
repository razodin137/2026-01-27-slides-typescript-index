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
        <>
            <AppLayout
                currentSlideIndex={currentSlide}
                totalSlides={lesson.slides.length}
                lessonTitle={lesson.title}
                onNext={handleNext}
                onPrev={handlePrev}
                onPrint={() => window.print()}
            >
                <SlideRenderer slide={lesson.slides[currentSlide]} />
            </AppLayout>

            {/* Print View - Hidden by default, shown in print media */}
            <div className="print-container" style={{ display: 'none' }}>
                {lesson.slides.map((slide, index) => (
                    <div key={`print-${slide.id}`} className="print-slide-page">
                        <SlideRenderer slide={slide} />
                        <div className="print-page-number">{index + 1}</div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default LessonView;

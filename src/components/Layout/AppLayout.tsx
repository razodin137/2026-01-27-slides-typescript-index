import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../styles/main.css';

interface AppLayoutProps {
    children: React.ReactNode;
    currentSlideIndex: number;
    totalSlides: number;
    lessonTitle: string;
    onNext: () => void;
    onPrev: () => void;
}

const AppLayout: React.FC<AppLayoutProps> = ({
    children,
    currentSlideIndex,
    totalSlides,
    lessonTitle,
    onNext,
    onPrev
}) => {
    const navigate = useNavigate();
    const progress = ((currentSlideIndex + 1) / totalSlides) * 100;

    // Handle keyboard navigation
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight' || e.key === ' ') {
                onNext();
            } else if (e.key === 'ArrowLeft') {
                onPrev();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onNext, onPrev]);

    return (
        <div className="app-layout" style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            background: 'linear-gradient(135deg, #eef2f3 0%, #e0e7ff 100%)'
        }}>

            {/* Header */}
            <header style={{
                padding: '1rem 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(255,255,255,0.3)'
            }}>
                <div
                    onClick={() => navigate('/')}
                    style={{ cursor: 'pointer', fontWeight: 800, color: 'var(--color-primary)' }}
                >
                    EnglishSlide
                </div>
                <div style={{ fontWeight: 600, color: 'var(--color-text-muted)' }}>
                    {lessonTitle}
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                    {currentSlideIndex + 1} / {totalSlides}
                </div>
            </header>

            {/* Progress Bar */}
            <div style={{ width: '100%', height: '6px', background: 'rgba(0,0,0,0.05)' }}>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                    style={{ height: '100%', background: 'var(--color-primary)' }}
                />
            </div>

            {/* Main Content Area */}
            <main style={{
                flex: 1,
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem'
            }}>
                {children}
            </main>

            {/* Controls (visible on hover or mobile) */}
            <div style={{
                padding: '1rem 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                pointerEvents: 'none' // Let clicks pass through to content if not on buttons
            }}>
                <button
                    onClick={onPrev}
                    disabled={currentSlideIndex === 0}
                    style={{
                        pointerEvents: 'auto',
                        opacity: currentSlideIndex === 0 ? 0.3 : 1,
                        background: 'var(--glass-bg)',
                        backdropFilter: 'var(--glass-blur)',
                        border: '1px solid var(--glass-border)',
                        padding: '0.5rem 1.5rem',
                        borderRadius: 'var(--radius-full)',
                        boxShadow: 'var(--glass-shadow)'
                    }}
                >
                    Previous
                </button>
                <button
                    onClick={onNext}
                    disabled={currentSlideIndex === totalSlides - 1}
                    style={{
                        pointerEvents: 'auto',
                        opacity: currentSlideIndex === totalSlides - 1 ? 0.3 : 1,
                        background: 'var(--color-primary)',
                        color: 'white',
                        border: 'none',
                        padding: '0.5rem 2rem',
                        borderRadius: 'var(--radius-full)',
                        boxShadow: '0 4px 12px rgba(99, 102, 241, 0.4)'
                    }}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default AppLayout;

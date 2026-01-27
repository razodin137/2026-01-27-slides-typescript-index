import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Slide } from '../../../types';

interface QuizSlideProps {
    slide: Slide;
}

const QuizSlide: React.FC<QuizSlideProps> = ({ slide }) => {
    const [selected, setSelected] = useState<number | null>(null);
    const [revealed, setRevealed] = useState(false);

    const handleSelect = (index: number) => {
        setSelected(index);
        setRevealed(true);
    };

    return (
        <div className="slide-template quiz-slide" style={{ maxWidth: '800px', width: '100%' }}>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: 'var(--color-primary-dark)' }}
            >
                {slide.question || slide.title}
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                {slide.options?.map((option, index) => {
                    let bgColor = 'var(--glass-bg)';
                    let borderColor = 'transparent';

                    if (revealed) {
                        if (index === slide.correctAnswer) {
                            bgColor = '#dcfce7'; // Green 100
                            borderColor = '#22c55e'; // Green 500
                        } else if (selected === index) {
                            bgColor = '#fee2e2'; // Red 100
                            borderColor = '#ef4444'; // Red 500
                        }
                    }

                    return (
                        <motion.button
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => !revealed && handleSelect(index)}
                            style={{
                                padding: '1.5rem',
                                fontSize: '1.2rem',
                                textAlign: 'left',
                                borderRadius: 'var(--radius-sm)',
                                backgroundColor: bgColor,
                                border: `2px solid ${revealed && (index === slide.correctAnswer || selected === index) ? borderColor : 'var(--glass-border)'}`,
                                cursor: revealed ? 'default' : 'pointer',
                                color: 'var(--color-text-main)',
                                fontWeight: 600,
                                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                            }}
                            whileHover={!revealed ? { scale: 1.02, backgroundColor: 'white' } : {}}
                            whileTap={!revealed ? { scale: 0.98 } : {}}
                        >
                            {option}
                        </motion.button>
                    );
                })}
            </div>

            {revealed && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ marginTop: '2rem', textAlign: 'center', fontSize: '1.5rem', fontWeight: 'bold' }}
                >
                    {selected === slide.correctAnswer ? (
                        <span style={{ color: '#22c55e' }}>Correct! 🎉</span>
                    ) : (
                        <span style={{ color: '#ef4444' }}>Try again next time!</span>
                    )}
                </motion.div>
            )}
        </div>
    );
};

export default QuizSlide;

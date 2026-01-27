import React from 'react';
import { motion } from 'framer-motion';
import type { Slide } from '../../../types';

interface ContentSlideProps {
    slide: Slide;
}

const ContentSlide: React.FC<ContentSlideProps> = ({ slide }) => {
    return (
        <div className="slide-template content-slide" style={{ width: '100%', maxWidth: '900px', padding: '0 2rem' }}>
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '2rem' }}
            >
                {slide.title}
            </motion.h2>

            {slide.content && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--color-text-main)' }}
                >
                    {slide.content}
                </motion.div>
            )}

            {slide.bulletPoints && (
                <ul style={{ listStyle: 'none' }}>
                    {slide.bulletPoints.map((point, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 + 0.3 }}
                            style={{
                                fontSize: '1.8rem',
                                marginBottom: '1rem',
                                display: 'flex',
                                alignItems: 'flex-start'
                            }}
                        >
                            <span style={{ color: 'var(--color-secondary)', marginRight: '1rem', fontWeight: 'bold' }}>•</span>
                            {point}
                        </motion.li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ContentSlide;

import React from 'react';
import { motion } from 'framer-motion';
import type { Slide } from '../../../types';

interface SplitSlideProps {
    slide: Slide;
}

const SplitSlide: React.FC<SplitSlideProps> = ({ slide }) => {
    return (
        <div className="slide-template split-slide" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            width: '100%',
            maxWidth: '1200px',
            alignItems: 'center'
        }}>
            <div className="text-content">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }}
                >
                    {slide.title}
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    style={{ fontSize: '1.5rem', color: 'var(--color-text-main)' }}
                >
                    {slide.content}
                    {slide.bulletPoints && (
                        <ul style={{ listStyle: 'none', marginTop: '1.5rem' }}>
                            {slide.bulletPoints.map((point, index) => (
                                <li key={index} style={{ marginBottom: '0.5rem', display: 'flex' }}>
                                    <span style={{ color: 'var(--color-secondary)', marginRight: '0.5rem' }}>➜</span>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    )}
                </motion.div>
            </div>

            <motion.div
                className="media-content"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                style={{
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    boxShadow: 'var(--glass-shadow)',
                    background: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '400px'
                }}
            >
                {slide.image ? (
                    <img src={slide.image} alt={slide.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                ) : (
                    <div style={{ color: 'var(--color-text-muted)' }}>No Image Provided</div>
                )}
            </motion.div>
        </div>
    );
};

export default SplitSlide;

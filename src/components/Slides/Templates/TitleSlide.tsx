import React from 'react';
import { motion } from 'framer-motion';
import type { Slide } from '../../../types';

interface TitleSlideProps {
    slide: Slide;
}

const TitleSlide: React.FC<TitleSlideProps> = ({ slide }) => {
    return (
        <div className="slide-template title-slide" style={{ textAlign: 'center' }}>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ fontSize: '4rem', color: 'var(--color-primary-dark)', marginBottom: '1rem' }}
            >
                {slide.title}
            </motion.h1>
            {slide.content && (
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    style={{ fontSize: '1.5rem', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}
                >
                    {slide.content}
                </motion.p>
            )}
        </div>
    );
};

export default TitleSlide;

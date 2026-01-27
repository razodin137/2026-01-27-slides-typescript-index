import React from 'react';
import type { Slide } from '../../types';
import TitleSlide from './Templates/TitleSlide';
import ContentSlide from './Templates/ContentSlide';
import SplitSlide from './Templates/SplitSlide';
import QuizSlide from './Templates/QuizSlide';
import { motion, AnimatePresence } from 'framer-motion';

interface SlideRendererProps {
    slide: Slide;
}

const SlideRenderer: React.FC<SlideRendererProps> = ({ slide }) => {

    const renderTemplate = () => {
        switch (slide.type) {
            case 'title':
                return <TitleSlide slide={slide} />;
            case 'content':
                return <ContentSlide slide={slide} />;
            case 'split':
                return <SplitSlide slide={slide} />;
            case 'quiz':
                return <QuizSlide slide={slide} />;
            default:
                return <div>Unknown Slide Type: {slide.type}</div>;
        }
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={slide.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                {renderTemplate()}
            </motion.div>
        </AnimatePresence>
    );
};

export default SlideRenderer;

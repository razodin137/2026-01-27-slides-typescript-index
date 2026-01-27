import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllLessons } from '../data/lessons';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
    const navigate = useNavigate();
    const lessons = getAllLessons();

    return (
        <div className="home-container" style={{
            padding: '4rem 2rem',
            maxWidth: '1000px',
            margin: '0 auto',
            width: '100%'
        }}>
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--color-primary-dark)' }}
            >
                Available Lessons
            </motion.h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                {lessons.map((lesson, index) => (
                    <motion.div
                        key={lesson.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        style={{
                            padding: '2rem',
                            backgroundColor: 'var(--color-bg-surface)',
                            borderRadius: 'var(--radius-md)',
                            boxShadow: 'var(--glass-shadow)',
                            border: '1px solid var(--glass-border)',
                            cursor: 'pointer',
                            transition: 'transform 0.2s ease'
                        }}
                        whileHover={{ y: -5, boxShadow: '0 12px 40px rgba(0,0,0,0.1)' }}
                        onClick={() => navigate(`/lesson/${lesson.id}`)}
                    >
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>{lesson.title}</h2>
                        <p style={{ color: 'var(--color-text-muted)' }}>{lesson.description}</p>
                        <div style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--color-primary)', fontWeight: 600 }}>
                            {lesson.slides.length} Slides →
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Home;

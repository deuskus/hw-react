import React from 'react';
import type { Course } from '../models/Course';
import styles from '../styles/CourseCard.module.css';

interface CourseCardProps {
    course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{course.title}</h2>
            <div className={styles.details}>
                <p>Длительность: {course.monthDuration} месяцев</p>
                <p>Часов: {course.hourDuration}</p>
            </div>
            <div className={styles.modules}>
                <h3>Модули:</h3>
                <ul>
                    {course.modules.map((module, index) => (
                        <li key={index}>{module}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CourseCard; 
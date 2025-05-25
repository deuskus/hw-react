import React from 'react';
import CourseCard from './CourseCard';
import type { Course } from '../models/Course';
import styles from '../styles/CourseList.module.css';

interface CourseListProps {
    courses: Course[];
}

const CourseList: React.FC<CourseListProps> = ({ courses }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Наши курсы</h1>
            <div className={styles.grid}>
                {courses.map((course, index) => (
                    <CourseCard key={index} course={course} />
                ))}
            </div>
        </div>
    );
};

export default CourseList; 
import React from 'react';
import CourseList from './components/CourseList';
import { coursesArray } from './arrays-2.js';
import './App.css'

function App() {
    return (
        <div>
            <CourseList courses={coursesArray} />
        </div>
    );
}

export default App;

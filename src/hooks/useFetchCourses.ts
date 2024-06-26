import { useEffect, useState } from 'react';
import { Course } from '@/types/courses/_types';

export function useFetchCourses() {
    const [courses, setCourses] = useState<Course[]>([]);

    useEffect(() => {
        async function fetchCourses() {
            const response = await fetch('/api/courses');
            const data = await response.json();
            setCourses(data);
        }
        fetchCourses();
    }, []);

    return courses;
}
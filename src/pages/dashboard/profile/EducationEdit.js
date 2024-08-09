import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import EducationService from 'services/EducationService';

const EducationEdit = () => {
    const [education, setEducation] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const params = useParams();

    const educationService = EducationService();

    useEffect(() => {
        const fetchEducation = async () => {
            setIsLoading(true);

            try {
                const education = await educationService.getEducationById(params.id);
                console.log(education);
                setEducation(education);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchEducation();
    }, []);


    return (
        <>
            {isLoading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>Error: {error.message}</div>
            ) : (
                <div>
                    <h1>Education #{education.id}</h1>
                    <div>{education.degree}</div>
                    <div>{education.school_name}</div>
                </div>
            )}
        </>
    );
}

export default EducationEdit;
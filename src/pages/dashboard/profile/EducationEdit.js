import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import EducationService from 'services/EducationService';

import EducationForm from 'components/dashboard/EducationForm';

const EducationEdit = () => {
    const [education, setEducation] = useState({

    });
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const params = useParams();

    const educationService = EducationService();
    console.log(education);

    const fetchGetEducation = async () => {
        setIsLoading(true);

        try {
            const educationRes = await educationService.getEducationById(params.id);
            console.log(educationRes);
            setEducation(educationRes);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchGetEducation();
    }, []);

    return (
        <>
            {isLoading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>Error: {error.message}</div>
            ) : (
                <div>
                    <h1>Edit education</h1>

                    <EducationForm action='UPDATE' educationData={education} />
                </div>

            )}
        </>
    );
}

export default EducationEdit;
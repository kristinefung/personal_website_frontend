import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import WorkService from 'services/WorkService';

const WorkEdit = () => {
    const [work, setWork] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const params = useParams();

    const workService = WorkService();

    useEffect(() => {
        const fetchWork = async () => {
            setIsLoading(true);

            try {
                const work = await workService.getWorkById(params.id);
                console.log(work);
                setWork(work);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchWork();
    }, []);


    return (
        <>
            {isLoading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>Error: {error.message}</div>
            ) : (
                <div>
                    <h1>Work #{work.id}</h1>
                    <div>{work.title}</div>
                    <div>{work.company_name}</div>
                </div>
            )}
        </>
    );
}

export default WorkEdit;
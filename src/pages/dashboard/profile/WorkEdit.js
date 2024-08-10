import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import WorkService from 'services/WorkService';

import WorkForm from 'components/dashboard/WorkForm';

const WorkEdit = () => {
    const [work, setWork] = useState({
    });
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const params = useParams();

    const workService = WorkService();
    console.log(work);

    const fetchGetWork = async () => {
        setIsLoading(true);

        try {
            const workRes = await workService.getWorkById(params.id);
            console.log(workRes);
            setWork(workRes);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchGetWork();
    }, []);

    return (
        <>
            {isLoading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>Error: {error.message}</div>
            ) : (
                <div>
                    <h1>Edit work</h1>
                    <WorkForm
                        action='UPDATE'
                        workData={work}
                    />
                </div>

            )}
        </>
    );
}

export default WorkEdit;
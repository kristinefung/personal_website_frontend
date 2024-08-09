import { useState } from 'react';

import WorkService from 'services/WorkService';

const WorkForm = ({ action = 'CREATE', workData = {} }) => {
    const [work, setWork] = useState(workData);

    const workService = WorkService();

    const fetchCreateWork = async () => {
        // setIsLoading(true);

        try {
            const workRes = await workService.createWork(work);
            console.log(workRes);
            return workRes;
        } catch (error) {
            // setError(error);
        } finally {
            // setIsLoading(false);
        }
    };

    const fetchUpdateWork = async () => {
        // setIsLoading(true);

        try {
            const workRes = await workService.updateWorkById(work.id, work);
            console.log(workRes);
            return workRes;
        } catch (error) {
            // setError(error);
        } finally {
            // setIsLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (action == 'CREATE') {
            const workRes = await fetchCreateWork();
            if (workRes) {
                alert("Success Create");
            }
        } else {
            const workRes = await fetchUpdateWork();
            if (workRes) {
                alert("Success Update");
            }
        }
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={work.title}
                    onChange={(e) => setWork({ ...work, title: e.target.value })}
                />
            </div>
            <div>
                <label htmlFor="company_name">Company Name:</label>
                <input
                    type="text"
                    id="company_name"
                    value={work.company_name}
                    onChange={(e) => setWork({ ...work, company_name: e.target.value })}
                />
            </div>
            <div>
                <label htmlFor="description">description:</label>
                <input
                    type="text"
                    id="description"
                    value={work.description}
                    onChange={(e) => setWork({ ...work, description: e.target.value })}
                />
            </div>
            <div>
                <label htmlFor="start_year_month">start_year_month:</label>
                <input
                    type="text"
                    id="start_year_month"
                    value={work.start_year_month}
                    onChange={(e) => setWork({ ...work, start_year_month: e.target.value })}
                />
            </div>
            <div>
                <label htmlFor="end_year_month">end_year_month:</label>
                <input
                    type="text"
                    id="end_year_month"
                    value={work.end_year_month}
                    onChange={(e) => setWork({ ...work, end_year_month: e.target.value })}
                />
            </div>
            <div>
                <label htmlFor="is_current">is_current:</label>
                <input
                    type="text"
                    id="is_current"
                    value={work.is_current}
                    onChange={(e) => setWork({ ...work, is_current: parseInt(e.target.value) })}
                />
            </div>
            <div>
                <button type="submit">{action}</button>
            </div>
        </form>
    )
}

export default WorkForm;
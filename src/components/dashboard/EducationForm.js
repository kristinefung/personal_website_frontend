import { useState } from 'react';

import EducationService from 'services/EducationService';

const EducationForm = ({ action = 'CREATE', educationData = {} }) => {
    const [education, setEducation] = useState(educationData);

    const educationService = EducationService();

    const fetchCreateEducation = async () => {
        // setIsLoading(true);

        try {
            const eduRes = await educationService.createEducation(education);
            console.log(eduRes);
            return eduRes;
        } catch (error) {
            // setError(error);
        } finally {
            // setIsLoading(false);
        }
    };

    const fetchUpdateEducation = async () => {
        // setIsLoading(true);

        try {
            const eduRes = await educationService.updateEducationById(education.id, education);
            console.log(eduRes);
            return eduRes;
        } catch (error) {
            // setError(error);
        } finally {
            // setIsLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (action == 'CREATE') {
            const eduRes = await fetchCreateEducation();
            if (eduRes) {
                alert("Success Create");
            }
        } else {
            const eduRes = await fetchUpdateEducation();
            if (eduRes) {
                alert("Success Update");
            }
        }
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="degree">degree:</label>
                <input
                    type="text"
                    id="degree"
                    value={education.degree}
                    onChange={(e) => setEducation({ ...education, degree: e.target.value })}
                />
            </div>
            <div>
                <label htmlFor="subject">subject:</label>
                <input
                    type="text"
                    id="subject"
                    value={education.subject}
                    onChange={(e) => setEducation({ ...education, subject: e.target.value })}
                />
            </div>
            <div>
                <label htmlFor="school_name">school_name:</label>
                <input
                    type="text"
                    id="school_name"
                    value={education.school_name}
                    onChange={(e) => setEducation({ ...education, school_name: e.target.value })}
                />
            </div>
            <div>
                <label htmlFor="description">description:</label>
                <input
                    type="text"
                    id="description"
                    value={education.description}
                    onChange={(e) => setEducation({ ...education, description: e.target.value })}
                />
            </div>
            <div>
                <label htmlFor="start_year_month">start_year_month:</label>
                <input
                    type="text"
                    id="start_year_month"
                    value={education.start_year_month}
                    onChange={(e) => setEducation({ ...education, start_year_month: e.target.value })}
                />
            </div>
            <div>
                <label htmlFor="end_year_month">end_year_month:</label>
                <input
                    type="text"
                    id="end_year_month"
                    value={education.end_year_month}
                    onChange={(e) => setEducation({ ...education, end_year_month: e.target.value })}
                />
            </div>
            <div>
                <label htmlFor="is_current">is_current:</label>
                <input
                    type="text"
                    id="is_current"
                    value={education.is_current}
                    onChange={(e) => setEducation({ ...education, is_current: parseInt(e.target.value) })}
                />
            </div>
            <div>
                <button type="submit">{action}</button>
            </div>
        </form>
    )
}

export default EducationForm;
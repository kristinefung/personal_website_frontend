import EducationForm from "components/dashboard/EducationForm";

const EducationCreate = () => {

    return (
        <>
            <div>
                <h1>Create Education</h1>
                <EducationForm
                    action='CREATE'
                    educationData={{
                        degree: '',
                        subject: '',
                        school_name: '',
                        description: '',
                        start_month: 0,
                        start_year: 0,
                        end_month: 0,
                        end_year: 0,
                        is_current: 0,
                    }}
                />
            </div>
        </>
    );
}

export default EducationCreate;
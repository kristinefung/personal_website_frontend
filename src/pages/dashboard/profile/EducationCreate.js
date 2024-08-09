import EducationForm from "components/dashboard/EducationForm";

const EducationCreate = () => {

    return (
        <>
            <div>
                <h1>Create Education</h1>
                <EducationForm action='CREATE' educationData={{}} />
            </div>
        </>
    );
}

export default EducationCreate;
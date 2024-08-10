import WorkForm from 'components/dashboard/WorkForm';

const WorkCreate = () => {

    return (
        <>
            <div>
                <h1>Create Work</h1>
                <WorkForm action='CREATE' />
            </div>
        </>
    );
}

export default WorkCreate;
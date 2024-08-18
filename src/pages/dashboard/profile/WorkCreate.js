import WorkForm from 'components/dashboard/form/WorkForm';

const WorkCreate = () => {

  return (
    <>
      <div>
        <h1>Create Work</h1>
        <WorkForm
          action='CREATE'
          workData={{
            title: "",
            company_name: "",
            description: "",
            start_month: 0,
            start_year: 0,
            end_month: 0,
            end_year: 0,
            is_current: 0
          }}
        />
      </div>
    </>
  );
}

export default WorkCreate;
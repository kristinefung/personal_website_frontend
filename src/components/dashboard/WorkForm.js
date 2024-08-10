import { useState } from 'react';

import { getMonthOptions, getYearOptions } from 'utils/common';

import WorkService from 'services/WorkService';

import InputText from 'components/form_element/InputText';
import Textarea from 'components/form_element/Textarea';
import DropdownList from 'components/form_element/DropdownList';
import Checkbox from 'components/form_element/Checkbox';

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
  console.log(work);

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
      <InputText
        label={"Title"}
        value={work.title}
        onChange={(e) => setWork({ ...work, title: e.target.value })}
      />
      <InputText
        label={"Company name"}
        value={work.company_name}
        onChange={(e) => setWork({ ...work, company_name: e.target.value })}
      />
      <Textarea
        label={"Description"}
        value={work.description}
        onChange={(e) => setWork({ ...work, description: e.target.value })}
      />
      <DropdownList
        label={"Start date"}
        value={work.start_year_month?.split('/')[1]}
        onChange={(e) => setWork({ ...work, start_year_month: `${work.start_year_month?.split('/')[0]}/${e.target.value}` })}
        options={getMonthOptions()}
      />
      <DropdownList
        label={""}
        value={work.start_year_month?.split('/')[0]}
        onChange={(e) => setWork({ ...work, start_year_month: `${e.target.value}/${work.start_year_month?.split('/')[1]}` })}
        options={getYearOptions()}
      />
      <DropdownList
        label={"End date"}
        value={work.end_year_month?.split('/')[1]}
        onChange={(e) => setWork({ ...work, end_year_month: `${work.end_year_month?.split('/')[0]}/${e.target.value}` })}
        options={getMonthOptions()}
      />
      <DropdownList
        label={""}
        value={work.end_year_month?.split('/')[0]}
        onChange={(e) => setWork({ ...work, end_year_month: `${e.target.value}/${work.end_year_month?.split('/')[1]}` })}
        options={getYearOptions()}
      />
      <Checkbox
        label={"Is current work"}
        isChecked={work.is_current === 1}
        onChange={(e) => setWork({ ...work, is_current: e.target.checked ? 1 : 0 })}
      />
      <div>
        <button type="submit">{action}</button>
      </div>
    </form>
  )
}

export default WorkForm;
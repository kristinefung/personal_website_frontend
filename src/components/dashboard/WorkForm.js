import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getMonthOptions, getYearOptions } from 'utils/common';
import { validateWork } from 'utils/validator';

import WorkService from 'services/WorkService';

import InputText from 'components/form_element/InputText';
import Textarea from 'components/form_element/Textarea';
import DropdownList from 'components/form_element/DropdownList';
import Checkbox from 'components/form_element/Checkbox';
import Button from 'components/form_element/Button';

const WorkForm = (
  {
    action = 'CREATE',
    workData
  }) => {
  const [work, setWork] = useState(workData);
  const [errors, setErrors] = useState({});
  const [fetchError, setFetchError] = useState("");

  const navigate = useNavigate();
  const workService = WorkService();

  const fetchCreateWork = async () => {
    // setIsLoading(true);

    try {
      const workRes = await workService.createWork(work);
      console.log(workRes);
      return workRes;
    } catch (error) {
      setFetchError(error.message);
    } finally {
      // setIsLoading(false);
    }
  };

  const fetchUpdateWork = async () => {
    // setIsLoading(true);

    try {
      const workRes = await workService.updateWorkById(work.id, work);
      return workRes;
    } catch (error) {
      setFetchError(error.message);
    } finally {
      // setIsLoading(false);
    }
  };
  console.log(work);

  const handleGoBack = () => {
    navigate('/dashboard/profile');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { isValid, newErrors } = validateWork(work);
    setErrors(newErrors);

    if (isValid) {
      if (action === 'CREATE') {
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
  }

  return (
    <form className="form work-form">
      <div className='row'>
        <b>Working experience</b>
      </div>
      <hr></hr>
      <div className='row'>
        <InputText
          label={"Title*"}
          value={work.title}
          onChange={(e) => setWork({ ...work, title: e.target.value })}
          errorMsg={errors.title}
        />
        <InputText
          label={"Company name*"}
          value={work.company_name}
          onChange={(e) => setWork({ ...work, company_name: e.target.value })}
          errorMsg={errors.company_name}
        />
      </div>
      <div className='row'>
        <Textarea
          label={"Description"}
          value={work.description}
          onChange={(e) => setWork({ ...work, description: e.target.value })}
          errorMsg={errors.description}
        />
      </div>
      <div className='row'>
        <Checkbox
          label={"Is current work*"}
          isChecked={work.is_current === 1}
          onChange={(e) => setWork({
            ...work,
            is_current: e.target.checked ? 1 : 0,
            end_month: e.target.checked ? '' : work.end_month,
            end_year: e.target.checked ? '' : work.end_year,
          })}
        />
      </div>
      <div className='row'>
        <DropdownList
          label={"Start date*"}
          value={work.start_month}
          onChange={(e) => setWork({ ...work, start_month: Number(e.target.value) })}
          options={getMonthOptions()}
          errorMsg={errors.start_month}
        />
        <DropdownList
          label={""}
          value={work.start_year}
          onChange={(e) => setWork({ ...work, start_year: Number(e.target.value) })}
          options={getYearOptions()}
          errorMsg={errors.start_year}
        />
      </div>
      <div className='row'>
        < DropdownList
          label={"End date*"}
          value={work.end_month}
          onChange={(e) => setWork({ ...work, end_month: Number(e.target.value) })}
          options={getMonthOptions()}
          isDisabled={work.is_current === 1}
          errorMsg={errors.end_month}
        />
        <DropdownList
          label={""}
          value={work.end_year}
          onChange={(e) => setWork({ ...work, end_year: Number(e.target.value) })}
          options={getYearOptions()}
          isDisabled={work.is_current === 1}
          errorMsg={errors.end_year}
        />
      </div>

      <div className='btn-row'>
        <Button
          label={'Back'}
          onClick={handleGoBack}
          styleIsReversed={true}
        />
        <Button
          type={"submit"}
          label={action === 'CREATE' ? 'Submit' : 'Save'}
          onClick={handleSubmit}
        />
      </div>
      <div className='row'>
        {fetchError}
      </div>
    </form>
  )
}

export default WorkForm;
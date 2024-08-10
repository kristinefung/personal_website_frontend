import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getMonthOptions, getYearOptions } from 'utils/common';

import WorkService from 'services/WorkService';

import InputText from 'components/form_element/InputText';
import Textarea from 'components/form_element/Textarea';
import DropdownList from 'components/form_element/DropdownList';
import Checkbox from 'components/form_element/Checkbox';
import Button from 'components/form_element/Button';

const WorkForm = (
  {
    action = 'CREATE',
    workData = {
      title: "",
      company_name: "",
      description: "",
      start_month: 0,
      start_year: 0,
      end_month: 0,
      end_year: 0,
      is_current: 0
    }
  }) => {
  const [work, setWork] = useState(workData);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
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

  const validateForm = () => {
    const currentYear = new Date().getFullYear();
    const minYear = currentYear - 100;
    let isValid = true;
    const newErrors = {
      title: '',
      company_name: '',
      description: '',
      start_month: '',
      start_year: '',
      end_month: '',
      end_year: '',
      is_current: '',
    };

    if (!work.title?.trim()) {
      newErrors.title = 'Required';
      isValid = false;
    }

    if (!work.company_name?.trim()) {
      newErrors.company_name = 'Required';
      isValid = false;
    }

    if (Number(work.start_month) < 1 || Number(work.start_month) > 12) {
      newErrors.start_month = 'Required';
      isValid = false;
    }

    if (Number(work.start_year) < minYear || Number(work.start_month) > currentYear) {
      newErrors.start_year = 'Required';
      isValid = false;
    }

    if (work.is_current === 0) {

      if (Number(work.end_month) < 1 || Number(work.end_month) > 12) {
        newErrors.end_month = 'Required';
        isValid = false;
      }

      if (Number(work.end_year) < minYear || Number(work.end_month) > currentYear) {
        newErrors.end_year = 'Required';
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleGoBack = () => {
    navigate('/dashboard/profile');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
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
          label={"Title"}
          value={work.title}
          onChange={(e) => setWork({ ...work, title: e.target.value })}
          errorMsg={errors.title}
        />
        <InputText
          label={"Company name"}
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
          label={"Is current work"}
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
          label={"Start date"}
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
          label={"End date"}
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
          label={action === 'CREATE' ? 'Submit' : 'Save'}
          onClick={handleSubmit}
        />
      </div>
    </form>
  )
}

export default WorkForm;
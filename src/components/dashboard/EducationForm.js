import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getMonthOptions, getYearOptions } from 'utils/common';

import EducationService from 'services/EducationService';

import InputText from 'components/form_element/InputText';
import Textarea from 'components/form_element/Textarea';
import DropdownList from 'components/form_element/DropdownList';
import Checkbox from 'components/form_element/Checkbox';
import Button from 'components/form_element/Button';

const EducationForm = (
  {
    action = 'CREATE',
    educationData = {
      degree: '',
      subject: '',
      school_name: '',
      description: '',
      start_month: 0,
      start_year: 0,
      end_month: 0,
      end_year: 0,
      is_current: 0,
    }
  }) => {
  const [education, setEducation] = useState(educationData);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const educationService = EducationService();

  const fetchCreateEducation = async () => {
    // setIsLoading(true);
    try {
      const eduRes = await educationService.createEducation(education);
      console.log(eduRes);
      return eduRes;
    } catch (error) {
      // setError(error);
      console.log(error);
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

  const validateForm = () => {
    const currentYear = new Date().getFullYear();
    const minYear = currentYear - 100;
    let isValid = true;
    const newErrors = {
      degree: '',
      subject: '',
      school_name: '',
      description: '',
      start_month: '',
      start_year: '',
      end_month: '',
      end_year: '',
      is_current: '',
    };

    if (!education.degree?.trim()) {
      newErrors.degree = 'Required';
      isValid = false;
    }

    if (!education.subject?.trim()) {
      newErrors.subject = 'Required';
      isValid = false;
    }

    if (!education.school_name?.trim()) {
      newErrors.school_name = 'Required';
      isValid = false;
    }

    if (Number(education.start_month) < 1 || Number(education.start_month) > 12) {
      newErrors.start_month = 'Required';
      isValid = false;
    }

    if (Number(education.start_year) < minYear || Number(education.start_month) > currentYear) {
      newErrors.start_year = 'Required';
      isValid = false;
    }

    if (education.is_current === 0) {

      if (Number(education.end_month) < 1 || Number(education.end_month) > 12) {
        newErrors.end_month = 'Required';
        isValid = false;
      }

      if (Number(education.end_year) < minYear || Number(education.end_month) > currentYear) {
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
    }


  };

  return (
    <form className="form education-form">
      <div className='row'>
        <b>Education history</b>
      </div>
      <hr></hr>
      <div className='row'>
        <InputText
          label={"Degree"}
          value={education.degree}
          onChange={(e) => setEducation({ ...education, degree: e.target.value })}
          errorMsg={errors.degree}
        />
        <InputText
          label={"Subject"}
          value={education.subject}
          onChange={(e) => setEducation({ ...education, subject: e.target.value })}
          errorMsg={errors.subject}
        />
      </div>
      <div className='row'>
        <InputText
          label={"School name"}
          value={education.school_name}
          onChange={(e) => setEducation({ ...education, school_name: e.target.value })}
          errorMsg={errors.school_name}
        />
      </div>
      <div className='row'>
        <Textarea
          label={"Description"}
          value={education.description}
          onChange={(e) => setEducation({ ...education, description: e.target.value })}
          errorMsg={errors.description}
        />
      </div>
      <div className='row'>
        <Checkbox
          label={"Is current education"}
          isChecked={education.is_current === 1}
          onChange={(e) => setEducation({
            ...education,
            is_current: e.target.checked ? 1 : 0,
            end_month: e.target.checked ? '' : education.end_month,
            end_year: e.target.checked ? '' : education.end_year
          })}
          errorMsg={errors.end_year_month}
        />
      </div>
      <div className='row'>
        <DropdownList
          label={"Start date"}
          value={education.start_month}
          onChange={(e) => setEducation({ ...education, start_month: Number(e.target.value) })}
          options={getMonthOptions()}
          errorMsg={errors.start_month}
        />
        <DropdownList
          label={" "}
          value={education.start_year}
          onChange={(e) => setEducation({ ...education, start_year: Number(e.target.value) })}
          options={getYearOptions()}
          errorMsg={errors.start_year}
        />
      </div>
      <div className='row'>
        < DropdownList
          label={"End date"}
          value={education.end_month}
          onChange={(e) => setEducation({ ...education, end_month: Number(e.target.value) })}
          options={getMonthOptions()}
          isDisabled={education.is_current === 1}
          errorMsg={errors.end_month}
        />
        <DropdownList
          label={" "}
          value={education.end_year}
          onChange={(e) => setEducation({ ...education, end_year: Number(e.target.value) })}
          options={getYearOptions()}
          isDisabled={education.is_current === 1}
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

export default EducationForm;
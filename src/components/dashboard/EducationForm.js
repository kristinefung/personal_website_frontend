import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getMonthOptions, getYearOptions } from 'utils/common';
import { validateEdu } from 'utils/validator';

import EducationService from 'services/EducationService';

import InputText from 'components/form_element/InputText';
import Textarea from 'components/form_element/Textarea';
import DropdownList from 'components/form_element/DropdownList';
import Checkbox from 'components/form_element/Checkbox';
import Button from 'components/form_element/Button';

const EducationForm = (
  {
    action = 'CREATE',
    educationData
  }) => {
  const [education, setEducation] = useState(educationData);
  const [errors, setErrors] = useState({});
  const [fetchError, setFetchError] = useState("");

  const navigate = useNavigate();
  const educationService = EducationService();

  const fetchCreateEducation = async () => {
    // setIsLoading(true);
    try {
      const eduRes = await educationService.createEducation(education);
      console.log(eduRes);
      return eduRes;
    } catch (error) {
      setFetchError(error.message);
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
      setFetchError(error.message);
    } finally {
      // setIsLoading(false);
    }
  };

  const handleGoBack = () => {
    navigate('/dashboard/profile');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { isValid, newErrors } = validateEdu(education);
    setErrors(newErrors);

    if (isValid) {
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
          label={"Degree*"}
          value={education.degree}
          onChange={(e) => setEducation({ ...education, degree: e.target.value })}
          errorMsg={errors.degree}
        />
        <InputText
          label={"Subject*"}
          value={education.subject}
          onChange={(e) => setEducation({ ...education, subject: e.target.value })}
          errorMsg={errors.subject}
        />
      </div>
      <div className='row'>
        <InputText
          label={"School name*"}
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
          label={"Is current education*"}
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
          label={"Start date*"}
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
          label={"End date*"}
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

export default EducationForm;
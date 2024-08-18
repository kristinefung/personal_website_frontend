import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { getEnquiryStatusOptions } from 'utils/common';
import { validateEnquiry } from 'utils/validator';

import EnquiryService from 'services/EnquiryService';

import InputText from 'components/dashboard/form_element/InputText';
import Textarea from 'components/dashboard/form_element/Textarea';
import DropdownList from 'components/dashboard/form_element/DropdownList';
import Button from 'components/dashboard/form_element/Button';

const EnquiryForm = (
  {
    action = 'CREATE',
    enquiryData
  }) => {
  const [enquiry, setEnquiry] = useState(enquiryData);
  const [errors, setErrors] = useState({});
  const [fetchError, setFetchError] = useState("");

  const enquiryRef = useRef(enquiry);

  const navigate = useNavigate();
  const enquiryService = EnquiryService();

  const fetchCreateEnquiry = async () => {
    // setIsLoading(true);

    try {
      const enquiryRes = await enquiryService.createEnquiry(enquiry);
      console.log(enquiryRes);
      return enquiryRes;
    } catch (error) {
      setFetchError(error.message);
    } finally {
      // setIsLoading(false);
    }
  };

  const fetchUpdateEnquiry = async () => {
    // setIsLoading(true);

    try {
      const enquiryRes = await enquiryService.updateEnquiryById(enquiry.id, enquiry);
      return enquiryRes;
    } catch (error) {
      setFetchError(error.message);
    } finally {
      // setIsLoading(false);
    }
  };
  console.log(enquiry);

  const handleGoBack = () => {
    navigate('/dashboard/profile');
  };

  const handleReset = () => {
    setEnquiry(enquiryRef.current);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { isValid, newErrors } = validateEnquiry(enquiry);
    setErrors(newErrors);

    if (isValid) {
      if (action === 'CREATE') {
        const enquiryRes = await fetchCreateEnquiry();
        if (enquiryRes) {
          alert("Success Create");
        }
      } else {
        const enquiryRes = await fetchUpdateEnquiry();
        if (enquiryRes) {
          alert("Success Update");
        }
      }
    };
  }

  return (
    <form className="form enquiry-form">
      <div className='row'>
        <b>Enquiry</b>
      </div>
      <hr></hr>
      <div className='row'>
        <InputText
          label={"Name"}
          value={enquiry.name}
          isDisabled={true}
        />
        <InputText
          label={"Company name"}
          value={enquiry.company_name}
          isDisabled={true}
        />
      </div>
      <div className='row'>
        <InputText
          label={"Email"}
          value={enquiry.email}
          isDisabled={true}
        />
        <InputText
          label={"Phone no."}
          value={enquiry.phone_no}
          isDisabled={true}
        />
      </div>
      <div className='row'>
        <Textarea
          label={"Message"}
          value={enquiry.comment}
          isDisabled={true}
        />
      </div>
      <div className='row'>
        <DropdownList
          label={"Status"}
          value={enquiry.status_id}
          onChange={(e) => setEnquiry({ ...enquiry, status_id: e.target.value })}
          options={getEnquiryStatusOptions()}
        />
        <div>
        </div>
      </div>

      <div className='btn-row'>
        <Button
          label={'Reset'}
          onClick={handleReset}
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

export default EnquiryForm;
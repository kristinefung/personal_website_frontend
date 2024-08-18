import React, { useState, useEffect } from 'react';
import { json } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons'

import EnquiryService from 'services/EnquiryService';
import EnquiryTable from 'components/dashboard/table/EnquiryTable';

const EnquiryList = () => {

  const [enquiries, setEnquiries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const enquiryService = EnquiryService();

  useEffect(() => {
    const fetchEnquiries = async () => {
      setIsLoading(true);
      try {
        const enquiries = await enquiryService.getAllEnquiries();
        setEnquiries(enquiries);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchEnquiries();
  }, []);

  document.body.setAttribute('id', 'dashboard-enquiry-page');
  return (
    <>
      <h1>Enquiries</h1>
      <div>
        <EnquiryTable />
      </div>
    </>
  )
}

export default EnquiryList;
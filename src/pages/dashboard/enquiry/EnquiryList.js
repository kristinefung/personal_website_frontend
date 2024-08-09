import React, { useState, useEffect } from 'react';
import { json } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons'

import EnquiryService from 'services/EnquiryService';

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
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <table id="enquiry-table" className='dashboard-table'>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Company Name</th>
                <th>Comment</th>
                <th>Status</th>
                <th>Created At</th>
                <th>Details</th>
              </tr>
              {enquiries.map((enquiry) => {
                return (
                  <tr key={enquiry.id}>
                    <td>{enquiry.name}</td>
                    <td>{enquiry.company_name}</td>
                    <td>{enquiry.comment}</td>
                    <td>{enquiry.status_id}</td>
                    <td>{enquiry.created_at}</td>
                    <td>
                      <a href={'/dashboard/enquiry/' + enquiry.id}>
                        <FontAwesomeIcon icon={faPen} />
                      </a>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  )
}

export default EnquiryList;
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashCan, faPlus } from '@fortawesome/free-solid-svg-icons'

import EnquiryService from 'services/EnquiryService';
import { readableDateTime, readableEnquiryStatus } from 'utils/common';

const EnquiryTable = ({

}) => {
  const navigate = useNavigate();

  const [enquiries, setEnquiries] = useState([]);
  const [isLoadingEnquiry, setIsLoadingEnquiry] = useState(true);
  const [enquiryError, setEnquiryError] = useState(null);
  const [checkedEnquiryIds, setCheckedEnquiryIds] = useState([]);

  const enquiryService = EnquiryService();

  const fetchEnquiries = async () => {
    setIsLoadingEnquiry(true);
    try {
      const enquiries = await enquiryService.getAllEnquiries();
      setEnquiries(enquiries);
    } catch (err) {
      setEnquiryError(err.message);
    } finally {
      setIsLoadingEnquiry(false);
    }
  };

  const handleEnquiryChecked = (enquiryId) => {
    if (checkedEnquiryIds.includes(enquiryId)) {
      setCheckedEnquiryIds(checkedEnquiryIds.filter((id) => id !== enquiryId));
    } else {
      setCheckedEnquiryIds([...checkedEnquiryIds, enquiryId]);
    }
    console.log(checkedEnquiryIds);
  };

  const handleDeleteEnquiry = async (id) => {
    if (id) {
      await enquiryService.deleteEnquiryById(id).then(
        () => {
          setCheckedEnquiryIds([])
          fetchEnquiries()
        }
      );
    }
    else {
      new Promise((resolve, reject) => {
        checkedEnquiryIds.forEach(async (enquiryId, index, array) => {
          await enquiryService.deleteEnquiryById(enquiryId);
          if (index === array.length - 1) resolve();
        });
      }).then(() => {
        setCheckedEnquiryIds([])
        fetchEnquiries()
      });
    }

  };

  useEffect(() => {
    fetchEnquiries();
  }, []);


  return (
    <>
      {/* <h1>Enquiries</h1> */}
      <div>
        {isLoadingEnquiry ? (
          <div>Loading...</div>
        ) : enquiryError ? (
          <div>Error: {enquiryError}</div>
        ) : (
          <div className='dashboard-table'>
            <div className='action-row'>
              <button onClick={() => handleDeleteEnquiry()} className='action-btn delete-btn'>
                <FontAwesomeIcon icon={faTrashCan} />
                Delete seleted
              </button>
            </div>
            <table id="enquiry-table">
              <tbody>
                <tr>
                  <th style={{ width: '15px' }}>
                    <label className="checkbox-container">
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </th>
                  <th style={{ width: '140px' }}>Name</th>
                  <th style={{ width: '200px' }}>Company Name</th>
                  <th style={{ width: '300px' }}>Comment</th>
                  <th style={{ width: '100px' }}>Status</th>
                  <th style={{ width: '180px' }}>Created At</th>
                  <th style={{ width: '100px' }}>Action</th>
                </tr>
                {enquiries.map((enquiry) => {
                  return (
                    <tr key={enquiry.id}>
                      <td style={{ width: '15px' }}>
                        <label className="checkbox-container">
                          <input type="checkbox" onChange={() => handleEnquiryChecked(enquiry.id)} />
                          <span className="checkmark"></span>
                        </label>
                      </td>
                      <td style={{ maxWidth: '230px' }}>
                        {enquiry.name}
                      </td>
                      <td style={{ maxWidth: '230px' }}>
                        {enquiry.company_name}
                      </td>
                      <td style={{ maxWidth: '230px' }}>
                        {enquiry.comment}
                      </td>
                      <td style={{ maxWidth: '230px' }}>
                        {readableEnquiryStatus(enquiry.status_id)}
                      </td>
                      <td style={{ maxWidth: '150px' }}>
                        {readableDateTime(enquiry.created_at)}
                      </td>
                      <td style={{ maxWidth: '70px' }} className='action'>
                        <button
                          onClick={() => handleDeleteEnquiry(enquiry.id)}
                          className='action-btn delete-btn'
                        >
                          <FontAwesomeIcon icon={faTrashCan} />
                        </button>
                        <button
                          onClick={() => navigate('/dashboard/enquiry/edit/' + enquiry.id)}
                          className='action-btn edit-btn'
                        >
                          <FontAwesomeIcon icon={faPen} />
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

        )}
      </div>
    </>
  )
}

export default EnquiryTable
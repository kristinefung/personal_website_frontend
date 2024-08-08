import React, { useState, useEffect } from 'react';
import { json } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons'

const EnquiryList = () => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const authToken = localStorage.getItem("token");

      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        }
      };
      console.log(requestOptions);
      try {
        const response = await fetch('http://localhost:4000/api/enquiries', requestOptions);
        const jsonData = await response.json();
        console.log(jsonData);
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(isLoading);

  document.body.setAttribute('id', 'dashboard-enquiry-page');
  return (
    <>
      <h1>Enquiries</h1>
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : (
          <table id="enquiry-table" className='dashboard-table'>
            <tr>
              <th>Name</th>
              <th>Company Name</th>
              <th>Comment</th>
              <th>Status</th>
              <th>Created At</th>
              <th>Details</th>
            </tr>
            {data.data.map((enquiry) => {
              return (
                <tr>
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
          </table>
        )}
      </div>
    </>
  )
}

export default EnquiryList;
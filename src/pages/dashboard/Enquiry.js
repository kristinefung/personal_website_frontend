import React, { useState, useEffect } from 'react';
import Header from 'components/dashboard/Header';
import Sidebar from 'components/dashboard/Sidebar';
import { json } from 'react-router-dom';

const Enquiry = () => {

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
      <div className='dashboard'>
        <Header />
        <div className='dashboard-body'>
          <Sidebar />
          <div className='dashboard-main'>
            This is Enquiry
            <div>
              {isLoading ? (
                <div>Loading...</div>
              ) : error ? (
                <div>Error: {error.message}</div>
              ) : (
                <ul>
                  {data.data.map((enquiry) => {
                    return <li>ID: {enquiry.id}, Name: {enquiry.name}</li>;
                  })}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Enquiry;
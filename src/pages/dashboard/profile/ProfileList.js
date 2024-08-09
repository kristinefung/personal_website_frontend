import React, { useState, useEffect } from 'react';
import { json } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons'

import WorkService from 'services/WorkService';
import EducationService from 'services/EducationService';

const ProfileList = () => {

  const [works, setWorks] = useState([]);
  const [isLoadingWork, setIsLoadingWork] = useState(true);
  const [workError, setWorkError] = useState(null);

  const [educations, setEducations] = useState([]);
  const [isLoadingEducation, setIsLoadingEducation] = useState(true);
  const [educationError, setEducationError] = useState(null);

  const workService = WorkService();
  const educationService = EducationService();

  const fetchWorks = async () => {
    setIsLoadingWork(true);
    try {
      const works = await workService.getAllWorks();
      setWorks(works);
    } catch (err) {
      setWorkError(err.message);
    } finally {
      setIsLoadingWork(false);
    }
  };

  const fetchEducations = async () => {
    setIsLoadingEducation(true);
    try {
      const educations = await educationService.getAllEducations();
      setEducations(educations);
    } catch (err) {
      setEducationError(err.message);
    } finally {
      setIsLoadingEducation(false);
    }
  };

  useEffect(() => {
    fetchWorks();
    fetchEducations();
  }, []);

  document.body.setAttribute('id', 'dashboard-profile-page');
  return (
    <>
      <h1>Works</h1>
      <div>
        {isLoadingWork ? (
          <div>Loading...</div>
        ) : workError ? (
          <div>Error: {workError}</div>
        ) : (
          <table id="work-table" className='dashboard-table'>
            <tbody>
              <tr>
                <th>Title</th>
                <th>Company Name</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Created At</th>
                <th>Edit</th>
              </tr>
              {works.map((work) => {
                return (
                  <tr key={work.id}>
                    <td>{work.title}</td>
                    <td>{work.company_name}</td>
                    <td>{work.start_year_month}</td>
                    <td>{work.end_year_month}</td>
                    <td>{work.created_at}</td>
                    <td>
                      <a href={'/dashboard/profile/work/' + work.id}>
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


      <h1>Educations</h1>
      <div>
        {isLoadingEducation ? (
          <div>Loading...</div>
        ) : educationError ? (
          <div>Error: {educationError}</div>
        ) : (
          <table id="education-table" className='dashboard-table'>
            <tbody>
              <tr>
                <th>Title</th>
                <th>Company Name</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Created At</th>
                <th>Edit</th>
              </tr>
              {educations.map((education) => {
                return (
                  <tr key={education.id}>
                    <td>{education.degree}</td>
                    <td>{education.school_name}</td>
                    <td>{education.start_year_month}</td>
                    <td>{education.end_year_month}</td>
                    <td>{education.created_at}</td>
                    <td>
                      <a href={'/dashboard/profile/education/' + education.id}>
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

export default ProfileList;
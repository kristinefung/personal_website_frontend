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
  const [checkedWorkIds, setCheckedWorkIds] = useState([]);

  const [educations, setEducations] = useState([]);
  const [isLoadingEducation, setIsLoadingEducation] = useState(true);
  const [educationError, setEducationError] = useState(null);
  const [checkedEducationIds, setCheckedEducationIds] = useState([]);

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

  const handleWorkChecked = (workId) => {
    if (checkedWorkIds.includes(workId)) {
      setCheckedWorkIds(checkedWorkIds.filter((id) => id !== workId));
    } else {
      setCheckedWorkIds([...checkedWorkIds, workId]);
    }
  };

  const handleEducationChecked = (eduId) => {
    if (checkedEducationIds.includes(eduId)) {
      setCheckedEducationIds(checkedEducationIds.filter((id) => id !== eduId));
    } else {
      setCheckedEducationIds([...checkedEducationIds, eduId]);
    }
  };

  const handleDeleteWork = async () => {
    new Promise((resolve, reject) => {
      checkedWorkIds.forEach(async (id, index, array) => {
        await workService.deleteWorkById(id);
        if (index === array.length - 1) resolve();
      });
    }).then(() => fetchWorks());
  };

  const handleDeleteEducation = async () => {
    new Promise((resolve, reject) => {
      checkedEducationIds.forEach(async (id, index, array) => {
        await educationService.deleteEducationById(id);
        if (index === array.length - 1) resolve();
      });
    }).then(() => fetchEducations());
  };

  useEffect(() => {
    fetchWorks();
    fetchEducations();
  }, []);

  document.body.setAttribute('id', 'dashboard-profile-page');
  return (
    <>
      <h1>Works</h1>
      <a href='/dashboard/profile/work/create'>
        Create Work
      </a>
      <button onClick={handleDeleteWork}>Delete Works</button>
      <div>
        {isLoadingWork ? (
          <div>Loading...</div>
        ) : workError ? (
          <div>Error: {workError}</div>
        ) : (
          <table id="work-table" className='dashboard-table'>
            <tbody>
              <tr>
                <th><input type="checkbox" /></th>
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
                    <td>
                      <input type="checkbox"
                        onChange={() => handleWorkChecked(work.id)}
                      />
                    </td>
                    <td>{work.title}</td>
                    <td>{work.company_name}</td>
                    <td>{work.start_month + '/' + work.start_year}</td>
                    <td>{work.is_current === 0 ? work.end_month + '/' + work.end_year : 'Present'}</td>
                    <td>{work.created_at}</td>
                    <td>
                      <a href={'/dashboard/profile/work/edit/' + work.id}>
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
      <a href='/dashboard/profile/education/create'>
        Create Education
      </a>
      <button onClick={handleDeleteEducation}>Delete Educations</button>
      <div>
        {isLoadingEducation ? (
          <div>Loading...</div>
        ) : educationError ? (
          <div>Error: {educationError}</div>
        ) : (
          <table id="education-table" className='dashboard-table'>
            <tbody>
              <tr>
                <th><input type="checkbox" /></th>
                <th>Degree</th>
                <th>School Name</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Created At</th>
                <th>Edit</th>
              </tr>
              {educations.map((education) => {
                return (
                  <tr key={education.id}>
                    <td>
                      <input type="checkbox"
                        onChange={() => handleEducationChecked(education.id)}
                      />
                    </td>
                    <td>{education.degree}</td>
                    <td>{education.school_name}</td>
                    <td>{education.start_month + '/' + education.start_year}</td>
                    <td>{education.is_current === 0 ? education.end_month + '/' + education.end_year : 'Present'}</td>
                    <td>{education.created_at}</td>
                    <td>
                      <a href={'/dashboard/profile/education/edit/' + education.id}>
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
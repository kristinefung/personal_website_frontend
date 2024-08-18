import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashCan, faPlus } from '@fortawesome/free-solid-svg-icons'

import EducationService from 'services/EducationService';
import { readableDate, readableDateTime } from 'utils/common';

const EducationTable = ({

}) => {
  const navigate = useNavigate();

  const [educations, setEducations] = useState([]);
  const [isLoadingEducation, setIsLoadingEducation] = useState(true);
  const [educationError, setEducationError] = useState(null);
  const [checkedEducationIds, setCheckedEducationIds] = useState([]);

  const educationService = EducationService();

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

  const handleEducationChecked = (eduId) => {
    if (checkedEducationIds.includes(eduId)) {
      setCheckedEducationIds(checkedEducationIds.filter((id) => id !== eduId));
    } else {
      setCheckedEducationIds([...checkedEducationIds, eduId]);
    }
  };

  const handleDeleteEducation = async (id) => {
    if (id) {
      await educationService.deleteEducationById(id).then(
        () => {
          setCheckedEducationIds([])
          fetchEducations()
        }
      );
    } else {

      new Promise((resolve, reject) => {
        checkedEducationIds.forEach(async (id, index, array) => {
          await educationService.deleteEducationById(id);
          if (index === array.length - 1) resolve();
        });
      }).then(() => {
        setCheckedEducationIds([])
        fetchEducations()
      });
    }
  }

  useEffect(() => {
    fetchEducations();
  }, []);


  return (
    <>
      {/* <h1>Works</h1> */}
      <div>
        {isLoadingEducation ? (
          <div>Loading...</div>
        ) : educationError ? (
          <div>Error: {educationError}</div>
        ) : (
          <div className='dashboard-table'>
            <div className='action-row'>
              <button onClick={() => handleDeleteEducation()} className='action-btn delete-btn'>
                <FontAwesomeIcon icon={faTrashCan} />
                Delete seleted
              </button>
              <button
                onClick={() => navigate('/dashboard/profile/education/create')}
                className='action-btn add-btn'
              >
                <FontAwesomeIcon icon={faPlus} />
                Add a new education
              </button>
            </div>
            <table id="education-table">
              <tbody>
                <tr>
                  <th style={{ width: '15px' }}>
                    <label className="checkbox-container">
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </th>
                  <th style={{ width: '200px' }}>Degree</th>
                  <th style={{ width: '200px' }}>Subject</th>
                  <th style={{ width: '200px' }}>School Name</th>
                  <th style={{ width: '180px' }}>Date</th>
                  <th style={{ width: '150px' }}>Created At</th>
                  <th style={{ width: '100px' }}>Action</th>
                </tr>
                {educations.map((education) => {
                  return (
                    <tr key={education.id}>
                      <td style={{ width: '15px' }}>
                        <label className="checkbox-container">
                          <input type="checkbox" onChange={() => handleEducationChecked(education.id)} />
                          <span className="checkmark"></span>
                        </label>
                      </td>
                      <td style={{ maxWidth: '200px' }}>
                        {education.degree}
                      </td>
                      <td style={{ maxWidth: '200px' }}>
                        {education.subject}
                      </td>
                      <td style={{ maxWidth: '200px' }}>
                        {education.school_name}
                      </td>
                      <td style={{ maxWidth: '180px' }}>
                        {readableDate(education.start_month, education.start_year, education.end_month, education.end_year, education.is_current)}

                      </td>
                      <td style={{ maxWidth: '150px' }}>
                        {readableDateTime(education.created_at)}
                      </td>
                      <td style={{ maxWidth: '100px' }} className='action'>
                        <button
                          onClick={() => handleDeleteEducation(education.id)}
                          className='action-btn delete-btn'
                        >
                          <FontAwesomeIcon icon={faTrashCan} />
                        </button>
                        <button
                          onClick={() => navigate('/dashboard/profile/education/edit/' + education.id)}
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

export default EducationTable
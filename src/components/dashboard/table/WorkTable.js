import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashCan, faPlus } from '@fortawesome/free-solid-svg-icons'

import WorkService from 'services/WorkService';
import { readableDate, readableDateTime } from 'utils/common';

const WorkTable = ({

}) => {
  const navigate = useNavigate();

  const [works, setWorks] = useState([]);
  const [isLoadingWork, setIsLoadingWork] = useState(true);
  const [workError, setWorkError] = useState(null);
  const [checkedWorkIds, setCheckedWorkIds] = useState([]);

  const workService = WorkService();

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

  const handleWorkChecked = (workId) => {
    if (checkedWorkIds.includes(workId)) {
      setCheckedWorkIds(checkedWorkIds.filter((id) => id !== workId));
    } else {
      setCheckedWorkIds([...checkedWorkIds, workId]);
    }
  };

  const handleDeleteWork = async (id) => {
    if (id) {
      await workService.deleteWorkById(id).then(
        () => {
          setCheckedWorkIds([])
          fetchWorks()
        }
      );
    }
    else {
      new Promise((resolve, reject) => {
        checkedWorkIds.forEach(async (workId, index, array) => {
          await workService.deleteWorkById(workId);
          if (index === array.length - 1) resolve();
        });
      }).then(() => {
        setCheckedWorkIds([])
        fetchWorks()
      });
    }

  };

  useEffect(() => {
    fetchWorks();
  }, []);


  return (
    <>
      {/* <h1>Works</h1> */}
      <div>
        {isLoadingWork ? (
          <div>Loading...</div>
        ) : workError ? (
          <div>Error: {workError}</div>
        ) : (
          <div className='dashboard-table'>
            <div className='action-row'>
              <button onClick={() => handleDeleteWork()} className='action-btn delete-btn'>
                <FontAwesomeIcon icon={faTrashCan} />
                Delete seleted
              </button>
              <button
                onClick={() => navigate('/dashboard/profile/work/create')}
                className='action-btn add-btn'
              >
                <FontAwesomeIcon icon={faPlus} />
                Add a new work
              </button>
            </div>
            <table id="work-table">
              <tbody>
                <tr>
                  <th style={{ width: '15px' }}>
                    <label className="checkbox-container">
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </th>
                  <th style={{ width: '280px' }}>Title</th>
                  <th style={{ width: '280px' }}>Company Name</th>
                  <th style={{ width: '200px' }}>Date</th>
                  <th style={{ width: '180px' }}>Created At</th>
                  <th style={{ width: '100px' }}>Action</th>
                </tr>
                {works.map((work) => {
                  return (
                    <tr key={work.id}>
                      <td style={{ width: '15px' }}>
                        <label className="checkbox-container">
                          <input type="checkbox" onChange={() => handleWorkChecked(work.id)} />
                          <span className="checkmark"></span>
                        </label>
                      </td>
                      <td style={{ maxWidth: '230px' }}>
                        {work.title}
                      </td>
                      <td style={{ maxWidth: '230px' }}>
                        {work.company_name}
                      </td>
                      <td style={{ maxWidth: '170px' }}>
                        {readableDate(work.start_month, work.start_year, work.end_month, work.end_year, work.is_current)}

                      </td>
                      <td style={{ maxWidth: '150px' }}>
                        {readableDateTime(work.created_at)}
                      </td>
                      <td style={{ maxWidth: '70px' }} className='action'>
                        <button
                          onClick={() => handleDeleteWork(work.id)}
                          className='action-btn delete-btn'
                        >
                          <FontAwesomeIcon icon={faTrashCan} />
                        </button>
                        <button
                          // href={'/dashboard/profile/work/edit/' + work.id}
                          onClick={() => navigate('/dashboard/profile/work/edit/' + work.id)}
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

export default WorkTable
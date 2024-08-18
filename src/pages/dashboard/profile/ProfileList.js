import React, { useState, useEffect } from 'react';
import { json } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons'

import EducationService from 'services/EducationService';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import WorkTable from 'components/dashboard/table/WorkTable';
import EducationTable from 'components/dashboard/table/EducationTable';

const ProfileList = () => {

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

  const handleDeleteEducation = async () => {
    new Promise((resolve, reject) => {
      checkedEducationIds.forEach(async (id, index, array) => {
        await educationService.deleteEducationById(id);
        if (index === array.length - 1) resolve();
      });
    }).then(() => fetchEducations());
  };

  useEffect(() => {
    fetchEducations();
  }, []);

  document.body.setAttribute('id', 'dashboard-profile-page');
  return (
    <>
      <h1>Profile</h1>
      <Tabs>
        <TabList>
          <Tab>Work</Tab>
          <Tab>Education</Tab>
        </TabList>

        <TabPanel>
          <WorkTable />
        </TabPanel>
        <TabPanel>
          <EducationTable />
        </TabPanel>
      </Tabs>
    </>
  )
}

export default ProfileList;
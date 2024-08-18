import React, { useState, useEffect } from 'react';

import imagePlaceholder from 'assets/image-placeholder.jpg';
import ImageWithBorder from 'components/website/ImageWithBorder';
import Timeline from 'components/website/Timeline';

import WorkService from 'services/WorkService';
import EducationService from 'services/EducationService';

import { readableDate } from 'utils/common'
import 'styles/Timeline.css'

const AboutSection = ({ aboutRef }) => {

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
      const worksResp = await workService.getAllWorks();
      worksResp.map(
        (work) => {
          setWorks(works => [...works, {
            title: work.title,
            subTitle: work.company_name,
            date: readableDate(work.start_month, work.start_year, work.end_month, work.end_year, work.is_current === 1),
            description: work.description
          }])
        }
      );
    } catch (err) {
      setWorkError(err.message);
    } finally {
      setIsLoadingWork(false);
    }
  };

  const fetchEducations = async () => {
    setIsLoadingEducation(true);
    try {
      const educationsResp = await educationService.getAllEducations();
      educationsResp.map(
        (education) => {
          setEducations(educations => [...educations, {
            title: `${education.degree} in ${education.subject}`,
            subTitle: education.school_name,
            date: readableDate(education.start_month, education.start_year, education.end_month, education.end_year, education.is_current === 1),
            description: education.description
          }])
        }
      );
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

  return (
    <>
      <section ref={aboutRef} id='about-section'>
        <div className='about-me'>
          <div className="left">
            <ImageWithBorder className='my-photo' src={imagePlaceholder} />
          </div>
          <div className="right">
            <div className="text">
              <h1>ABOUT ME</h1>
              <div className='detail'>
                A detail-oriented programmer with 2 years of experience in software development industry. Focusing on backend development such as PHP and GoLang. Possess a
                strong passion for problem solving and learning new technologies.
              </div>
            </div>
            <div className="btn-row">
              <a className='btn-normal'>Resume</a>
            </div>
          </div>
        </div>
        <div className='about-work' >
          <p>WORK JOURNEY</p>
          <Timeline datas={works} />
        </div>
        <div className='about-education' >
          <p>STUDY JOURNEY</p>
          <Timeline datas={educations} />
        </div>
      </section>
    </>
  )
}

export default AboutSection;
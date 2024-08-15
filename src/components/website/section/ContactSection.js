import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { validateEnquiry } from 'utils/validator';
import EnquiryService from 'services/EnquiryService';

import Logo from 'assets/logo.png'


const ContactSection = ({ contactRef }) => {
  const enq = {
    name: '',
    company_name: '',
    email: '',
    phone_no: '',
    comment: '',
  };
  const enquiryService = EnquiryService();
  const [enquiry, setEnquiry] = useState(enq);
  const [errors, setErrors] = useState({});

  const fetchCreateEnquiry = async () => {
    // setIsLoading(true);
    try {
      const res = await enquiryService.createEnquiry(enquiry);
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
    } finally {
      // setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { isValid, newErrors } = validateEnquiry(enquiry);
    setErrors(newErrors);

    if (isValid) {
      const res = await fetchCreateEnquiry();
      if (res) {
        alert("Success Create");
        setEnquiry(enq);
      }

    }
  };

  return (
    <>
      <section ref={contactRef} id='contact-section'>
        <div className="header">
          <h1>CONTACT</h1>
        </div>
        <div className="body">
          <div className="left">
            <h2
            >Drop Me a Message
            </h2>
            <p>
              Use the contact form to reach out to me with any questions, comments, or inquiries. I'm happy to assist you and will respond as soon as I can.
            </p>
            <div className="contacts">
              <div className="contact">
                <div className="icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="text">
                  kristinefunghk@gmail.com
                </div>
              </div>
              <div className="contact">
                <div className="icon">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div className="text">
                  Tai Wai, Hong Kong
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <form id="contact-form" autoComplete="off">
              <div className="row">
                <input
                  type="text"
                  placeholder={errors.name ? errors.name : "Name*"}
                  value={enquiry.name}
                  className={errors.name ? 'error' : ''}
                  onChange={(e) => { setEnquiry({ ...enquiry, name: e.target.value }) }}
                  autoComplete="new-password"
                />
                <input
                  type="text"
                  placeholder={errors.company_name ? errors.company_name : "Company name"}
                  value={enquiry.company_name}
                  className={errors.company_name ? 'error' : ''}
                  onChange={(e) => { setEnquiry({ ...enquiry, company_name: e.target.value }) }}
                  autoComplete="new-password"
                />
              </div>
              <div className="row">
                <input
                  type="text"
                  placeholder={errors.email ? errors.email : "Email*"}
                  value={enquiry.email}
                  className={errors.email ? 'error' : ''}
                  onChange={(e) => { setEnquiry({ ...enquiry, email: e.target.value }) }}
                  autoComplete="new-password"
                />
                <input
                  type="text"
                  placeholder={errors.phone_no ? errors.phone_no : "Phone no."}
                  value={enquiry.phone_no}
                  className={errors.phone_no ? 'error' : ''}
                  onChange={(e) => { setEnquiry({ ...enquiry, phone_no: e.target.value }) }}
                  autoComplete="new-password"
                />
              </div>
              <div className="row">
                <textarea
                  placeholder={errors.comment ? errors.comment : "Message*"}
                  value={enquiry.comment}
                  className={errors.comment ? 'error' : ''}
                  onChange={(e) => { setEnquiry({ ...enquiry, comment: e.target.value }) }}
                  autoComplete="new-password"
                />
              </div>
              <div className="row">
                <button type="submit" onClick={(e) => { handleSubmit(e) }}>Send</button>
                <div></div>
              </div>
            </form>
          </div>
        </div>
        <hr></hr>
        <div className='footer'>
          <div className='logo'>
            <img src={Logo} height={40} />
          </div>
          <div className='copy-right'>
            2024 - Kristine Fung. All rights reserved
          </div>
          <div className='social-media'>
            <a className="icon" href="https://www.linkedin.com/in/kristinefung/" target='_blank'>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a className="icon" href="https://github.com/kristinefung" target='_blank'>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactSection;
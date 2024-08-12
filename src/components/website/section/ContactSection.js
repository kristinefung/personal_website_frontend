import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';


const ContactSection = ({ contactRef }) => {
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
            <form id="contact-form">
              <div className="row">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Company name" />
              </div>
              <div className="row">
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Phone no." />
              </div>
              <div className="row">
                <textarea placeholder="Message" />
              </div>
              <div className="row">
                <button type="submit">Send</button>
                <div></div>
              </div>
            </form>
          </div>
        </div>
        <hr></hr>
        <div className='footer'>
          <div className='logo'>
            Kristine
          </div>
          <div className='copy-right'>
            2024 - Kristine Fung. All rights reserved
          </div>
          <div className='social-media'>
            <a className="icon" href="https://www.linkedin.com/in/kristinefung/" target='_blank'>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a className="icon" href="https://github.com/sallyfunghk" target='_blank'>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactSection;
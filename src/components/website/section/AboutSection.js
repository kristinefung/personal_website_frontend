import imagePlaceholder from 'assets/image-placeholder.jpg';
import ImageWithBorder from 'components/website/ImageWithBorder';


const AboutSection = ({ aboutRef }) => {
  return (
    <>
      <section ref={aboutRef} id='about-section'>
        <div className="left">
          <ImageWithBorder className='my-photo' src={imagePlaceholder} />
        </div>
        <div className="right">
          <div className="text">
            <h1>ABOUT ME</h1>
            A detail-oriented programmer with 2 years of experience in software development.
            Focusing on backend development such as PHP, Node.js and GoLang.
            Possess a strong passion for problem solving and learning new technologies.

          </div>
          <div className="btn-row">
            <a className='btn-normal'>Resume</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutSection;
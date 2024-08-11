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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut diam sapien, egestas vitae felis eget, efficitur ornare lorem. Duis rhoncus nulla augue, in pulvinar metus imperdiet sed. Vestibulum euismod venenatis condimentum. Mauris sed dapibus tellus, eget scelerisque felis. Sed aliquam justo diam, at cursus velit sodales non. Donec quam odio, venenatis et magna et, accumsan bibendum mauris. Curabitur tempus bibendum est ac ornare.

          </div>
          <div className="btn-row">
            <button>Resume</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutSection;
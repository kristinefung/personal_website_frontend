import imagePlaceholder from 'assets/image-placeholder.jpg';
import ImageWithBorder from 'components/website/ImageWithBorder';
import Timeline from 'components/website/Timeline';

import 'styles/Timeline.css'

const AboutSection = ({ aboutRef }) => {
  const datas = [
    {
      title: "This is title",
      subTitle: "subtitle",
      date: "Aug 2024 - Present",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      title: "This is title 2",
      subTitle: "subtitle 2",
      date: "Aug 2023 - Dec 2024",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      title: "This is title 3",
      subTitle: "subtitle 3",
      date: "Aug 2023 - Dec 2024",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
  ]
  const datas2 = [
    {
      title: "This is subject",
      subTitle: "subtitle",
      date: "Aug 2024 - Present",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      title: "This is subject 2",
      subTitle: "subtitle 2",
      date: "Aug 2023 - Dec 2024",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
  ]
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
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a

                </p>
              </div>
            </div>
            <div className="btn-row">
              <a className='btn-normal'>Resume</a>
            </div>
          </div>
        </div>
        <div className='about-work' >
          <p>WORK JOURNEY</p>
          <Timeline datas={datas} />
        </div>
        <div className='about-education' >
          <p>STUDY JOURNEY</p>
          <Timeline datas={datas2} />
        </div>
      </section>
    </>
  )
}

export default AboutSection;
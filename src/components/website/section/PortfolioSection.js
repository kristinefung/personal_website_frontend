import imagePlaceholder from 'assets/image-placeholder.jpg';
import ImageWithBorder from 'components/website/ImageWithBorder';


const PortfolioSection = ({ portfolioRef }) => {
  return (
    <>
      <section ref={portfolioRef} id='portfolio-section'>
        <h1>PORTFOLIO</h1>
        <div className='projects'>
          <div className='project'>
            <div className='text'>
              <div className='title'>
                Personal Website
              </div>
              <div className='description'>
                <p>My web application features a fully responsive website designed to provide an intuitive user experience across all devices. It serves to introduce myself effectively. It highlights my technical skills, showcases my projects, and includes an enquiry form for easy communication between you and me.</p>
                <p>The dashboard acts as a central hub, allowing secure login and management of website profile. Admin can create, read, update, and delete entries for work and education, as well as manage enquiries efficiently. </p>
              </div>
              <div className='read-more'>
                {/* Read more */}
              </div>
            </div>
            <div className='image'>
              <ImageWithBorder className='project-photo' src={imagePlaceholder} />
            </div>
          </div>
          {/* <div className='project'>
            <div className='text'>
              <div className='title'>
                Personal Website with Dashboard
              </div>
              <div className='description'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. I</p>
              </div>
              <div className='read-more'>
                Read more
              </div>
            </div>
            <div className='image'>
              <ImageWithBorder className='project-photo' src={imagePlaceholder} />
            </div>
          </div> */}
        </div>
      </section>
    </>
  )
}

export default PortfolioSection;
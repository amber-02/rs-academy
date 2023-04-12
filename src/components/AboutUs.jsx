import './AboutUs.css';

const AboutUs = () => {
  return (
    <>
      <div className='content-aboutus'>
          {/* <div className = 'divstuff'> 
            <img className='rs-logo' src='logo-cap.png' alt="rs-logo"></img>
          </div> */}
          <div className='head-items'>
            <img className='graphic' src='graphic3.gif' alt="graphic 3"></img>
            <div className='title-text'>
              <h1 className ='title-aboutus'>About Us</h1>
              <p className='description'>Real Support Academy (also known as RS-Academy) is a community interest company striving to provide the best quality education and training to socially excluded community members with little or no access to formal education. One of its primary purposes is to build the skills and confidence of traditionally disadvantaged community members, including refugees and members of ethnic minority communities, to support their entry into meaningful employment. In addition, Real Support Academy strives to integrate learners into society’s social and cultural fabric and support their entry into meaningful work by providing broad and varied learning programmes to meet the changing needs of adults, refugees, families, communities and other stakeholders.</p>
            </div>
          </div>
      </div>
    </>
  )
}

export default AboutUs
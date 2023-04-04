import './ContactUs.css';

const ContactUs = () => {
    return (
      <>
        <div className='content-contact'>
              {/* <img className='rs-logo' src='Webinar-2.gif' alt="graphic 1"></img>
            </div>
            <div> */}
            <div className="head-items">
              <div className='text'>
                <h1 className ='title-contactus'>Contact us</h1>
                <div className='content-text-contact'>
                  <div className='line'><h1 className='contact-bold'>call us</h1><p className='contact-p'> 123-456-7890</p></div>
                  <div className='line'><h1 className='contact-bold'>send us an email</h1><p className='contact-p'> realsupportacademy@rs.org</p></div>
                  <div className='line'><h1 className='contact-bold'>visit us</h1><p className='contact-p'> real support academy, 1234 road, anytown, 12345</p></div>
                </div>
              </div>
              <img className='graphic' src='graphic2.gif' alt="graphic 1"></img>
            </div>
            
        </div>
        {/* <div>
          <p className='title'>Contact us</p>
        </div> */}
      </>
    )
  }
  
  export default ContactUs
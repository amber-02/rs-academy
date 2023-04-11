import './HomePage.css';

const HomePage = () => {
  return (
    <>
      <div className='content'>
        {/* <div className = 'divstuff'> */}
          <img className='quotations' src='speechmarks.png' alt="speechmarks"></img>
          <p className='firsttext'>"Real Support Academy has given me the confidence to apply for jobs in my area"</p>
          <p className='littletext'>- made up student of RS-Academy</p>
        {/* </div> */}
          <p className='content-text'>"Real Support Academy has given me the confidence to apply for jobs in my area"</p>
          <p className='content-text'>"This is a testimonial from a student"</p>
          <p className='content-text'>"I love RS-Academy!!"</p>
      </div>
    </>
  )
}

export default HomePage
import './OurProjects.css'
const ourProjects = () => {
    return (
      <>
        <div className='content'>
            {/* <div className = 'divstuff'> 
              <img className='rs-logo' src='logo-cap.png' alt="rs-logo"></img>
            </div> */}

            <div className='project-title'>
              {/* <img className='projectgif' src='graphic4.gif' alt="graphic 4"></img> */}
            
              <h1 className = 'title-ourprojects'>
                Our projects
              </h1>
              {/* <img className='projectgif' src='graphic4.gif' alt="graphic 4"></img> */}
            </div>

            <div className="imagerow">
            <div className="container1">
              <img src="gradpic.jpg" alt="Avatar" className="image1"></img>
              <div className="overlay1">
                <div className="text1">Real Support Academy has helped countless students graduate and go on to find meaningful employment</div>
            </div>
            </div>
    

            <div className="container2">
              <img src="studying.jpg" alt="Avatar" className="image2"></img>
              <div className="overlay2">
                <div className="text2">With our expert teachers from around the world we can provide the highest quality of education to our students</div>
              </div>
            </div>
            </div>
{/*           
            <p className='content-text'>Our projects</p>
            <p className='content-text'>Our projects</p>
            <p className='content-text'>Our projects</p>
            <p className='content-text'>Our projects</p> */}
        </div>
      </>
    )
  }
  
  export default ourProjects
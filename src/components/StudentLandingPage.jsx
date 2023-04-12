import './LandingPage.css';

const StudentLandingPage = () => {
  return (
    <>
      <div className='content-contact'>
        <div className='info-containers'>
          <div className='my-modules box'>
            <h1>My Modules</h1>
            {/* ENROLLED MODULES GOES HERE */}
            <table>
              <tr>
                <th>Course ID</th>
                <th>Module Name</th>
              </tr>
              <tr>
                <td>12345</td>
                <td>BioMed</td>
              </tr>
              <tr>
                <td>3124</td>
                <td>OS</td>
              </tr>
              <tr>
                <td>3124</td>
                <td>IPA</td>
              </tr>
              <tr>
                <td>3124</td>
                <td>IPA</td>
              </tr>
              <tr>
                <td>3124</td>
                <td>IPA</td>
              </tr>
            </table>
          </div>
          <div className='about-me box'>
            <h1>About Me</h1>
            {/* ABOUT ME GOES HERE */}
            {/* th -> attribute name */}
            {/* td -> value */}
            <table>
              <tr>
                <th>Name</th>
                <td>john</td>
              </tr>
              <tr>
                <th>Student Id</th>
                <td>123456789</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>email@email.email</td>
              </tr>
            </table>
          </div>
          <img className='LPgraphic2' src='graphic8.gif' alt="graphic 8"></img>
        </div>
        <img className='LPgraphic' src='graphic8.gif' alt="graphic 8"></img>
      </div>
    </>
  )
}

export default StudentLandingPage

//Imporrts all the necessary components
import React, { useState } from 'react';

import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/auth/AuthDetails';
import Button from './components/auth/buttons/index';
import Button2 from './components/auth/buttons/index2';

import AddCourse from './components/courseDatabase/AddCourse';
import ViewCourses from './components/courseDatabase/ViewCourses';

import AddQuestion from './components/Forum/AddQuestion';
import ViewQuestions from './components/Forum/ViewQuestions';


function App() {
  const [displaySignIn, setDisplaySignIn] = useState(true);
  const [displaySignUp, setDisplaySignUp] = useState(false);


  const showSignUp = () => {
    setDisplaySignUp(true);
    setDisplaySignIn(false);
  };
  const showSignIn = () => {
    setDisplaySignUp(false);
    setDisplaySignIn(true);
  };

  return (
    <div className="App">
      <div>
        {displaySignIn ? ( <SignIn /> ) : (
        <Button text="Go back to sign in" onClick={showSignIn} />
        )}
        {displaySignUp ? ( <SignUp /> ) : (
        <Button2 text="Or Sign Up here" onClick={showSignUp} />
        )}
      </div>
      <AuthDetails />
      <AddCourse/>
      <AddQuestion/>
      <ViewCourses/>
      <ViewQuestions/>
      
    </div>
  );
}
export default App;

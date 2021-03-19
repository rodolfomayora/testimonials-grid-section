import React from 'react';
import './assets/styles/style.global.scss';
import { StudentInfo } from './components';
import { userPicture1 } from './assets/img';



function App() {

  const name: string = 'jonathan';
  const lastName: string = 'Walters';
  
  return (
    <div>
      <StudentInfo
        name={name}
        lastName={lastName}
        pictureSource={userPicture1}
        isStandout={false}
      />
    </div>
  );
}

export default App;

import React from 'react';
import './assets/styles/style.global.scss';
import { StudentPicture } from './components';

import { userPicture1 } from './assets/img';

function App() {
  return (
    <div>
      <StudentPicture
        pictureSource={userPicture1}
        isStandout={false}
      />
    </div>
  );
}

export default App;

import React, { FC } from 'react';
import { StudentInfoProps, Capitalize } from './type'; 
import style from './style.module.scss';
import StudentPicture from '../StudentPicture';

const StudentInfo: FC<StudentInfoProps> = ({
  name,
  lastname,
  pictureSource,
  isStandout
}) => {

  const capitalize: Capitalize = (str) => {
    return str[0].toUpperCase() + str.slice(1);
  }

  return (
    <div className={style.StudentInfo}>
      <StudentPicture
        pictureSource={pictureSource}
        isStandout={isStandout}
      />
      <div className={style.infoWrapper}>
        <div>{`${capitalize(name)} ${capitalize(lastname)}`}</div>  
        <div className={style.verifiedLabel}>Verified Graduate</div>
      </div>
    </div>
  )
}

export default StudentInfo;
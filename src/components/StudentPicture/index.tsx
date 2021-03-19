import React, { FC } from 'react';
import { StudenPictureProps } from './type'; 
import style from './style.module.scss';

const StudentPicture: FC<StudenPictureProps> = ({
  pictureSource,
  isStandout
}) => {

  const setStyle = (condition: boolean): string => {
    return condition
    ? `${style.StudentPicture} ${style.standout}`
    : style.StudentPicture
  }

  return (
    <div className={setStyle(isStandout)}>
      <div className={style.StudentPicture__layer}>
        <div className={style.StudentPicture__content}>
          {
            !!pictureSource &&
            <img className={style.picture}
              src={pictureSource}
              alt="Student Pic"
            />
          }
        </div>
      </div>
    </div>
  )
}

export default StudentPicture;
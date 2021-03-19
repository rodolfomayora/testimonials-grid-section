import React, { FC } from 'react';
import { ReviewBlockProps, SetStyle } from './type';
import style from './style.module.scss';
import StudentInfo from '../StudentInfo';

const ReviewBlock: FC<ReviewBlockProps> = (props) => {

  const setStyle: SetStyle = (colorSet) => {
    switch (colorSet) {
      case 1:
        return style.white;
      case 2:
        return style.gray;
      case 3:
        return style.black;
      case 4:
        return style.purple;
      default:
        return style.white;
    }
  }

  return (
    <section className={`${style.ReviewBlock} ${setStyle(props.customStyle)}`}>
      <StudentInfo
        name={props.name}
        lastname={props.lastname}
        pictureSource={props.pictureSource}
        isStandout={props.standout}
      />
      
      <h3 className={style.ReviewBlock__summary}>
        {props.reviewSummary}
      </h3>

      <p className={style.ReviewBlock__description}>
        {`" ${props.reviewDescription} "`}
      </p>
    </section>
  )
}

export default ReviewBlock;
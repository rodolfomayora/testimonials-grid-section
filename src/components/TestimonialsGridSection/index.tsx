import React, { FC } from 'react';
import style from './style.module.scss';
import ReviewBlock from '../ReviewBlock';
import sampleData from './sampleData';

const TestimonialsGridSection: FC = () => {

  const normalizer = (user: object, index: number) => {
    return {
      ...user,
      customId: (index + 1).toString()
    }
  }
  
  const normalizedData: Array<any> = sampleData.map(normalizer);

  return (
    <section className={style.TestimonialsGridSection}>
    {
      !!normalizedData.length &&
      normalizedData.map((user: any) => (
        <ReviewBlock
          key={user.custom}
          name={user.name}
          lastname={user.lastname}
          pictureSource={user.pictureSource}
          standout={user.standout}
          reviewSummary={user.reviewSummary}
          reviewDescription={user.reviewDescription}
          customStyle={user.style}
        />
      ))
    }
    </section>
  )
}

export default TestimonialsGridSection;
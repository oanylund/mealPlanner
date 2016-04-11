import React, { PropTypes } from 'react'
import DinnerImage from '../../../containers/DinnerImage.jsx'

const translateDays = {
  tuesday: 'Tirsdag',
  wednesday: 'Onsdag',
  thursday:  'Torsdag',
  friday:    'Fredag',
  saturday:  'Lørdag',
  sunday:   'Søndag',
  monday: 'Mandag',
}

const ShowDinnerItem = (props) => {
  const {day, comment} = props;
  const { imageId, dinner, dinnerId } = props;
  return (
    <div className='SL-ShowDinnerItem'>
      <DinnerImage imageId={imageId} />
      <div>
        <h3>{translateDays[day]}</h3>
        <h4>{dinner.title}</h4>
        <span>{dinner.description}</span>
        <p>{comment}</p>
        <a href={`/middag/vis/${dinnerId}`} target='_blank'>
          Se middag i eget vindu
        </a>
      </div>
    </div>
  )
}

export default ShowDinnerItem;

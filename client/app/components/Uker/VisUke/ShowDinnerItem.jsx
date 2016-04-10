import React, { PropTypes } from 'react'
import DinnerImage from '../../Reusable/DinnerImage.jsx'

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
  const {day, title, comment} = props;

  if( props.dinnerId ) {
    const { imageId, dinner, dinnerId } = props
    return (
      <div className='SL-ShowDinnerItem'>
        <DinnerImage imageId />
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

  return (
    <div className='SL-ShowDinnerItem'>
      <img src='/images/hungry.jpg'/>
      <div>
        <h3>{translateDays[day]}</h3>
        <h4>{props.whynot}</h4>
        <p>{comment}</p>
      </div>
    </div>
  )
}

const Loading = () => {
  return (
    <p>Laster...</p>
  )
}

export default ShowDinnerItem;

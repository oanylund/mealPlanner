import React, { PropTypes } from 'react'

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
  const {day, comment, whynot} = props;

  return (
    <div className='SL-ShowDinnerItem'>
      <img src='/images/hungry.jpg'/>
      <div>
        <h3>{translateDays[day]}</h3>
        <h4>{whynot}</h4>
        <p>{comment}</p>
      </div>
    </div>
  )
}


export default ShowDinnerItem;

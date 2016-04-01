import React, { PropTypes } from 'react'
import { composeWithTracker } from 'react-komposer'
import DinnerItemImg from '../../../composers/DinnerItemImg'
import ChoseDinnerItemImg from './ChoseDinnerItemImg.jsx'

const ChoseDinnerItem = ({ title, description, imageId }) => {
  return (
    <button className='addWeek-ChooseDinnerItem'>
      <ChoseDinnerItemImg imageId={imageId} />
      <p className='addWeek-ChooseDinnerItem-Title'>{title}</p>
      <p className='addWeek-ChooseDinnerItem-Desc'>{description}</p>
    </button>
  )
}

ChoseDinnerItem.defaultProps = {
  title: 'No title prop supplied',
  description: 'No desc prop supplied'
}

export default ChoseDinnerItem

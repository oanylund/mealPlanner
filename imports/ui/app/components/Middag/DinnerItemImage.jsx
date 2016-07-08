import React, { PropTypes } from 'react'
import { composeWithTracker } from 'react-komposer'
import DinnerItemImg from '../../composers/DinnerItemImg'

const DinnerItemImage = ({thumb}) => {
  return (
    <img className='dashWidgetImg' src={thumb.url({ uploading: '/images/Img_Loading_Spinner.gif'})} />
  )
}

export default composeWithTracker(DinnerItemImg)(DinnerItemImage)

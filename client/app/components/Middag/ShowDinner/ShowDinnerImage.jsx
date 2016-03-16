import React, { PropTypes } from 'react'
import { composeWithTracker } from 'react-komposer'
import DinnerItemImg from '../../../composers/DinnerItemImg'

const ShowDinnerImage = ({thumb}) => {
  return (
    <img className='showDinner-Image' src={thumb.url({ uploading: '/images/Img_Loading_Spinner.gif'})} />
  )
}

export default composeWithTracker(DinnerItemImg)(ShowDinnerImage)

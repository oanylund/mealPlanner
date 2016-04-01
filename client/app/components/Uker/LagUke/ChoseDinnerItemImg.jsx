import React, { PropTypes } from 'react'
import { composeWithTracker } from 'react-komposer'
import DinnerItemImg from '../../../composers/DinnerItemImg'

const ChoseDinnerItemImg = ({noImage, thumb}) => {
  const imageSrc = noImage ? '/images/default-dinner.png' : thumb.url({ uploading: '/images/Img_Loading_Spinner.gif'});
  return (
    <img src={imageSrc} />
  )
}

ChoseDinnerItemImg.defaultProps = {
  noImage: true,
  thumb: {
    url: () => {
      return '#'
    }
  }
}

const Loading = () => {
  return (
    <img src='/images/Img_Loading_Spinner.gif' />
  )
}

export default composeWithTracker(DinnerItemImg, Loading)(ChoseDinnerItemImg)

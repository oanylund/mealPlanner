import React, { PropTypes } from 'react'
import { composeWithTracker } from 'react-komposer'
import DinnerItemImg from '../../../composers/DinnerItemImg'
import EditImgMenu from './EditMode/EditImgMenu.jsx'

const ShowDinnerImage = ({thumb, noImage, dinnerId, imageId, editMode}) => {
  const thumbTmp = !!thumb ? thumb.url({ uploading: '/images/Img_Loading_Spinner.gif'}) : '/images/Img_Loading_Spinner.gif';
  const imageSrc = noImage ? '/images/default-dinner.png' : thumbTmp;

  return (
    <div className='showDinner-Image'>
      { editMode ? <EditImgMenu dinnerId={dinnerId} imageId={imageId} noImage={noImage} /> : ''}
      <img src={imageSrc} />
    </div>
  )
}

export default composeWithTracker(DinnerItemImg)(ShowDinnerImage)

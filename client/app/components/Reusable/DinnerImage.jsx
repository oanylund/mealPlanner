import React, { PropTypes } from 'react'

const DinnerImage = ({noImage, thumb}) => {
  const imageSrc = noImage ? '/images/default-dinner.png' : thumb.url({ uploading: '/images/Img_Loading_Spinner.gif'});
  return <img src={imageSrc} />;
}

DinnerImage.defaultProps = {
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

export default DinnerImage;

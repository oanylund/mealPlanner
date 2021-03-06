import React, { PropTypes } from 'react'
import { composeAll, composeWithTracker } from 'react-komposer'
import DinnerItemImg from '../../../composers/DinnerItemImg'
import GetDinnerShort from '../../../composers/GetDinnerShort'
import Dag from './Dag.jsx'

const DagDinnerWrapper = ({ noImage, thumb, day, comment, deleteDay, editDay, dinner }) => {
  const imageSrc = noImage ? '/images/default-dinner.png' : thumb.url({ uploading: '/images/Img_Loading_Spinner.gif'});
  return (
    <Dag  imgUrl={imageSrc}
          title={day}
          description={dinner.title}
          descriptionGrey={comment}
          menu={[{
            name: 'Endre dag',
            icon: 'edit',
            handler: editDay
          },
          {
            name: 'Slett dag',
            icon: 'close',
            handler: deleteDay
          }]}
          />
  )
}

const Loading = () => {
  return (
    <p>Laster...</p>
  )
}

export default composeWithTracker(GetDinnerShort, Loading)(composeWithTracker(DinnerItemImg, Loading)(DagDinnerWrapper))

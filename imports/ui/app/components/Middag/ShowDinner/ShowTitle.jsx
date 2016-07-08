import React, { PropTypes } from 'react'
import EditTitle from './EditMode/EditTitle.jsx'

const ShowTitle = ({ dinnerId, editMode, title }) => {

  if( editMode ) {
    return (
      <EditTitle dinnerId={dinnerId} title={title} />
    )
  }

  return (
    <span className='showDinner-Title'>{title}</span>
  )
}

export default ShowTitle

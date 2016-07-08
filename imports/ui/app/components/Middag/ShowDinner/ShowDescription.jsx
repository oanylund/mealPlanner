import React, { PropTypes } from 'react'
import EditDescription from './EditMode/EditDescription.jsx'

const ShowDescription = ({ dinnerId, editMode, description }) => {

  const descrWithBr = description.split('\n').map( (line, i) => {
    return <span key={i}>{line}<br/></span>;
  });

  if( editMode ) {
    return (
      <EditDescription dinnerId={dinnerId} description={description}
        descrWithBr={descrWithBr}
      />
    );
  }

  return (
    <span className='showDinner-Description'>{descrWithBr}</span>
  )
}

export default ShowDescription

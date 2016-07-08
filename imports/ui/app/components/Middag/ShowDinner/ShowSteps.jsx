import React, { PropTypes } from 'react'
import EditSteps from './EditMode/EditSteps.jsx'

const ViewSteps = ({steps}) => {

  const Steps = steps.map( (step, i) => {
    const order = i + 1;
    return (
      <p key={i}><strong>{order}. </strong>{step}</p>
    )
  })

  return (
    <div className='showDinner-Steps'>
      <h4>Fremgangsmåte:</h4>
      {Steps}
    </div>
  )
}

const ShowSteps = ({ editMode, steps, id }) => {
  if( editMode ) {
    return (
      <EditSteps id={id} steps={steps} />
    )
  }
  else {
    return <ViewSteps steps={steps} />
  }
}

export default ShowSteps

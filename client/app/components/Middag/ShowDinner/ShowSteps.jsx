import React, { PropTypes } from 'react'

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

const ShowSteps = ({ editMode, steps }) => {
  if( editMode ) {
    return (
      <div>edit</div>
    )
  }
  else {
    return <ViewSteps steps={steps} />
  }
}

export default ShowSteps

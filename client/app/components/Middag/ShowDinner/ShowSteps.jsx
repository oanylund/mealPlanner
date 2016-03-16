import React, { PropTypes } from 'react'

const ShowSteps = ({steps}) => {

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

export default ShowSteps

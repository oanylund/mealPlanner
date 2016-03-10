import React, { PropTypes } from 'react'
import AddedStepItem from './AddedStepItem.jsx'

class ShowStepsAdded extends React.Component {
  render () {
    const stepsList = this.props.steps.map( (step,i) => {
      return (
        <AddedStepItem key={i} stepTxt={step} index={i} {...this.props} />
      )
    })
    return (
      <div>
        {stepsList}
      </div>
    )
  }
}

export default ShowStepsAdded;

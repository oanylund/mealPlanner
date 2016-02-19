import React, { PropTypes } from 'react'
import { composeAll, composeWithTracker } from 'react-komposer'

class IngredList extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return(

    )
  }
}

export default composeAll(
  composeWithTracker(IngredCat),
  composeWithTracker(IngredsInCat)
)(IngredList)

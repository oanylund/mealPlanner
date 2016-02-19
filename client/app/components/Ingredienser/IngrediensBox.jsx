import React, { PropTypes } from 'react'
import ClassName from 'classnames'
import IngrediensBoxExtended from './IngrediensBoxExtended.jsx'

class IngrediensBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isExpanded: true
    }
    this.onToggle = this.onToggle.bind(this)
  }
  onToggle(e){
    e.preventDefault()
    this.setState({
      isExpanded: !this.state.isExpanded
    })
  }
  render () {
    return(
      <div>
        { this.state.isExpanded ?
          <IngrediensBoxExtended click={this.onToggle} ingredient={this.props.ingredient} />
          : '' }
      </div>

    )
  }
}

export default IngrediensBox;

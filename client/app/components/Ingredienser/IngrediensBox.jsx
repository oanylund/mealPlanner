import React, { PropTypes } from 'react'
import ClassName from 'classnames'

import IngrediensBoxExtended from './IngrediensBoxExtended.jsx'
import IngrediensBoxMinimal from './IngrediensBoxMinimal.jsx'

class IngrediensBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isExpanded: false
    }
    this.onToggle = this.onToggle.bind(this)
    this.onEdit = this.onEdit.bind(this)
    this.onRemove = this.onRemove.bind(this)
  }
  onToggle(e) {
    e.preventDefault()
    this.setState({
      isExpanded: !this.state.isExpanded
    })
  }
  onEdit(id,e) {
    e.stopPropagation()
    // TODO: Call Update method
    alert(id)
  }
  onRemove(id,e) {
    e.stopPropagation()
    // TODO: Call Remove method
    alert(id)
  }
  render () {
    const btns = {
      edit: this.onEdit,
      remove: this.onRemove
    }
    return(
      <div>
        { this.state.isExpanded ?
          <IngrediensBoxExtended click={this.onToggle} ingredient={this.props.ingredient} />
          : <IngrediensBoxMinimal btns={btns} click={this.onToggle} ingredient={this.props.ingredient} /> }
      </div>
    )
  }
}

export default IngrediensBox;

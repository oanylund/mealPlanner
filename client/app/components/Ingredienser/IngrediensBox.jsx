import React, { PropTypes } from 'react'
import ClassName from 'classnames'

import IngrediensBoxExtended from './IngrediensBoxExtended.jsx'
import IngrediensBoxMinimal from './IngrediensBoxMinimal.jsx'
import EditIngredient from './EditIngredient.jsx'

class IngrediensBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isExpanded: false,
      edit: false
    }
    this.onToggle = this.onToggle.bind(this)
    this.onEdit = this.onEdit.bind(this)
    this.onRemove = this.onRemove.bind(this)
    this.onEditClose = this.onEditClose.bind(this)
  }
  onToggle(e) {
    e.preventDefault()
    this.setState({
      isExpanded: !this.state.isExpanded
    })
  }
  onEdit(id,e) {
    e.stopPropagation()
    this.setState({
      edit: true
    })
  }
  onRemove(id,e) {
    e.stopPropagation()
    Meteor.call('removeIngredient',id)
  }
  onEditClose() {
    this.setState({
      edit: false
    })
  }
  render () {
    const btns = {
      edit: this.onEdit,
      remove: this.onRemove
    }
    const view = this.state.isExpanded ?
      <IngrediensBoxExtended click={this.onToggle} ingredient={this.props.ingredient} />
      : <IngrediensBoxMinimal btns={btns} click={this.onToggle} ingredient={this.props.ingredient} />

    return(
      <div>
        { this.state.edit ? <EditIngredient close={this.onEditClose} catOptions={this.props.catOptions} ingredient={this.props.ingredient}
          submit={this.onEditSubmit} /> : view }
      </div>
    )
  }
}

export default IngrediensBox;

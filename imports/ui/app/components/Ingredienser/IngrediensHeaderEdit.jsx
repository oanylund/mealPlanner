import React, { PropTypes } from 'react'
import { Meteor } from 'meteor/meteor'

class IngrediensHeaderEdit extends React.Component {
  constructor(props) {
    super(props)
    this.onEditSubmit = this.onEditSubmit.bind(this)
  }
  componentDidMount() {
    this.refs[this.props.name].focus()
  }
  onEditSubmit(e) {
    e.preventDefault()

    let newName = this.refs[this.props.name].value
    Meteor.call('updateIngredientCategory', this.props.id, newName, (err,res) => {
      this.props.close()
    })
  }
  render () {
    let { name, close } = this.props
    return (
      <form onSubmit={this.onEditSubmit}>
        <input ref={name} type='text' defaultValue={name} onBlur={close} required/>
      </form>
    )

  }
}

export default IngrediensHeaderEdit;

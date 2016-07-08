import React, { PropTypes } from 'react'
import { Badge } from 'react-bootstrap'
import IngrediensHeaderEdit from './IngrediensHeaderEdit.jsx'
import { Meteor } from 'meteor/meteor'

class IngrediensHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editCat: false
    }
    this.onEditCat = this.onEditCat.bind(this)
    this.onQuitEditCat = this.onQuitEditCat.bind(this)
    this.onRemoveCategory = this.onRemoveCategory.bind(this)
  }
  onEditCat() {
    this.setState({
      editCat: true
    })
  }
  onQuitEditCat() {
    this.setState({
      editCat: false
    })
  }
  onRemoveCategory() {
    Meteor.call('removeIngredientCategory', this.props.id)
  }
  render () {
    let { title, ingredsInCat, id } = this.props
    return (
      <h3 className='IngrediensHeader'>
        { this.state.editCat ?
          <IngrediensHeaderEdit id={id} close={this.onQuitEditCat} name={title} /> : title}
        {' '}<Badge>{ingredsInCat}</Badge>
        <div className='IngrediensHeader-menu'>
          <i title='Rediger kategorinavn' className='fa fa-edit' onClick={this.onEditCat} />
          { ingredsInCat === 0 ?
            <i title='Slett kategori' className='fa fa-close' onClick={this.onRemoveCategory} /> : ''}
        </div>
      </h3>
    )
  }
}

export default IngrediensHeader;

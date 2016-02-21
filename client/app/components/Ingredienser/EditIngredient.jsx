import React, { PropTypes } from 'react'

class EditIngredient extends React.Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.nameSingularId = `nameSingular-${this.props.ingredient._id}`
    this.namePluralId = `namePlural-${this.props.ingredient._id}`
    this.unitSingularId = `this.unitSingular-${this.props.ingredient._id}`
    this.unitPluralId = `unitPlural-${this.props.ingredient._id}`
    this.categoryId = `Category-${this.props.ingredient._id}`
  }
  onSubmit(e) {
    e.preventDefault()

    const nameSingular = this.refs[this.nameSingularId].value
    const namePlural = this.refs[this.namePluralId].value
    const unitSingular = this.refs[this.unitSingularId].value
    const unitPlural = this.refs[this.unitPluralId].value
    const Category = this.refs[this.categoryId].value

    if (namePlural !== '') {
      var nameObj = {
          singular: nameSingular,
          plural: namePlural
      }
    }
    else {
      var nameObj = {
          singular: nameSingular
      }
    }

    if (unitPlural !== '') {
      var unitObj = {
          singular: unitSingular,
          plural: unitPlural
      }
    }
    else {
      var unitObj = {
          singular: unitSingular
      }
    }

    const updateObj = {
      name: nameObj,
      unit: unitObj,
      categoryId: Category
    }

    Meteor.call('updateIngredient',this.props.ingredient._id,updateObj)
    this.props.close()
  }

  render () {
    const ingredient = this.props.ingredient
    const catOpts = this.props.catOptions.map( (category, i) => {
      return ( <option key={`Up${i}`} value={category.value}>{category.label}</option> )
    })

    return (
      <form onSubmit={this.onSubmit}>
        <div className='editIngredient-Box'>
          <i className='fa fa-minus fa-CloseBtn' onClick={this.props.close} />
          <fieldset>
            <legend>Navn</legend>
            <div className='form-group'>
              <label htmlFor={this.nameSingularId}>Entall</label>
              <input ref={this.nameSingularId} type='text' id={this.nameSingularId}
                className='form-control' defaultValue={ingredient.name.singular} required/>
            </div>
            <div className='form-group'>
              <label htmlFor={this.namePluralId}>Flertall</label>
              <input ref={this.namePluralId} type='text' id={this.namePluralId}
                className='form-control' defaultValue={ingredient.name.plural} />
            </div>
          </fieldset>
          <fieldset>
            <legend>Enhet</legend>
            <div className='form-group'>
              <label htmlFor={this.unitSingularId}>Entall</label>
              <input ref={this.unitSingularId} type='text' id={this.unitSingularId}
                className='form-control' defaultValue={ingredient.unit.singular} required />
            </div>
            <div className='form-group'>
              <label htmlFor={this.unitPluralId}>Flertall</label>
              <input ref={this.unitPluralId} type='text' id={this.unitPluralId}
                className='form-control' defaultValue={ingredient.unit.plural} />
            </div>
          </fieldset>
          <fieldset>
            <legend>Kategori</legend>
            <div className='form-group'>
              <label htmlFor={this.categoryId}>Velg kategori</label>
              <select ref={this.categoryId} id={this.categoryId} className="form-control" defaultValue={ingredient.categoryId}>
                {catOpts}
              </select>
            </div>
            <div style={{textAlign:'right'}}>
              <button type='submit' className='btn btn-primary'>Oppdater</button>
            </div>
          </fieldset>
        </div>
      </form>
    )
  }
}

export default EditIngredient;
// const EditIngredient = ({catOptions, ingredient, submit}) => {

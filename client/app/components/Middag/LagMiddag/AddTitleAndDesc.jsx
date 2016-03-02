import React, { PropTypes } from 'react'
import ClassName from 'classnames'
import alt from 'alt'

const validationTostore = (field, store, form, firstAddDone) => {
  // Check if field is empty, render error msg if so
  if( form === '' && firstAddDone ) {
    return {
      [`err${field}`]: 'Dette feltet kan ikke være tomt',
      [`err${field}ValidationClass`]: 'has-error'
    };
  }
  // Check store against present value in form, render warning if not the same
  if( store !== form ) {
    return {
      [`err${field}`]: 'Feltet er endret, men endringen er ikke lagret',
      [`err${field}ValidationClass`]: 'has-warning'
    };
  }
  else {
    return {
      [`err${field}`]: null,
      [`err${field}ValidationClass`]: ''
    };
  }
}

class AddTitleAndDesc extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errTitle: null,
      errTitleValidationClass: '',
      errDesc: null,
      errDescValidationClass: '',
      firstAddDone: false
    }
    this.submitFields = this.submitFields.bind(this)
    this.onFieldChange = this.onFieldChange.bind(this)
  }
  componentDidMount() {
    this.refs.title.focus()
  }
  submitFields(e) {
    e.preventDefault()
    if( !this.state.firstAddDone ) {
      this.props.changeNavElement(2)
    }
    this.setState({
      errTitle: null,
      errTitleValidationClass: 'has-success',
      errDesc: null,
      errDescValidationClass: 'has-success',
      firstAddDone: true
    }, () => {
      this.props.addTitleAndDesc({ title: this.refs.title.value, desc: this.refs.desc.value })
    })
  }
  onFieldChange() {
    let firstAddDone = this.state.firstAddDone

    let storeTitle = this.props.dinnerObj.title
    let formTitle = this.refs.title.value
    this.setState( validationTostore('Title',storeTitle,formTitle,firstAddDone) )

    let storeDesc = this.props.dinnerObj.desc
    let formDesc = this.refs.desc.value
    this.setState( validationTostore('Desc',storeDesc,formDesc,firstAddDone) )
  }
  render () {
    let { fieldClassName, dinnerObj } = this.props

    let titleValidationState = ClassName('form-group', {
      [this.state.errTitleValidationClass]: this.state.firstAddDone
    });
    let descValidationState = ClassName('form-group', {
      [this.state.errDescValidationClass]: this.state.firstAddDone
    });

    let button = this.state.errDescValidationClass === 'has-warning' || this.state.errTitleValidationClass === 'has-warning' ?
      <button type="submit" className="btn btn-primary">Oppdater endring</button> : '';

    return (
      <fieldset className={fieldClassName}>
        <legend>Legg til tittel og beskrivelse</legend>
        <form onSubmit={this.submitFields} autoComplete='off'>
          <div className={titleValidationState}>
            <label className="control-label" htmlFor='newDinnerTitle'>Tittel</label>
            <input ref='title' id='newDinnerTitle' className='form-control'
              onChange={this.onFieldChange} type='text' defaultValue={dinnerObj.title} required/>
            { !!this.state.errTitle && this.state.firstAddDone ?
              <div className='help-block'>{this.state.errTitle}</div> : '' }
          </div>
          <div className={descValidationState}>
            <label className="control-label" htmlFor='newDinnerDesc'>Beskrivelse</label>
            <textarea ref='desc' id='newDinnerDesc' className='form-control'
              onChange={this.onFieldChange} defaultValue={dinnerObj.desc} required></textarea>
            { !!this.state.errDesc && this.state.firstAddDone ?
              <div className='help-block'>{this.state.errDesc}</div> : '' }
          </div>
          <div style={{textAlign:'right'}}>
            { !this.state.firstAddDone ?
              <button type="submit" className="btn btn-primary">Legg til</button> : button }
          </div>
        </form>
      </fieldset>
    )
  }
}

export default AddTitleAndDesc;

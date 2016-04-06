import React, { PropTypes } from 'react'
import ClassName from 'classnames'
import alt from 'alt'

class AddTitleAndDesc extends React.Component {
  componentDidMount() {
    this.refs.title.focus()
  }
  render () {
    const { fieldClassName, dinnerObj, changeObj } = this.props

    const emptyTitle = changeObj.titleHasBeenChanged && dinnerObj.title === '';
    const emptyDesc = changeObj.descHasBeenChanged && dinnerObj.description === '';

    const titleValidationState = ClassName('form-group', {
      'has-error': emptyTitle,
      'has-success': changeObj.titleHasBeenChanged && dinnerObj.title !== ''
    });
    const descValidationState = ClassName('form-group', {
      'has-error': emptyDesc,
      'has-success': changeObj.descHasBeenChanged && dinnerObj.description !== ''
    });

    const emptyMsg = 'Dette feltet kan ikke være tomt';

    return (
      <fieldset className={fieldClassName}>
        <legend>Legg til tittel og beskrivelse</legend>
          <div className={titleValidationState}>
            <label className="control-label" htmlFor='newDinnerTitle'>Tittel</label>
            <input autoComplete='off' ref='title' id='newDinnerTitle' className='form-control'
              onChange={(e)=>{this.props.titleFieldChanged(e.target.value)}} type='text' value={dinnerObj.title} required/>
            { emptyTitle ? <div className='help-block'>{emptyMsg}</div> : '' }
          </div>
          <div className={descValidationState}>
            <label className="control-label" htmlFor='newDinnerDesc'>Beskrivelse</label>
            <textarea ref='desc' id='newDinnerDesc' className='form-control'
              onChange={(e)=>{this.props.descFieldChanged(e.target.value)}} value={dinnerObj.description} required></textarea>
            { emptyDesc ? <div className='help-block'>{emptyMsg}</div> : '' }
          </div>
          <div style={{textAlign:'right'}}>
          </div>
      </fieldset>
    )
  }
}

export default AddTitleAndDesc;

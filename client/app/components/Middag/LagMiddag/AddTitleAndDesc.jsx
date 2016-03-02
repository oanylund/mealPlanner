import React, { PropTypes } from 'react'
import ClassName from 'classnames'
import alt from 'alt'

class AddTitleAndDesc extends React.Component {
  componentDidMount() {
    this.refs.title.focus()
  }
  render () {
    const { fieldClassName, dinnerObj, titleDescObj } = this.props

    const emptyTitle = titleDescObj.titleHasBeenChanged && dinnerObj.title === '';
    const emptyDesc = titleDescObj.descHasBeenChanged && dinnerObj.desc === '';

    const titleValidationState = ClassName('form-group', {
      'has-error': emptyTitle,
      'has-success': titleDescObj.titleHasBeenChanged && dinnerObj.title !== ''
    });
    const descValidationState = ClassName('form-group', {
      'has-error': emptyDesc,
      'has-success': titleDescObj.descHasBeenChanged && dinnerObj.desc !== ''
    });

    const emptyMsg = 'Dette feltet kan ikke være tomt';

    return (
      <fieldset className={fieldClassName}>
        <legend>Legg til tittel og beskrivelse</legend>
          <div className={titleValidationState}>
            <label className="control-label" htmlFor='newDinnerTitle'>Tittel</label>
            <input autoComplete='off' ref='title' id='newDinnerTitle' className='form-control'
              onChange={(e)=>{this.props.titleFieldChanged(e.target.value)}} type='text' defaultValue={dinnerObj.title} required/>
            { emptyTitle ? <div className='help-block'>{emptyMsg}</div> : '' }
          </div>
          <div className={descValidationState}>
            <label className="control-label" htmlFor='newDinnerDesc'>Beskrivelse</label>
            <textarea ref='desc' id='newDinnerDesc' className='form-control'
              onChange={(e)=>{this.props.descFieldChanged(e.target.value)}} defaultValue={dinnerObj.desc} required></textarea>
            { emptyDesc ? <div className='help-block'>{emptyMsg}</div> : '' }
          </div>
          <div style={{textAlign:'right'}}>
          </div>
      </fieldset>
    )
  }
}

export default AddTitleAndDesc;

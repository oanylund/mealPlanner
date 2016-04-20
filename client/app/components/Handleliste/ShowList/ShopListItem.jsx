import React, { PropTypes } from 'react'
import { FormGroup, FormControl, InputGroup, Glyphicon, Button } from 'react-bootstrap'
import FormsyInput from './ShopListItemForm.jsx'
import { Form } from 'formsy-react'

class ShopListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false
    }
    this.submitOnBlur = this.submitOnBlur.bind(this);
    this.changeItemTxt = this.changeItemTxt.bind(this);
    this.onEditMode = this.onEditMode.bind(this);
    this.renderField = this.renderField.bind(this);
  }
  submitOnBlur() {
    this.refs.itemForm.submit();
  }
  changeItemTxt({item}) {
    if( this.props.itemString !== item ) {
      this.props.changeItemTxt(item);
    }
    this.setState({ editMode: false });
  }
  onEditMode() {
    this.setState({ editMode: true });
  }
  renderField() {
    if( this.state.editMode ) {
      return (
        <FormsyInput name='item'
          value={this.props.itemString}
          onBlur={this.submitOnBlur}
          required
        />
      )
    }
    return (
      <div className='form-group'>
        <p className='form-control'onClick={this.onEditMode} style={{cursor:'pointer'}}>
          {this.props.itemString}
        </p>
      </div>
    )
  }
  render () {
    const { itemString, size, purchasedClick, removeClick } = this.props;
    const bssize = size || null;
    return (
      <Form onValidSubmit={this.changeItemTxt} ref='itemForm' className='ShopListItem-Form'>
        <FormGroup bsSize={bssize}>
          <InputGroup bsSize={bssize}>
            <InputGroup.Button>
              <Button title='Dra for å flytte opp eller ned'>
                <Glyphicon glyph='sort' />
              </Button>
            </InputGroup.Button>
            {this.renderField()}
            <InputGroup.Button>
              <Button title='Endre status til kjøpt' onClick={purchasedClick}>
                <Glyphicon glyph='ok-circle' />
              </Button>
              <Button title='Slett artikkel' onClick={removeClick}>
                <Glyphicon glyph='remove-circle' />
              </Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      </Form>
    )
  }
}

export default ShopListItem
//

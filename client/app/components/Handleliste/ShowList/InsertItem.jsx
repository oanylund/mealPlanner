import React, { PropTypes } from 'react'
import { Form, HOC } from 'formsy-react'
import { FormGroup, FormControl, InputGroup, Glyphicon  } from 'react-bootstrap'

const FormsyElement = (props) => {
  let style = props.showRequired() ? 'error' : 'success';
  let placeholder = 'Kan ikke være tomt'
  if( props.isPristine() ) {
    style = null;
    placeholder = 'Ny artikkel';
  }
  return (
    <FormGroup validationState={style}>
      <InputGroup>
        <InputGroup.Addon>
          <Glyphicon glyph='plus' />
        </InputGroup.Addon>
        <FormControl
          value={props.getValue()}
          onChange={(e) => props.setValue(e.target.value)}
          placeholder={placeholder}
          />
      </InputGroup>
    </FormGroup>
  )
}
const InputField = HOC(FormsyElement);

class InsertItem extends React.Component {
  onSubmit({newItem}) {
    this.props.onNewItem(newItem);
  }
  render () {
    return (
      <Form onValidSubmit={this.onSubmit.bind(this)}>
        <InputField name='newItem' required />
      </Form>
    )
  }
}

export default InsertItem;

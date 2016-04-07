import React, { PropTypes } from 'react'
import { Input, Row, Col } from 'react-bootstrap'

class GenerateListName extends React.Component {
  constructor(props) {
    super(props);
    this.validateField = this.validateField.bind(this);
  }
  validateField() {
    const name = this.props.newShoppingList.name;

    if( !this.props.validation.nameHasBeenChanged ) {
      return {}
    }
    else if( name.length === 0 ) {
      return {
        helpTxt: 'Navnet på handlelisten kan ikke være tomt',
        state: 'error'
      }
    }
    return {
      helpTxt: null,
      state: 'success'
    }
  }
  render () {
    const { newShoppingList, Actions } = this.props;
    const inputState = this.validateField();

    return (
      <Row>
        <Col md={6}>
          <Input type='text' label='Navn på handleliste'
            help={inputState.helpTxt}
            bsStyle={inputState.state}
            onChange={Actions.nameChange}
            value={newShoppingList.name} />
        </Col>
      </Row>
    )
  }
}

export default GenerateListName;

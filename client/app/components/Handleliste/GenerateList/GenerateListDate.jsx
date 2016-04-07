import React, { PropTypes } from 'react'
import { Input, Row, Col } from 'react-bootstrap'

class GenerateListDate extends React.Component {
  constructor(props) {
    super(props);
    this.validateField = this.validateField.bind(this);
  }
  componentWillMount() {
    this.props.Actions.initDate();
  }
  validateField() {
    const { week, year } = this.props.newShoppingList;

    if( week === 0 || year === 0 ) {
      return {
        helpTxt: 'Kan ikke være blank',
        state: 'error'
      }
    }

    return { state: 'success' }
  }
  render () {
    const { newShoppingList, Actions } = this.props;
    const inputState = this.validateField();
    const weekYear = `${newShoppingList.year}-W${newShoppingList.week}`;

    return (
      <Row>
        <Col md={6}>
          <Input type='week' label='Velg uke og år'
            help={inputState.helpTxt}
            bsStyle={inputState.state}
            onChange={Actions.dateChange}
            value={weekYear}
             />
        </Col>
      </Row>
    )
  }
}

export default GenerateListDate;

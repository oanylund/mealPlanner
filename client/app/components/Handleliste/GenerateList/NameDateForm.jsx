import React, { PropTypes } from 'react'
import { Form, HOC } from 'formsy-react'
import { Row, Col, Button } from 'react-bootstrap'
import FormsyInput from '../../Reusable/Formsy/RequiredInput.jsx'

class NameDateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formIsValid: false
    }
    this.onValid = this.onValid.bind(this);
    this.onInvalid = this.onInvalid.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillMount() {
    this.props.Actions.initDate();
  }
  onValid() {
    this.setState({ formIsValid: true });
  }
  onInvalid() {
    this.setState({ formIsValid: false });
  }
  onSubmit(model) {
    this.props.Actions.submitNameDate(model);
  }
  render () {
    const { newShoppingList } = this.props;
    const weekYear = `${newShoppingList.year}-W${newShoppingList.week}`;
    return (
      <Form
        onValidSubmit={this.onSubmit}
        onValid={this.onValid}
        onInvalid={this.onInvalid}
      >
        <Row>
          <Col md={6}>
            <FormsyInput
              name='name'
              label='Navn på handleliste'
              required
              value={newShoppingList.name}
            />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormsyInput
              name='date'
              type='week'
              reqTxt='Må være en gyldig dato'
              label='Uke og år'
              required
              value={weekYear}
            />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div style={{textAlign:'right', marginTop: 20}}>
              <Button bsStyle='primary' type='submit'
                disabled={!this.state.formIsValid}>Neste steg</Button>
            </div>
          </Col>
        </Row>
      </Form>
    )
  }
}

export default NameDateForm;

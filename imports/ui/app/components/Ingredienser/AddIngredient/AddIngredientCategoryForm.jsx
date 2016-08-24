import React, { PropTypes } from 'react'
import { FormGroup, FormControl, InputGroup, ControlLabel, Button } from 'react-bootstrap'

class AddIngredientCategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit() {
    if(this.state.value.length > 0) {
      this.props.onSubmit(this.state.value);
    }
  }
  handleChange(e) {
    const newVal = e.target.value;
    const testPassed = /^[a-zA-Z \-æøåÆØÅ]*$/.test(newVal);
    if(testPassed) {
      this.setState({ value: newVal });
    }
  }
  handleKeyDown(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  render() {
    return (
      <FormGroup>
        <ControlLabel>Lag ny kategori</ControlLabel>
        <InputGroup>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Ny kategoritittel"
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
          />
          <InputGroup.Button>
            <Button onClick={this.onSubmit}>Legg til</Button>
          </InputGroup.Button>
        </InputGroup>
      </FormGroup>
    )
  }
}

export default AddIngredientCategoryForm;

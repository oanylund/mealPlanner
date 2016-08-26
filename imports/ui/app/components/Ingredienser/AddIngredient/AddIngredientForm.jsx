import React, { PropTypes } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { Input, Select } from 'formsy-react-components'
import Form from '../../Reusable/Formsy/BootForm.jsx'
import AddCategoryForm from './AddIngredientCategoryForm.jsx'

const AddIngredientForm = (props) => {
  const {submitIngredient, submitIngredientCategory, categories} = props;
  const errMsg = 'Kun bokstaver er tillat';
  const selectEmptyOptions = [{label: 'Velg kategori', value: ''}];
  const selectOptions = selectEmptyOptions.concat(categories);
  return (
    <Form
      layout='vertical'
      validatePristine={false}
      onValidSubmit={submitIngredient}
    >
      <Row>
        <Col md={6}>
          <fieldset>
            <h4>Navn på ingrediens</h4>
            <Input
              name='ingredSingular'
              label='Entall'
              required
              validations='isSpecialWords'
              validationErrors={{
                  isSpecialWords: errMsg
              }}
            />
            <Input
              name='ingredPlural'
              label='Flertall'
              validations='isSpecialWords'
              validationErrors={{
                  isSpecialWords: errMsg
              }}
            />
          </fieldset>
        </Col>
        <Col md={6}>
          <fieldset>
            <h4>Enhet</h4>
            <Input
              name='unitSingular'
              label='Entall'
              required
              validations='isSpecialWords'
              validationErrors={{
                  isSpecialWords: errMsg
              }}
            />
            <Input
              name='unitPlural'
              label='Flertall'
              validations='isSpecialWords'
              validationErrors={{
                  isSpecialWords: errMsg
              }}
            />
          </fieldset>
        </Col>
      </Row>
      <div
        style={{
          marginTop: 20,
          marginBottom: 20,
          paddingBottom: 20,
          borderBottom: '1px solid #CCC'
        }}
        >
        <Row>
          <Col md={submitIngredientCategory ? 6 : 12}>
              <Select
                name='category'
                label='Kategori'
                options={selectOptions}
                required
                />
          </Col>
          { submitIngredientCategory ?
            <Col md={6}>
              <AddCategoryForm
                onSubmit={submitIngredientCategory}
              />
            </Col>
          : '' }
        </Row>
      </div>
      <Row>
        <Col md={12}>
          <div style={{float: 'right'}}>
            <Button
              type='submit'
              bsStyle='primary'
              formNoValidate={true}
            >
              Lag ingrediens
            </Button>
          </div>
        </Col>
      </Row>
    </Form>
  )
}

AddIngredientForm.propTypes = {
  submitIngredient: PropTypes.func.isRequired,
  submitIngredientCategory: PropTypes.func,
  categories: PropTypes.array.isRequired
}

AddIngredientForm.defaultProps = {
  categories: [{label: 'No categories supplied', value: ''}]
}

export default AddIngredientForm;

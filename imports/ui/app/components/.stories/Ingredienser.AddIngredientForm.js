import { storiesOf, action, linkTo } from '@kadira/storybook'
import CenterModule from './CenterModule'
import AddIngredientForm from '../Ingredienser/AddIngredient/AddIngredientForm.jsx';

const width = 900;

storiesOf('Ingredienser.AddIngredientForm', module)
  .add('Form with one category, and add new category form', () => {

    const props = {
      submitIngredient: action('Add ingredient'),
      submitIngredientCategory: action('Add ingredient category'),
      categories: [{label: 'Kjøtt', value: 'Kjøtt'}]
    }

    return (
      <CenterModule width={width} bgColor='#EEE'>
          <AddIngredientForm {...props} />
      </CenterModule>
    )
  })
  .add('Form with one category, without category form', () => {

    const props = {
      submitIngredient: action('Add ingredient'),
      // submitIngredientCategory: action('Add ingredient category'),
      categories: [{label: 'Kjøtt', value: 'Kjøtt'}]
    }

    return (
      <CenterModule width={width} bgColor='#EEE'>
          <AddIngredientForm {...props} />
      </CenterModule>
    )
  });

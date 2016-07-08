import React from 'react';
import EndreDagForm from '../Uker/EndreUke/EndreDagForm';
import { storiesOf, action } from '@kadira/storybook';


storiesOf('Uke.EndreDagForm', module)
  .add('Edit Tuesday no dinner', () => {
    const props = {
      dayToEdit: 'tuesday',
      whynot: 'Tacorester',
      comment: 'Testkommentar',
      actions: {
        closeEdit: action('Done editing'),
        changeDay: action('Day change')
      }
    }
    return <EndreDagForm {...props} />
  })
  .add('Edit Tuesday with dinner', () => {
    const props = {
      dayToEdit: 'tuesday',
      comment: 'testing testing',
      dinner: {
        title: 'Taco',
        dinnerId: 'daefeg'
      },
      actions: {
        closeEdit: action('Done editing'),
        changeDay: action('Day change')
      }
    }
    return <EndreDagForm {...props} />
  });

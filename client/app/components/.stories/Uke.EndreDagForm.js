import React from 'react';
import EndreDagForm from '../Uker/LagUke/EndreDagForm';
import { storiesOf, action } from '@kadira/storybook';


storiesOf('Uke.EndreDagForm', module)
  .add('Edit Tuesday no dinner', () => {
    const props = {
      dayToEdit: 'tuesday',
      whynot: 'Tacorester',
      comment: 'Testkommentar',
      actions: {
        closeEdit: action('Done editing'),
        changeWhynot: action('Change whynot'),
        changeComment: action('Change comment'),
        changeDinner: action('Change dinner'),
        deleteDinner: action('Delete dinner')
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
      },
      actions: {
        closeEdit: action('Done editing'),
        changeWhynot: action('Change whynot'),
        changeComment: action('Change comment'),
        changeDinner: action('Change dinner'),
        deleteDinner: action('Delete dinner')
      }
    }
    return <EndreDagForm {...props} />
  });

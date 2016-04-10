import React from 'react';
import DinnerImage from '../Reusable/DinnerImage';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Reusable.DinnerImage', module)
  .add('No image in dinner', () => {
    const props = {
      noImage: true
    }
    return <DinnerImage {...props} />
  })
  .add('Image from db container', () => {
    const props = {
      noImage: false,
      thumb: {
        url: () => {
          return '/images/hungry.jpg';
        }
      }
    }
    return <DinnerImage {...props} />
  });

import React from 'react';
import LoadingCog from '../Reusable/LoadingCog.jsx';
import { storiesOf, action } from '@kadira/storybook';
import CenterModule from './CenterModule';

storiesOf('Reusable.LoadingCog', module)
  .add('Small loader, size 20', () => {
    const props = {
      size: 20
    }

    return <CenterModule width={40} bgColor='#e6e6e6'><LoadingCog {...props} /></CenterModule>
  })
  .add('Bigger loader, size 40', () => {
    const props = {
      size: 40
    }

    return <CenterModule width={40} bgColor='#e6e6e6'><LoadingCog {...props} /></CenterModule>
  });

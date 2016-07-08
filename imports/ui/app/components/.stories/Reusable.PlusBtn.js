import React from 'react';
import PlusBtn from '../Reusable/PlusBtn';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Reusable.PlusBtn', module)
  .add('button', () => {
    return <PlusBtn click={action('Btn click')} />
  });

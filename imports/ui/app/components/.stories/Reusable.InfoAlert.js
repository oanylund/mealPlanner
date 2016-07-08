import React from 'react';
import InfoAlert from '../Reusable/InfoAlert';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Reusable.InfoAlert', module)
  .add('Sample info text', () => {
    return <InfoAlert txt='Sample info text' />
  })
  .add('Other info text', () => {
    return <InfoAlert txt='Other info text' />
  });

import React from 'react';
import ShowWeekItem from '../Uker/VisUke/ShowWeekItem';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Uke.ShowWeekItem', module)
  .add('SampleWeek', () => {
    const props = {
      weekName: 'Standard uke 2-retters',
      useWeekClick: action('Use this week'),
      days: {
        friday: {
          dinnerId: 'JL8c7GNEEjjcZJGH3',
          dinner: {
            title: 'Taco',
            description: 'Nydelige fredagstaco'
          },
          comment: 'Ta opp kjøttdeig fra fryseren'
        },
        saturday: {
          whynot: 'Tacorester',
          comment: 'Flotte greier'
        }
      }
    }
    return <ShowWeekItem {...props} />
  });

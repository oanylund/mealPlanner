import React from 'react';
import WeekPanelItem from '../Uker/VisUke/WeekPanelItem';
import DinnerListItem from '../Uker/VisUke/DinnerListItem';
import DayListItem from '../Uker/VisUke/DayListItem';
import { storiesOf, action } from '@kadira/storybook';
import { Accordion } from 'react-bootstrap'
import _ from 'underscore'

const days = {
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

const dayList = _.map(days, (day, dayName) => {
  if( day.dinnerId)
    return <DinnerListItem key={dayName} day={dayName} {...day} />;

  return <DayListItem key={dayName} day={dayName} {...day} />;
});

storiesOf('Uke.WeekPanelItem', module)
  .add('SampleWeek with button', () => {
    const props = {
      name: 'Standard uke 2-retters',
      btnTxt: 'valgfri text',
      useWeekClick: action('Use this week'),
      days: dayList
    }
    return <WeekPanelItem {...props} />
  })

import React from 'react';
import WeekPanelItem from '../Uker/VisUke/WeekPanelItem';
import DinnerListItem from '../Uker/VisUke/DinnerListItem';
import NoDinnerListItem from '../Uker/VisUke/NoDinnerListItem';
import { storiesOf, action, linkTo } from '@kadira/storybook';
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

  return <NoDinnerListItem key={dayName} day={dayName} {...day} />;
});

storiesOf('Uke.WeekPanelItem', module)
  .add('SampleWeek with button, collapsed', () => {
    const props = {
      name: 'Standard uke 2-retters',
      btnTxt: 'valgfri text',
      useWeekClick: action('Header btn clicked'),
      days: dayList,
      expanded: false,
      onSelect: linkTo('Uke.WeekPanelItem', 'SampleWeek with button, expanded')
    }
    return <WeekPanelItem {...props} />
  })
  .add('SampleWeek with button, expanded', () => {
    const props = {
      name: 'Standard uke 2-retters',
      btnTxt: 'valgfri text',
      useWeekClick: action('Header btn clicked'),
      days: dayList,
      expanded: true,
      onSelect: linkTo('Uke.WeekPanelItem', 'SampleWeek with button, collapsed')
    }
    return <WeekPanelItem {...props} />
  })
  .add('SampleWeek no button, collapsed', () => {
    const props = {
      name: 'Standard uke 2-retters',
      days: dayList,
      expanded: false,
      onSelect: linkTo('Uke.WeekPanelItem', 'SampleWeek no button, expanded')
    }
    return <WeekPanelItem {...props} />
  })
  .add('SampleWeek no button, expanded', () => {
    const props = {
      name: 'Standard uke 2-retters',
      days: dayList,
      expanded: true,
      onSelect: linkTo('Uke.WeekPanelItem', 'SampleWeek no button, collapsed')
    }
    return <WeekPanelItem {...props} />
  });

import ActiveArchived from '../Handleliste/ShowList/ActiveArchived';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import CenterModule from './CenterModule'

storiesOf('Handleliste.ActiveArchived', module)
  .add('None', () => {

    const props = {
      active: false,
      archived: false,
      activeClick: linkTo('Handleliste.ActiveArchived', 'Active'),
      archivedClick: linkTo('Handleliste.ActiveArchived', 'Archived')
    }

    return (
      <CenterModule width={200} bgColor='#d4d4d4'>
          <ActiveArchived {...props} />
      </CenterModule>
    )
  })
  .add('Active', () => {

    const props = {
      active: true,
      archived: false,
      activeClick: linkTo('Handleliste.ActiveArchived', 'None'),
      archivedClick: action('Archived click')
    }

    return (
      <CenterModule width={200} bgColor='#d4d4d4'>
          <ActiveArchived {...props} />
      </CenterModule>
    )
  })
  .add('Archived', () => {

    const props = {
      active: false,
      archived: true,
      activeClick: action('Active click'),
      archivedClick: linkTo('Handleliste.ActiveArchived', 'None')
    }

    return (
      <CenterModule width={200} bgColor='#d4d4d4'>
          <ActiveArchived {...props} />
      </CenterModule>
    )
  });

import ShopListRow from '../Handleliste/ShowList/ShopListRow';
import { ListGroup } from 'react-bootstrap'
import { storiesOf, action } from '@kadira/storybook';
import CenterModule from './CenterModule'

storiesOf('Handleliste.ShopListRow', module)
  .add('Normal', () => {

    const props = {
      name: 'Test uke middagplan',
      week: 16,
      year: 2016,
      deleteList: action('Delete list')
    }

    return (
      <CenterModule width={650} bgColor='#d4d4d4'>
        <ListGroup>
          <ShopListRow {...props} />
        </ListGroup>
      </CenterModule>
    )
  })
  .add('Aktiv', () => {

    const props = {
      name: 'Test uke middagplan',
      week: 16,
      year: 2016,
      deleteList: action('Delete list')
    }

    return (
      <CenterModule width={650} bgColor='#d4d4d4'>
        <ListGroup>
          <ShopListRow {...props} active />
        </ListGroup>
      </CenterModule>
    )
  })
  .add('Arkivert', () => {

    const props = {
      name: 'Test uke middagplan',
      week: 16,
      year: 2016,
      deleteList: action('Delete list')
    }

    return (
      <CenterModule width={650} bgColor='#d4d4d4'>
        <ListGroup>
          <ShopListRow {...props} archived />
        </ListGroup>
      </CenterModule>
    )
  });

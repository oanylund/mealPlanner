import ShopListItem from '../Handleliste/ShowList/ShopListItem';
import { storiesOf, action } from '@kadira/storybook';
import CenterModule from './CenterModule'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const DndItem = (props) => {
  return (
    <CenterModule width={650} bgColor='#d4d4d4'>
        <ShopListItem {...props} />
    </CenterModule>
  )
}

const AttachedDnd = DragDropContext(HTML5Backend)(DndItem);

storiesOf('Handleliste.ShopListItem', module)
  .add('Normal', () => {

    const props = {
      itemString: '1 stk Agurk',
      purchasedClick: action('Item purchased'),
      removeClick: action('Delete item'),
      changeItemTxt: action('Change item text'),
      moveItem: action('Move Item')
    }

    return <AttachedDnd {...props} />
  })
  .add('Small', () => {

    const props = {
      itemString: '1 stk Agurk',
      size: 'small',
      purchasedClick: action('Item purchased'),
      removeClick: action('Delete item'),
      changeItemTxt: action('Change item text')
    }

    return <AttachedDnd {...props} />
  })
  .add('Large', () => {

    const props = {
      itemString: '1 stk Agurk',
      size: 'large',
      purchasedClick: action('Item purchased'),
      removeClick: action('Delete item'),
      changeItemTxt: action('Change item text')
    }

    return <AttachedDnd {...props} />
  });

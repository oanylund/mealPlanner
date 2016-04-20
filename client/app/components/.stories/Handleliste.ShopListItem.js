import ShopListItem from '../Handleliste/ShowList/ShopListItem';
import { storiesOf, action } from '@kadira/storybook';
import CenterModule from './CenterModule'

storiesOf('Handleliste.ShopListItem', module)
  .add('Normal', () => {

    const props = {
      itemString: '1 stk Agurk',
      purchasedClick: action('Item purchased'),
      removeClick: action('Delete item'),
      changeItemTxt: action('Change item text')
    }

    return (
      <CenterModule width={650} bgColor='#d4d4d4'>
          <ShopListItem {...props} />
      </CenterModule>
    )
  })
  .add('Small', () => {

    const props = {
      itemString: '1 stk Agurk',
      size: 'small',
      purchasedClick: action('Item purchased'),
      removeClick: action('Delete item'),
      changeItemTxt: action('Change item text')
    }

    return (
      <CenterModule width={650} bgColor='#d4d4d4'>
          <ShopListItem {...props} />
      </CenterModule>
    )
  })
  .add('Large', () => {

    const props = {
      itemString: '1 stk Agurk',
      size: 'large',
      purchasedClick: action('Item purchased'),
      removeClick: action('Delete item'),
      changeItemTxt: action('Change item text')
    }

    return (
      <CenterModule width={650} bgColor='#d4d4d4'>
          <ShopListItem {...props} />
      </CenterModule>
    )
  });

import InsertItem from '../Handleliste/ShowList/InsertItem';
import { storiesOf, action } from '@kadira/storybook';
import CenterModule from './CenterModule'

storiesOf('Handleliste.InsertItem', module)
  .add('Normal', () => {

    const props = {
      onNewItem: action('Insert new item')
    }

    return (
      <CenterModule width={650} bgColor='#d4d4d4'>
          <InsertItem {...props} />
      </CenterModule>
    )
  })

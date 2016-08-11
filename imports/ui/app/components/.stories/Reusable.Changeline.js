import { storiesOf, action, linkTo } from '@kadira/storybook'
import CenterModule from './CenterModule'
import Changeline from '../Reusable/Formsy/ChangeLine.jsx'

const width = 300;

storiesOf('Reusable.Changeline', module)
  .add('Normal mode', () => {

    const props = {
      txt: 'Testing text',
      submitChange: action('newChange'),
      editBtnTitle: 'Endre tekst',
      closeBtnTitle: 'Stopp redigering'
    }

    return (
      <CenterModule width={width} bgColor='#d4d4d4'>
          <Changeline {...props} />
      </CenterModule>
    )
  })
  .add('Edit mode', () => {

    const props = {
      txt: 'aesting text',
      submitChange: action('newChange'),
      editBtnTitle: 'Endre tekst',
      closeBtnTitle: 'Stopp redigering'
    }

    return (
      <CenterModule width={width} bgColor='#d4d4d4'>
          <Changeline {...props} />
      </CenterModule>
    )
  });

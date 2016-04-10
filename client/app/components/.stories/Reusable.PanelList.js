import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import PanelList from '../Reusable/PanelList';
import { ListGroupItem } from 'react-bootstrap'

storiesOf('Reusable.PanelList', module)
  .add('List with ListGroupItem', () => {

    const listName = ['en', 'to', 'tre'];

    const props = {
      headerTxt: 'Test liste',
      headerBtnTxt: 'Valgfri knapp tekst',
      headerBtnClick: action('HeaderBtnClick'),
      list: listName.map( (string, i) => <ListGroupItem>{string}</ListGroupItem> )
    }
    return <PanelList {...props} />
  })
  .add('List with no btn. emmit btntxt', () => {

    const listName = ['en', 'to', 'tre'];

    const props = {
      headerTxt: 'Test liste',
      list: listName.map( (string, i) => <ListGroupItem>{string}</ListGroupItem> )
    }
    return <PanelList {...props} />
  });

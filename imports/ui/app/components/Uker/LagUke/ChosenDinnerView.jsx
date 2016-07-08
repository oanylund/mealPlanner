import React, { PropTypes } from 'react'
import { composeWithTracker } from 'react-komposer'
import GetDinner from '../../../composers/GetDinner'
import ChoseDinnerItemImg from './ChoseDinnerItemImg.jsx'
import ChosenDinnerIngredView from './ChosenDinnerIngredView.jsx'
import { Accordion, Panel, ListGroup, ListGroupItem, Button } from 'react-bootstrap'

const ChosenDinnerView = ({dinner, addDinner}) => {

  const ingredientList = dinner.ingredients.map( (ingredient, i) => {
    return (
      <ChosenDinnerIngredView key={i} quantity={ingredient.quantity} ingId={ingredient.ingredientId} />
    )
  });

  let stepsList = '';
  if( dinner.steps ) {
    stepsList = dinner.steps.map( (step, i) => {
      return (
        <ListGroupItem key={i} ><strong>{i+1}.</strong>{` ${step}`}</ListGroupItem>
      );
    });
  }

  const addDinnerProps = {
    dinnerId: dinner._id,
    title: dinner.title
  }
  // TODO: style view
  return (
    <div className='addWeek-ChooseDinnerView'>
      <div className='ChooseDinnerView-scrollarea'>
        <ChoseDinnerItemImg imageId={dinner.imageId} />
        <h4>{dinner.title}</h4>
        <p>{dinner.description}</p>
        <Accordion>
          <Panel header='Ingredienser' eventKey={1}>
            <ListGroup fill>
              {ingredientList}
            </ListGroup>
          </Panel>
          { stepsList !== '' ?
            <Panel header='Steg' eventKey={2}>
              <ListGroup fill>
                {stepsList}
              </ListGroup>
            </Panel> : '' }
          </Accordion>
      </div>
      <Button bsStyle='primary' onClick={addDinner.bind(null,addDinnerProps)}>Legg middag til dag</Button>
    </div>
  );
}

export default composeWithTracker(GetDinner)(ChosenDinnerView);

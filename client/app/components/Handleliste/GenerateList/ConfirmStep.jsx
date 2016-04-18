import React, { PropTypes } from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap'
import GenerateHandlelisteStore from '../../../stores/GenerateHandlelisteStore'

const ConfirmStep = (props) => {
  const { newShoppingList, pickedWeekPlan, Actions } = props;
  const { name, week, year } = newShoppingList;
  return (
    <div>
      <p><strong>Valgt navn:</strong> {name}</p>
      <p><strong>Dato planlagt:</strong> Uke {week}, år {year}</p>
      <p><strong>Ukeplan som basis:</strong> {pickedWeekPlan.name}</p>
      <ButtonToolbar>
        <Button bsStyle='primary' onClick={Actions.gotoPreviousStep}>Forrige steg</Button>
        <Button bsStyle='primary' onClick={GenerateHandlelisteStore.generateList}>Generer handleliste</Button>
      </ButtonToolbar>
    </div>
  )
}

export default ConfirmStep

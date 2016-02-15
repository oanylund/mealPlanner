import React, { PropTypes } from 'react'
import LagUkeActions from '../../../actions/LagUkeActions'
import { Panel, Input, Button } from 'react-bootstrap'

const DagForm = (props) => {
  return (
    <Panel>
      <fieldset>
        <legend className='Dagform-legend'>Legg til dag</legend>
        <Input type="select" label="Velg dag">
          <option value="select">Tirsdag</option>
          <option value="other">Onsdag</option>
          <option value="other">Torsdag</option>
        </Input>
      </fieldset>

    </Panel>
  )

}

export default DagForm

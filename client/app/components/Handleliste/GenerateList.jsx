import React, { PropTypes } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import StepController from './GenerateList/StepController.jsx'

import alt from '../../alt'
import AltContainer from 'alt-container'
import GenerateHandlelisteStore from '../../stores/GenerateHandlelisteStore'
import GenerateHandlelisteActions from '../../actions/GenerateHandlelisteActions'

class GenerateList extends React.Component {
  componentWillUnmount() {
    alt.recycle(GenerateHandlelisteStore);
  }
  render () {
    return (
      <Grid fluid>
        <Row>
          <Col md={12}>
            <h2 style={{marginBottom:30,marginTop:0}}>Generer ny handleliste</h2>
          </Col>
        </Row>
        
        <AltContainer store={GenerateHandlelisteStore} actions={{ Actions: GenerateHandlelisteActions }}>
          <StepController />
        </AltContainer>

      </Grid>
    )
  }
}

export default GenerateList;

// <AltContainer store={GenerateHandlelisteStore} actions={{ Actions: GenerateHandlelisteActions }}>
//   <GenerateListName />
//   <GenerateListDate />
// </AltContainer>

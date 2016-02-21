import React, { PropTypes } from 'react'
import { Grid, Row, Col, Button, ButtonToolbar, Alert } from 'react-bootstrap'

class LagMiddag extends React.Component {
  render () {
    return (
      <div className='marginSquare'>
        <Grid fluid>
          <Row>
            <Col md={12}>
              <h2 style={{marginBottom:20,marginTop:0}}>Lag ny middag</h2>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <fieldset>
                <legend>Legg til bilde, tittel og beskrivelse</legend>
                <Col sm={3}>
                  <div style={{textAlign:'center'}}>
                    <img src="//placehold.it/200x200" className='img-thumbnail' />
                  </div>
                </Col>
                <Col sm={6}>
                  <div className='form-group'>
                    <label htmlFor='newDinnerTitle'>Tittel</label>
                    <input id='newDinnerTitle' className='form-control' type="text"/>
                  </div>
                  <div className='form-group'>
                    <label htmlFor='newDinnerDesc'>Beskrivelse</label>
                    <textarea id='newDinnerDesc' className="form-control" ></textarea>
                  </div>
                </Col>
              </fieldset>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default LagMiddag;

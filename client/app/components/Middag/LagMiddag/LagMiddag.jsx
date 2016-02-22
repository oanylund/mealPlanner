import React, { PropTypes } from 'react'
import { Grid, Row, Col, Button, ButtonToolbar, Alert } from 'react-bootstrap'

class LagMiddag extends React.Component {
  render () {
    return (
      <div className='marginSquare addDinner'>
        <Grid fluid>
          <Row>
            <Col md={12}>
              <h2 className='addDinner-mainHeader'>Lag ny middag</h2>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <fieldset>
                <legend>Legg til tittel og beskrivelse</legend>
                <div className='form-group'>
                  <label className="control-label" htmlFor='newDinnerTitle'>Tittel</label>
                  <input id='newDinnerTitle' className='form-control' type='text'/>
                  <div className='help-block'>Testing</div>
                </div>
                <div className='form-group'>
                  <label className="control-label" htmlFor='newDinnerDesc'>Beskrivelse</label>
                  <textarea id='newDinnerDesc' className="form-control" ></textarea>
                </div>
              </fieldset>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <fieldset>
                <legend>Legg til bilde</legend>
                <div style={{textAlign:'center'}}>
                  <img src="//placehold.it/200x200" className='img-thumbnail' />
                </div>
              </fieldset>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <fieldset className='addDinner-topMargin'>
                <legend>Legg til ingredienser</legend>
                <Col sm={12}>
                  <div className='addDinner-IngredRow'>
                    <div className='form-group addDinner-Antall'>
                      <label className='control-label'>Antall</label>
                      <input className='form-control' type='number'
                        min={1} max={9999} maxLength={4} size={4} />
                    </div>
                    <span>Stykk</span>
                    <div className='form-group addDinner-Antall'>
                      <label className='control-label'>Ingrediens</label>
                      <input className='form-control' type='text'/>
                    </div>
                    <i className='fa fa-close' />
                  </div>
                  <Button bsStyle="primary" block><i className='fa fa-plus'/></Button>
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

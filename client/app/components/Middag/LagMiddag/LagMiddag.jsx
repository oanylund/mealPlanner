import React, { PropTypes } from 'react'
import { Grid, Row, Col, Nav, NavItem, Alert, Button, Pager, PageItem } from 'react-bootstrap'
import ClassName from 'classnames'

class LagMiddag extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedView: 1
    }
    this.changeView = this.changeView.bind(this)
    this.incrementView = this.incrementView.bind(this)
    this.decrementView = this.decrementView.bind(this)
  }
  changeView(selView) {
    this.setState({
      selectedView: selView
    })
  }
  incrementView() {
    this.setState({
      selectedView: this.state.selectedView + 1
    })
  }
  decrementView() {
    this.setState({
      selectedView: this.state.selectedView - 1
    })
  }
  render () {
    const { selectedView } = this.state

    const showTitleDesc = ClassName({
      'addDinner-hidePart': !(this.state.selectedView === 1)
    })
    const showImg = ClassName({
      'addDinner-hidePart': !(this.state.selectedView === 2)
    })
    const showIngredient = ClassName({
      'addDinner-hidePart': !(this.state.selectedView === 3)
    })
    const showSteps = ClassName({
      'addDinner-hidePart': !(this.state.selectedView === 4)
    })
    const showFinnish = ClassName({
      'addDinner-hidePart': !(this.state.selectedView === 5)
    })

    return (
      <div className='marginSquare addDinner'>
        <Grid fluid>
          <Row>
            <Col md={12}>
              <h2 className='addDinner-mainHeader'>Lag ny middag</h2>
              <Nav className='addDinner-nav'
                bsStyle="tabs" activeKey={this.state.selectedView} onSelect={this.changeView}>
                <NavItem eventKey={1}>Tittel og beskrivelse</NavItem>
                <NavItem eventKey={2}>Bilde</NavItem>
                <NavItem eventKey={3}>Ingredienser</NavItem>
                <NavItem eventKey={4}>Steg</NavItem>
                <NavItem eventKey={5}>Fullfør</NavItem>
              </Nav>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>

              <fieldset className={showTitleDesc}>
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

              <fieldset className={showImg}>
                <legend>Legg til bilde</legend>
                <div style={{textAlign:'center'}}>
                  <img src="//placehold.it/200x200" className='img-thumbnail' />
                </div>
              </fieldset>

              <fieldset className={showIngredient}>
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
          <Row>
            <Col sm={12}>
              <Pager>
                { selectedView > 1 ? <PageItem previous onSelect={this.decrementView}>Forrige steg</PageItem> : ''}
                { selectedView < 5 ? <PageItem next onSelect={this.incrementView}>Neste steg</PageItem> : '' }
              </Pager>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default LagMiddag;

import React, { PropTypes } from 'react'
import { Grid, Row, Col, Pager, PageItem } from 'react-bootstrap'
import ClassName from 'classnames'
import AltContainer from 'alt-container'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import alt from '../../../alt'
import LagMiddagStore from '../../../stores/LagMiddagStore'
import LagMiddagActions from '../../../actions/LagMiddagActions'

import NavSteps from './NavSteps.jsx'
import AddTitleAndDesc from './AddTitleAndDesc.jsx'
import AddIngredient from './AddIngredient.jsx'
import AddSteps from './AddSteps.jsx'
import AddImage from './AddImage.jsx'

class LagMiddag extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedView: 1,
    }
    this.changeView = this.changeView.bind(this)
    this.incrementView = this.incrementView.bind(this)
    this.decrementView = this.decrementView.bind(this)
  }
  componentWillUnmount() {
    alt.recycle(LagMiddagStore)
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
    const showIngredient = ClassName({
      'addDinner-hidePart': !(this.state.selectedView === 2)
    })
    const showSteps = ClassName({
      'addDinner-hidePart': !(this.state.selectedView === 3)
    })
    const showImg = ClassName({
      'addDinner-hidePart': !(this.state.selectedView === 4)
    })

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

              <AltContainer store={LagMiddagStore} actions={LagMiddagActions} >
                <NavSteps selectedView={this.state.selectedView} changeView={this.changeView} />
                <AddTitleAndDesc changeNavElement={this.changeView} fieldClassName={showTitleDesc} />
                <AddIngredient showIngredient={showIngredient} />
                <AddSteps showSteps={showSteps} />
                <AddImage showImg={showImg} />
              </AltContainer>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Pager>
                { selectedView > 1 ? <PageItem previous onSelect={this.decrementView}>Forrige steg</PageItem> : ''}
                { selectedView < 4 ? <PageItem next onSelect={this.incrementView}>Neste steg</PageItem> : '' }
              </Pager>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(LagMiddag);

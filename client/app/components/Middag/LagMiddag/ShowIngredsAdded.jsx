import React, { PropTypes } from 'react'
import AddedIngredItem from './AddedIngredItem.jsx'
import { Row, Col } from 'react-bootstrap'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class ShowIngredsAdded extends React.Component {
  render () {
    const ingredList = this.props.ingreds.map( (ingred, i) => {
      return <AddedIngredItem key={`INgI${i}`}
                ingred={ingred} index={i}
                editQuantity={this.props.editQuantity}
                deleteIngred={this.props.deleteIngred}
                moveIngredUp={this.props.moveIngredUp}
                moveIngredDown={this.props.moveIngredDown}
                moveIngred={this.props.moveIngred}
             />
    })

    return (
      <Row>
        <Col md={8}>
          <div className='addDinner-IngredList'>
          {ingredList}
          </div>
        </Col>
      </Row>
    )
  }
}

export default DragDropContext(HTML5Backend)(ShowIngredsAdded);

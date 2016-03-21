import React from 'react'
import Sidebar from './Sidebar/Sidebar.jsx'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class mealPlanner extends React.Component {
  render () {
    return (
      <div id='mealWrapper'>
        <Sidebar/>
        <div id='mainContent'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(mealPlanner)

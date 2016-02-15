import React from 'react'
import Sidebar from './Sidebar/Sidebar.jsx'

const mealPlanner = ({children}) => {
    return (
      <div id='mealWrapper'>
        <Sidebar/>
        <div id='mainContent'>
          {children}
        </div>
      </div>
    )
}

export default mealPlanner

import React from 'react'
import ListItem from './VerticalNavItem.jsx'
import SubItem from './VerticalNavSubItem.jsx'

const VerticalNav = (props) => {
    return (
      <div>
        <ListItem text="Uke" path="/uker" icon="calendar">
          <SubItem text="Lag ny" subpath="lag-ny" icon="plus"/>
          <SubItem text="Liste" subpath="liste" icon="list-alt"/>
        </ListItem>
        <ListItem text="Middag" path="/middag" icon="cutlery">
          <SubItem text="Lag ny" subpath="lag-ny" icon="plus"/>
        </ListItem>
        <ListItem text="Ingrediens" path="/ingrediens" icon="list"/>
        <ListItem text="Handleliste" path="/handleliste" icon="shopping-cart"/>
      </div>
    );
}

export default VerticalNav;

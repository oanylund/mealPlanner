import React, { PropTypes } from 'react'
import { Nav, NavItem } from 'react-bootstrap'
import ClassName from 'classnames'

const NavSteps = (props) => {

  let titleAndDescHasChanged = props.changeObj.titleHasBeenChanged && props.changeObj.descHasBeenChanged;

  let titleAndDescClass = ClassName({
    success: props.validSteps.titleAndDesc.valid && titleAndDescHasChanged,
    error: !props.validSteps.titleAndDesc.valid && titleAndDescHasChanged,
  })

  let ingredClass = ClassName({
    success: props.validSteps.ingredients.valid && props.changeObj.ingredHasBeenAdded,
    error: !props.validSteps.ingredients.valid && props.changeObj.ingredHasBeenAdded,
  })

  let stepClass = ClassName({
    success: props.dinnerObj.steps.length > 0
  })

  let imgClass = ClassName({
    success: props.validSteps.image.added
  })

  return (
    <Nav className='addDinner-nav'
      bsStyle="tabs" activeKey={props.selectedView} onSelect={props.changeView}>
      <NavItem eventKey={1} className={titleAndDescClass}>Tittel og beskrivelse</NavItem>
      <NavItem eventKey={2} className={ingredClass}>Ingredienser</NavItem>
      <NavItem eventKey={3} className={stepClass}>Steg</NavItem>
      <NavItem eventKey={4} className={imgClass}>Bilde</NavItem>
    </Nav>
  )
}

export default NavSteps

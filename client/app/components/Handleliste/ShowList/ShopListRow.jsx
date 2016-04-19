import React, { PropTypes } from 'react'
import { ListGroupItem, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const ShopListRow = ({ name, week, year, active, _id, archived }) => {

  const archivedStyle = archived ? 'info' : null;
  return (
    <LinkContainer to={`/handleliste/vis/${_id}`} active={active}>
      <ListGroupItem header={name} bsStyle={archivedStyle}>
        Uke {week}, {year}
      </ListGroupItem>
    </LinkContainer>
  )
}

export default ShopListRow

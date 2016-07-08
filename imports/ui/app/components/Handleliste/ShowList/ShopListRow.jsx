import React, { PropTypes } from 'react'
import { ListGroupItem, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const ShopListRow = ({ name, week, year, active, _id, archived, deleteList }) => {

  const archivedStyle = archived ? 'info' : null;
  return (
    <LinkContainer to={`/handleliste/vis/${_id}`} active={active}>
      <ListGroupItem bsStyle={archivedStyle}>
        <div className='ShopListItem-Row'>
          <div>
            <h4 className='list-group-item-heading'>{name}</h4>
            <p className='list-group-item-text'>Uke {week}, {year}</p>
          </div>
          <i className='fa fa-trash' title='Slett handleliste' onClick={deleteList}/>
        </div>
      </ListGroupItem>
    </LinkContainer>
  )
}

export default ShopListRow

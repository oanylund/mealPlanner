import React, { PropTypes } from 'react'
import ClassNames from 'classnames'

const TopRightMenu = ({ changeMode, deleteDinner, editMode, cantDelete }) => {
  const editStyle = ClassNames({
    'editActive': editMode
  })

  let deleteBtn = <button onClick={deleteDinner}><i className='fa fa-trash-o' /> Slett Middag</button>
  if ( !cantDelete ) {
    deleteBtn = <button title='Middagen brukes i en ukemeny og kan ikke slettes' style={{color:'#CCC'}}>
      <i className='fa fa-trash-o' /> Slett Middag
    </button>;
  }

  return (
    <div className='showDinner-TopRightMenu'>
      <button className={editStyle} onClick={changeMode}><i className='fa fa-edit' /> Endremodus</button>
      {deleteBtn}
    </div>
  )
}

export default TopRightMenu

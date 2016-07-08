import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import DinnerItemImage from './DinnerItemImage.jsx'

const DinnerItem = (props) => {
  let img = props.imageId ? <DinnerItemImage imageId={props.imageId} />
    : <img className='dashWidgetImg' src='/images/default-dinner.png'/>;
  return (
    <div className='dashWidgetBox'>
      {img}
      <div className='dashWidgetBody'>
        <h3>{props.title}</h3>
        <span>{props.description}</span><br/>
        {props.descriptionGrey ? <span className='grey'>{props.descriptionGrey}</span> : '' }
        { props.linkUrl ?
        <Link to={props.linkUrl}>Se Mer...</Link>
        : '' }
      </div>
    </div>
  )
}

export default DinnerItem

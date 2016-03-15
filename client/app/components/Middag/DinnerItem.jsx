import React, { PropTypes } from 'react'

const DinnerItem = (props) => {
  let img = props.imgUrl ? props.imgUrl : '/images/default-dinner.png'
  return (
    <div className='dashWidgetBox'>
      <img className='dashWidgetImg' src={img} alt="" />
      <div className='dashWidgetBody'>
        <h3>{props.title}</h3>
        <span>{props.description}</span><br/>
        {props.descriptionGrey ? <span className='grey'>{props.descriptionGrey}</span> : '' }
        { props.linkUrl ?
        <a href={props.linkUrl}>Se mer...</a>
        : '' }
      </div>
    </div>
  )
}

export default DinnerItem

import React, { PropTypes } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { composeWithTracker } from 'react-komposer'
import GetDinner from '../../composers/GetDinner'
import Spinner from '../spinner.jsx'
import ShowDinnerImage from './ShowDinner/ShowDinnerImage.jsx'
import ShowIngreds from './ShowDinner/ShowIngreds.jsx'
import ShowSteps from './ShowDinner/ShowSteps.jsx'


const ShowDinner = (props) => {
  const title = props.dinner.title;
  const description = props.dinner.description;
  const imageId = props.dinner.imageId;
  const ingreds = props.dinner.ingredients;
  const steps = props.dinner.steps;
  let img = imageId ? <ShowDinnerImage imageId={imageId} />
    : <img className='showDinner-Image' src='/images/default-dinner.png'/>;
  const ingredWidth = steps ? 3 : 12;

  return (
    <div id='ShowDinner'>
      <div className='showDinner-Separator'/>
      <div className='showDinner-Container'>
        <div className='showDinner-Header'>
          {img}
          <span className='showDinner-Title'>{title}</span>
          <span className='showDinner-Description'>{description}</span>
        </div>
        <Grid fluid>
          <Row>
            <Col md={ingredWidth}>
              <ShowIngreds ingredients={ingreds} />
            </Col>
            { steps ? <Col md={8} mdOffset={1}><ShowSteps steps={steps} /></Col> : '' }
          </Row>
        </Grid>
      </div>
    </div>
  )
}

export default composeWithTracker(GetDinner, Spinner)(ShowDinner)

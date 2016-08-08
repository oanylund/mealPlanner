import React, { PropTypes } from 'react'
import Dag from '../LagUke/Dag.jsx'
import { Grid, Col } from 'react-bootstrap'
import translateDays from '../../../../../utils/translateDays.js'

class DisplayWeek extends React.Component {
  render () {
    if(this.props.data.loading) {
      return <div>laster...</div>
    }

    const { name, days } = this.props.data.week;

    return (
      <Grid>
      <h2>{name}</h2>
      <h4>Dager:</h4>
      {
        days.map( ({day, comment, whynot, dinner}, i) => {
          return (
            <Col key={i} md={4}>
              <Dag
                title={translateDays[day]}
                description={dinner ? dinner.title : whynot}
                descriptionGrey={comment}
                imgUrl={dinner ? dinner.image.url : null}
                linkUrl={dinner ? `/middag/vis/${dinner._id}` : null}
                linkTxt='Se middag...'
                />
            </Col>
          )
        })
      }
    </Grid>
    )
  }
}

export default DisplayWeek;

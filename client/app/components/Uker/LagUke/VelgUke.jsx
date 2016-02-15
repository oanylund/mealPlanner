import React, { PropTypes } from 'react'
import { Input } from 'react-bootstrap'
import LagUkeActions from '../../../actions/LagUkeActions'

export default class VelgUke extends React.Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }
  sendChange(year,week) {
    let obj = {
      year: year,
      week: week
    }
    LagUkeActions.weekChange(obj)
  }
  onChange(e) {
    e.preventDefault()
    let year = +this.refs.week.getValue().slice(0,4)
    let week = +this.refs.week.getValue().slice(-2)
    this.sendChange(year,week)
  }
  render () {
    let weekString = this.props.week < 10 ? `0${this.props.week}` : this.props.week
    let thisWeek = `${this.props.year}-W${weekString}`
    return (
      <div style={{marginBottom:30}}>
        <p>Velg uke</p>
        <Input ref='week' type='week' value={thisWeek} onChange={this.onChange}/>
      </div>
    )
  }
}

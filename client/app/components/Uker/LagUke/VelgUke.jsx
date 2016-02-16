import React, { PropTypes } from 'react'
import { Input } from 'react-bootstrap'
import LagUkeActions from '../../../actions/LagUkeActions'
import moment from 'moment'
import nb from 'moment/locale/nb'

moment.locale('nb', nb )

export default class VelgUke extends React.Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }
  componentWillMount() {
    this.sendChange(new Date().getFullYear(),moment().week())
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
    let existsStyle = this.props.weekExists ? 'error' : 'success'
    let weekString = this.props.week < 10 ? `0${this.props.week}` : this.props.week
    let thisWeek = `${this.props.year}-W${weekString}`
    return (
      <div style={{marginBottom:30}}>
        <p>Velg uke</p>
        <Input ref='week' type='week' bsStyle={existsStyle} value={thisWeek} onChange={this.onChange} hasFeedback/>
        { this.props.weekExists ? <p>Denne uken finnes fra før. rediger den her /uker/rediger/{`${this.props.year}/${this.props.week}`}</p> : ''}
      </div>
    )
  }
}

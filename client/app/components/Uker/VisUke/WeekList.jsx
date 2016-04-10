import React, { PropTypes } from 'react'
import DinnerListItem from '../../../containers/DinnerListItem.jsx'
import WeekPanelItem from './WeekPanelItem.jsx'
import NoDinnerListItem from './NoDinnerListItem.jsx'

class WeekList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: null
    }
    this.changeActive = this.changeActive.bind(this);
    this.renderList = this.renderList.bind(this);
  }
  changeActive(key, e) {
    e.preventDefault();

    if( this.state.activeKey === key ) {
      key = null;
    }

    this.setState({
      activeKey: key
    });
  }
  renderList() {
    const { weeks } = this.props;
    return weeks.map( (week, i) => {
      const { days, ...weekProps } = week;

      const daysList = _.map( week.days, (day, dayName) => {
        if( day.dinnerId )
          return <DinnerListItem key={dayName} day={dayName} {...day} />;

        return <NoDinnerListItem key={dayName} day={dayName} {...day} />;
      });

      return <WeekPanelItem expanded={i === this.state.activeKey} key={i} {...weekProps}
          days={daysList} onSelect={this.changeActive.bind(null,i)} />;
    });
  }
  render() {
    return (
      <div className='SL-ShowWeekList'>{this.renderList()}</div>
    )
  }
}

export default WeekList;

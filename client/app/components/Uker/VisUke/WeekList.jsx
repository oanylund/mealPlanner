import React, { PropTypes } from 'react'
import DinnerListItem from '../../../containers/DinnerListItem.jsx'
import WeekPanelItem from './WeekPanelItem.jsx'
import NoDinnerListItem from './NoDinnerListItem.jsx'

class WeekList extends React.Component {
  constructor(props) {
    super(props);
    this.renderList = this.renderList.bind(this);
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

      return <WeekPanelItem key={i} {...weekProps} days={daysList} />
    });
  }
  render () {
    return (
      <div>{this.renderList()}</div>
    )
  }
}

export default WeekList;

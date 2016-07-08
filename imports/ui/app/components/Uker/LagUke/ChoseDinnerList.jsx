import React, { PropTypes } from 'react'
import Infinite from 'react-infinite'
import ChoseDinnerItem from './ChoseDinnerItem.jsx'
import { composeWithTracker } from 'react-komposer'
import WeekChooseDinnerList from '../../../composers/WeekChooseDinnerList'


class ChoseDinnerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isInfiniteLoading: false,
    }
    this.handleInfiniteLoad = this.handleInfiniteLoad.bind(this);
    this.elementInfiniteLoad = this.elementInfiniteLoad.bind(this);
  }
  handleInfiniteLoad() {
    const { dinners, totalCount, loadMore } = this.props;
    this.setState({
      isInfiniteLoading: false
    });
    if( dinners.length >= totalCount ) return;
    loadMore();
  }
  elementInfiniteLoad() {
    return <div className="infinite-list-item">
            Laster flere middager...
           </div>;
  }
  render () {
    const { dinners, chooseDinner } = this.props;

    const dinnerList = dinners.map( (dinner, i ) => {
      return <ChoseDinnerItem key={i} {...dinner} chooseDinner={chooseDinner} />
    });

    return (
      <Infinite elementHeight={50}
         containerHeight={500}
         infiniteLoadBeginEdgeOffset={10}
         onInfiniteLoad={this.handleInfiniteLoad}
         loadingSpinnerDelegate={this.elementInfiniteLoad()}
         isInfiniteLoading={this.state.isInfiniteLoading}
      >
        {dinnerList}
      </Infinite>
    )
  }
}

export default composeWithTracker(WeekChooseDinnerList)(ChoseDinnerList);

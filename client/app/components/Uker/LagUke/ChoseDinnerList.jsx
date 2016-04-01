import React, { PropTypes } from 'react'
import Infinite from 'react-infinite'
import ChoseDinnerItem from './ChoseDinnerItem.jsx'

class ChoseDinnerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dinners: [],
      isInfiniteLoading: false,
      totalCount: 0
    }
    this.handleInfiniteLoad = this.handleInfiniteLoad.bind(this);
    this.elementInfiniteLoad = this.elementInfiniteLoad.bind(this);
  }
  componentWillMount() {
    this.updateDinnerCount('');
    this.updateDinners('',0,10);
  }
  componentWillReceiveProps(nextProp) {
    this.updateDinnerCount(nextProp.titleFilter);
    this.updateDinners(nextProp.titleFilter, 0, 10);
  }
  updateDinners(filter, offset, limit) {
    this.fetchDinners(offset, limit, filter).then( (dinnersFetched) => {
      this.setState({
        dinners: dinnersFetched
      });
    });
  }
  updateDinnerCount() {
    Meteor.call('getDinnerCount', this.props.titleFilter, (err, count) => {
      if (err) throw err;
      this.setState({
        totalCount: count
      });
    });
  }
  fetchDinners(offset, limit) {
    return new Promise( (res, rej) => {
      Meteor.call('getDinners', offset, limit, this.props.titleFilter, (err, fetchedDinners) => {
        if (err) throw err;
        const dinnerItems = fetchedDinners.map( (dinner, i) => {
          return <ChoseDinnerItem key={i+offset} {...dinner} />
        });
        res(dinnerItems);
      });
    })
    .catch( (err) => {
      console.log(err);
    });
  }
  handleInfiniteLoad() {
    const fetchNumber = 10;
    const dinnersLoaded = this.state.dinners.length;
    if ( dinnersLoaded === 0) return;
    if ( dinnersLoaded < this.state.totalCount ) {
      // Fetch dinners
      this.setState({ isInfiniteLoading: true });
      this.fetchDinners(dinnersLoaded, fetchNumber).then( (newDinners) => {
        this.setState({
          isInfiniteLoading: false,
          dinners: this.state.dinners.concat(newDinners)
        });
      });
    }
    else {
      // No more dinners to fetch
      this.setState({ isInfiniteLoading: false });
      return
    }
  }
  elementInfiniteLoad() {
    return <div className="infinite-list-item">
            Loading...
           </div>;
  }
  render () {
    return (
      <Infinite elementHeight={50}
         containerHeight={500}
         infiniteLoadBeginEdgeOffset={490}
         onInfiniteLoad={this.handleInfiniteLoad}
         loadingSpinnerDelegate={this.elementInfiniteLoad()}
         isInfiniteLoading={this.state.isInfiniteLoading}
      >
        {this.state.dinners}
      </Infinite>
    )
  }
}

export default ChoseDinnerList;

import React, { PropTypes } from 'react'
import { Alert, Button } from 'react-bootstrap'
import LagUkeActions from '../../../actions/LagUkeActions'

class AlertBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alertVisible: false
    }
    this.handleAlertDismiss = this.handleAlertDismiss.bind(this)
    this.handleAlertShow = this.handleAlertShow.bind(this)
    this.handleDanger = this.handleDanger.bind(this)
  }
  handleAlertDismiss() {
    this.setState({alertVisible: false});
  }
  handleAlertShow() {
    this.setState({alertVisible: true});
  }
  handleDanger() {
    this.handleAlertDismiss()
    LagUkeActions.deleteDays()
  }
  render () {
    if (this.state.alertVisible) {
          return (
            <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss}>
              <h4>Er du helt sikker?</h4>
              <p>Hvis du trykker nullstill må du begynne helt på nytt.</p>
              <p>
                <Button bsStyle="warning" onClick={this.handleDanger}>Nullstill uke</Button>
                <span> eller </span>
                <Button onClick={this.handleAlertDismiss}>skjul varsel</Button>
              </p>
            </Alert>
          );
        }

    return (
      <Button disabled={this.props.disabled} bsStyle='warning' onClick={this.handleAlertShow} block>Start uken på nytt</Button>
    );
  }
}

export default AlertBtn;

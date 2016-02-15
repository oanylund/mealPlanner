import React, { PropTypes } from 'react'
import { Alert, Button } from 'react-bootstrap'

class AlertBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alertVisible: false
    }
    this.handleAlertDismiss = this.handleAlertDismiss.bind(this)
    this.handleAlertShow = this.handleAlertShow.bind(this)
  }
  handleAlertDismiss() {
    this.setState({alertVisible: false});
  }
  handleAlertShow() {
    this.setState({alertVisible: true});
  }
  render () {
    if (this.state.alertVisible) {
          return (
            <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss}>
              <h4>Er du helt sikker?</h4>
              <p>Hvis du trykker nullstill må du begynne helt på nytt.</p>
              <p>
                <Button bsStyle="warning">Nullstill uke</Button>
                <span> eller </span>
                <Button onClick={this.handleAlertDismiss}>skjul varsel</Button>
              </p>
            </Alert>
          );
        }

    return (
      <Button bsStyle='warning' onClick={this.handleAlertShow} block>Start på nytt</Button>
    );
  }
}

export default AlertBtn;

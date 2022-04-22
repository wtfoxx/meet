import react, { Component } from "react";
import { ErrorAlert } from "./Alert";
import { Row, Col, Form } from "react-bootstrap";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    infoText: ''
  }

  handleChange = (event) => {

    const value = event.target.value;

    if(value < 1 || value > 32) {
      this.setState({
        numberOfEvents: '',
        infoText: 'Please enter a number between 1 and 32.'
      });
    } else {
      this.setState({
        numberOfEvents: value,
        infoText: ''
      });
    }

    this.props.updateNumberOfEvents(value);
  };

  render () {
    return (
      <Row className="justify-content-center">
        <h6 className="text-center">Number of Events</h6>
        <Col xl={3} lg={4} md={6} sm={12} className="numberOfEvents">
          <Form.Control
            type="number"
            className="inputNumber"
            onChange={this.handleChange}
            value={this.state.numberOfEvents}
          />
          <ErrorAlert className="text-center" text={this.state.infoText} />
  
        </Col>
      </Row> 
    )
  }

}

export default NumberOfEvents;
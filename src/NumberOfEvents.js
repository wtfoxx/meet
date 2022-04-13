import react, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32
  }

  handleChange = (event) => {

    const value = event.target.value;

    if(value < 1 || value > 32) {
      this.setState({
        numberOfEvents: ''
      });
    } else {
      this.setState({
        numberOfEvents: value
      });
    }

    this.props.updateNumberOfEvents(value);
  };

  render () {
    return (
      <div className="numberOfEvents">
        <input
          type="number"
          className="inputNumber"
          onChange={this.handleChange}
          value={this.state.numberOfEvents}
        />
      </div>
    )
  }

}

export default NumberOfEvents;
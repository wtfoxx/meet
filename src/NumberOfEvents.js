import react, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32
  }

  handleChange = (event) => {

    const value = event.target.value;

    this.setState({
      numberOfEvents: value,
    });
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
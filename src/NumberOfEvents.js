import react, { Component } from "react";
import { ErrorAlert } from "./Alert";
import { TextField, Box } from "@mui/material";

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
      <div>
        <Box>
          <TextField
            label="Number of events"
            type="number"
            className="inputNumber"
            onChange={this.handleChange}
            value={this.state.numberOfEvents}
          />
          
  
        </Box>
        <br />
          <ErrorAlert className="text-center" text={this.state.infoText} />
      </div> 
    )
  }

}

export default NumberOfEvents;
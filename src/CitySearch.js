import react, { Component } from "react";
import { InfoAlert } from "./Alert";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

import { MenuItem, Paper } from "@mui/material";


class CitySearch extends Component {

  state = {
    query: '',
    suggestions: [],
    showSuggestions: undefined,
    infoText: ''
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({showSuggestions: true});
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    if (suggestions.length === 0) {
      this.setState({
        query: value,
        infoText: 'We can not find the city you are looking for. Please try another city'
      });
    } else {
      return this.setState({
        query: value,
        suggestions,
        infoText: ''
      });
    }
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      suggestions: [],
      showSuggestions: false,
      infoText: ''
    });

    this.props.updateEvents(suggestion);
  }

  render() {
    return (
      <div className="justify-content-center">

          

        <Stack>
          
          <InfoAlert className="text-center" text={this.state.infoText} />

        <TextField
          label="Search city"
          value={this.state.query}
          onChange={this.handleInputChanged}
          onFocus={() => { this.setState({ showSuggestions: true }) }}
        >
        </TextField>
        <Paper 
        elevation={1}
        sx={{
          position: 'absolute',
          width: 'inherit',
          top: 150,
          zIndex: 'tooltip',
        }}
       >
          {this.state.suggestions.map((suggestion) => (
            <MenuItem key={suggestion} value={suggestion} onClick={() => this.handleItemClicked(suggestion)} style={this.state.showSuggestions && !this.state.infoText && this.state.query ? {} : { display: 'none' }}>
              {suggestion}
            </MenuItem>
          ))}
          <MenuItem onClick={() => this.handleItemClicked('all')}  style={this.state.showSuggestions && !this.state.infoText ? {} : { display: 'none' }}><b>See all cities</b></MenuItem>
        </Paper>
   
        </Stack>
      </div>
    );
  }
}

export default CitySearch;
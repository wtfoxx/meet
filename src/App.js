import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import './nprogress.css';
import { Container, Typography } from '@mui/material';


class App extends Component {

  state = {
    events: [],
    locations: [],
    currentLocation: 'all',
    numberOfEvents: 32,
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
      this.setState({ events, locations: extractLocations(events) });
      }
    });
  };

  componentWillUnmount() {
    this.mounted = false;
  };


  updateNumberOfEvents = (numberOfEvents) => {
    this.setState({
      numberOfEvents
    });
    
    this.updateEvents(this.state.currentLocation, numberOfEvents);
  }
  
  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const locationEvents = 
        location === 'all'
          ? events 
          : events.filter((event) => event.location === location);

      if (this.mounted) {
        this.setState({
          events: locationEvents.slice(0, this.state.numberOfEvents),
          currentLocation: location,
          numberOfEvents: eventCount
        });
      }
    });
  };

  render() {
    return (
      <Container maxWidth="sm">
        <Typography variant="h3" gutterBottom component="div">Meet</Typography>
          <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
          <br />
          <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateNumberOfEvents={this.updateNumberOfEvents} />
          <br />
          <EventList events={this.state.events} numberOfEvents={this.state.numberOfEvents} />
      </Container>
    );
  };

};


export default App;

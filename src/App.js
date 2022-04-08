import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';


class App extends Component {

  state = {
    events: [],
    locations: [],
    numberOfEvents: 32
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

  updateEvents = (location) => {
    getEvents().then((events) => {
      const eventLocation = location === 'all'
      ? events 
      : events.filter((event) => event.location === location);
    if (this.mounted) {
      this.setState({
        events: eventLocation.slice(0, this.state.numberOfEvents),
        selectedLocation: location
      });
    };
  });
  }

  updateNumberOfEvents = (numberOfEvents) => {
    this.setState(
      { numberOfEvents },
      this.updateEvents(this.state.locations, numberOfEvents)
    );
  };

  render() {
    return (
      <div className='App'>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <EventList events={this.state.events} NumberOfEvents={this.state.numberOfEvents} />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateNumberOfEvents={this.updateNumberOfEvents} />
      </div>
    );
  };

};


export default App;

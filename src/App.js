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


  render() {
    return (
      <div className='App'>
        <CitySearch locations={this.state.locations} />
        <EventList events={this.state.events} numberOfEvents={this.state.numberOfEvents} />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} />
      </div>
    );
  };

};


export default App;

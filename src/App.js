import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import './nprogress.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


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
      <Container>
        <div className='App'>
          <h1 className='text-center title'>Meet</h1>
          <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
          <br />
          <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateNumberOfEvents={this.updateNumberOfEvents} />
          <br />
          <EventList events={this.state.events} numberOfEvents={this.state.numberOfEvents} />
        </div>
      </Container>
    );
  };

};


export default App;

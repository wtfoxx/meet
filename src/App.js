import React, { Component, PureComponent } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import './nprogress.css';
import { Container, Typography } from '@mui/material';
import { OfflineAlert } from './Alert';
import { 
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer,
} from 'recharts';
import EventGenre from './EventGenre';
import { Accordion, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



class App extends Component {

  state = {
    events: [],
    locations: [],
    currentLocation: 'all',
    numberOfEvents: 32,
    OfflineAlertText: ''
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
      this.setState({ events, locations: extractLocations(events) });
      }
      if (!navigator.onLine) {
        this.setState({
          OfflineAlertText: 'You are offline'
        });
      } else {
        this.setState({
          OfflineAlertText: ''
        });
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

  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return {city, number};
    })
    return data;
  }

  render() {
    const { locations, numberOfEvents, events } = this.state;
    return (
      <Container>
        <Typography variant="h3" gutterBottom component="div">Meet</Typography>
          <CitySearch locations={locations} updateEvents={this.updateEvents} />
          <br />
          <NumberOfEvents numberOfEvents={numberOfEvents} updateNumberOfEvents={this.updateNumberOfEvents} />
          <OfflineAlert className="text-center" text={this.state.OfflineAlertText} />
          
          <Typography variant="button" gutterBottom component="div">Events in each city</Typography>
          
          <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
          >
            <Typography>Events graphs</Typography>
          </AccordionSummary>
          
          <div className='data-vis-wrapper graph'>
            <EventGenre events={events} />
            <ResponsiveContainer height={400}>
              <ScatterChart
                margin={{
                  top: 20, right: 20, bottom: 20, left: -10,
                }}
              >
                <CartesianGrid />
                <XAxis 
                  type="category" 
                  dataKey="city" 
                  name="City" />
                <YAxis 
                  allowDecimals={false}
                  type="number" 
                  dataKey="number" 
                  name="Number of Events" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter data={this.getData()} fill="#8884d8" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
          </Accordion>
          <br />
          <EventList events={events} numberOfEvents={numberOfEvents} />
      </Container>
    );
  };

};


export default App;

import react, { Component } from "react";
import Event from "./Event";
import { mockData } from "./mockData";

class EventList extends Component {

  render() {
    const { events } = this.props;
    return (
      <div className="EventList justify-content-center">
        
        {events.map(event => 
        <div lg={7} key={event.id}>
          <Event event={event} />
        </div>
        )} 
        
      </div>
    );
  }
}

export default EventList;
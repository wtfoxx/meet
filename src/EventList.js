import react, { Component } from "react";
import Event from "./Event";
import { mockData } from "./mockData";

class EventList extends Component {

  render() {
    const { events } = this.props;
    return (
      <ul className="EventList">
        {events.map(event => 
          <li key={event.id}>
            <Event event={event} />
          </li>
        )}
      </ul>
    );
  }
}

export default EventList;
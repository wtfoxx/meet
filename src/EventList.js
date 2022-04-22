import react, { Component } from "react";
import { Card, CardGroup, Container, Row, Col } from "react-bootstrap";
import Event from "./Event";
import { mockData } from "./mockData";

class EventList extends Component {

  render() {
    const { events } = this.props;
    return (
      <Row className="EventList justify-content-center">
        
        {events.map(event => 
        <Col lg={7} key={event.id}>
          <Event event={event} />
        </Col>
        )} 
        
      </Row>
    );
  }
}

export default EventList;
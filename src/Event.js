import { render } from "nprogress";
import react, { Component } from "react";
import { Card, Button, Accordion, Dropdown, Col } from "react-bootstrap";

class Event extends Component {

  state = {
    event: {},
    collapsed: true
  };

  handleClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const { event } = this.props;
    const { collapsed } = this.state;

    return <div>
      <Card>
        <Card.Body>
          <Card.Title>{event.summary}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{event.start.dateTime} ({event.start.timeZone})</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">{event.location}</Card.Subtitle>
        </Card.Body>

        <Accordion defaultActiveKey="1" flush >
          <Accordion.Item eventKey="0">
            <Accordion.Header>Event details</Accordion.Header>
            <Accordion.Body>
              <Card.Text className="event-description">{event.description}</Card.Text>
              <Button href={event.htmlLink} rel="noreferrer" target="_blank">See event on Google Calendars</Button>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion> 
      </Card>
      <br />
      </div>
    ;
  }
}



export default Event;
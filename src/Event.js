import react, { Component } from "react";

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

    return <div className="event">
      <h2 className="event-summary">{event.summary}</h2>
      <p className="event-start">{event.start.dateTime} ({event.start.timeZone})</p>
      <p className="event-location">{event.location}</p>
      <button className={`details-button ${collapsed ? "show" : "hide"}-details`}
      onClick={this.handleClick}>{collapsed ? "Show details" : "Hide details"}</button>

      {!collapsed &&
        <div className={`more-details ${this.state.collapsed ? "hide" : "show"}`}>
          <a href={event.htmlLink} rel="noreferrer" target="_blank">See event on Google Calendars</a>
          <p className="event-description">{event.description}</p>
        </div>
      }
    </div>;
  }
}

export default Event;
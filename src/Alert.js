import react, { Component } from "react";
import { Badge } from "react-bootstrap";

class Alert extends Component {
  constructor(props) {
    super(props);
    this.bg = null;
  }

  getStyle = () => {
    return this.bg
  }

  render() {
    return (
      <div className="Alert">
        <Badge bg={this.getStyle()}>{this.props.text}</Badge>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.bg = "primary";
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.bg = "danger";
  }
}

export { InfoAlert, ErrorAlert };
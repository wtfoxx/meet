import react, { Component } from "react";
import { Alert, Collapse } from "@mui/material";

class Alerts extends Component {
  constructor(props) {
    super(props);
    this.bg = null;
  }

  getStyle = () => {
    return this.bg
  }

  render() {
    return (
      <Collapse in={this.props.text !== ''}>
        <Alert severity={this.getStyle()}>{this.props.text}</Alert>
        <br />
      </Collapse>
    );
  }
}

class InfoAlert extends Alerts {
  constructor(props) {
    super(props);
    this.bg = "info";
  }
}

class ErrorAlert extends Alerts {
  constructor(props) {
    super(props);
    this.bg = "info";
  }
}

class OfflineAlert extends Alerts {
  constructor(props) {
    super(props);
    this.bg = "warning";
  }
}

export { InfoAlert, ErrorAlert, OfflineAlert };
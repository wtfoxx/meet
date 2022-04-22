import react, { Component } from "react";
import { Row, Col, Form, ListGroup } from "react-bootstrap";
import { InfoAlert } from "./Alert";

class CitySearch extends Component {

  state = {
    query: '',
    suggestions: [],
    showSuggestions: undefined,
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({showSuggestions: true});
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    if (suggestions.length === 0) {
      this.setState({
        query: value,
        infoText: 'We can not find the city you are looking for. Please try another city'
      });
    } else {
      return this.setState({
        query: value,
        suggestions,
        infoText: ''
      });
    }
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      suggestions: [],
      showSuggestions: false,
      infoText: ''
    });

    this.props.updateEvents(suggestion);
  }

  render() {
    return (
      <Row className="justify-content-center">
        <h5 className="text-center">Search city</h5>
          

        <Col xl={3} lg={4} md={6} sm={12} className="CitySearch">
          
          <InfoAlert className="text-center" text={this.state.infoText} />
          <Form.Control
            type="text"
            className="city"
            value={this.state.query}
            onChange={this.handleInputChanged}
            onFocus={() => { this.setState({ showSuggestions: true }) }}
          />
          <ListGroup className="suggestions" style={this.state.showSuggestions ? {} : { display: 'none' }}>
            {this.state.suggestions.map((suggestion) => (
              <ListGroup.Item action
              key={suggestion}
              onClick={() => this.handleItemClicked(suggestion)}
              >{suggestion}</ListGroup.Item>
            ))}
            <ListGroup.Item action onClick={() => this.handleItemClicked('all')}>
              <b>See all cities</b>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    );
  }
}

export default CitySearch;
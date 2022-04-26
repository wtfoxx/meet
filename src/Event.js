import { render } from "nprogress";
import react, { Component } from "react";
import { Card, Accordion, Button, CardContent, Typography, AccordionSummary, CardActions, AccordionDetails, Collapse, CardHeader } from "@mui/material";
import { IconButton } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

class Event extends Component {

  state = {
    event: {},
    collapsed: false
  };

  handleClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const { event } = this.props;
    const { collapsed } = this.state;
    const ExpandMore = styled((props) => {
      const { expand, ...other } = props;
      return <IconButton {...other} />;
    })(({ theme, expand }) => ({
      transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
      
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    }));

    return <div>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">{event.summary}</Typography>
          <Typography variant="body2" color="text.secondary">{event.start.dateTime} ({event.start.timeZone})</Typography>
          <Typography variant="body2" color="text.secondary">{event.location}</Typography>
        </CardContent>

          <CardActions>

            <ExpandMore
              expand={collapsed}
              onClick={this.handleClick}
              aria-expanded={collapsed}
          aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
            <Typography color="text.secondary"><b>Event description</b></Typography>
          </CardActions>
          <Collapse in={collapsed} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>{event.description}</Typography>
              <Button href={event.htmlLink} rel="noreferrer" target="_blank">See event on Google Calendars</Button>
            </CardContent>
          </Collapse>






          {/* <Accordion>
            <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
              <Typography>Event details</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Card.Text>{event.description}</Card.Text>
              <Button href={event.htmlLink} rel="noreferrer" target="_blank">See event on Google Calendars</Button>
            </AccordionDetails>
          </Accordion> */}
      
      </Card>
      <br />
      </div>
    ;
  }
}



export default Event;
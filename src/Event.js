import { render } from "nprogress";
import react, { Component } from "react";
import { Card, Button, CardContent, Typography, CardActions } from "@mui/material";
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

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
    const Accordion = styled((props) => (
      <MuiAccordion disableGutters elevation={0} square {...props} />
    ))(({ theme }) => ({
      border: `0px solid ${theme.palette.divider}`,
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
    }));
    
    const AccordionSummary = styled((props) => (
      <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
      />
    ))(({ theme }) => ({
      flexDirection: 'row-reverse',
      '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
      },
      '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
      },
    }));
    
    const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
      padding: theme.spacing(2),

    }));


    const { event } = this.props;

    return <div>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">{event.summary}</Typography>
          <Typography variant="body2" color="text.secondary">{event.start.dateTime} ({event.start.timeZone})</Typography>
          <Typography sx={{marginBottom: -2}} variant="body2" color="text.secondary">{event.location}</Typography>
        </CardContent>

        <CardActions>
          <Accordion>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography variant="button">Event details</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography paragraph variant="body2" sx={{marginTop: -2}}>
                {event.description}
              </Typography>
              <Button size="small" variant="contained" href={event.htmlLink} rel="noreferrer" target="_blank">See event on Google Calendars</Button>
            </AccordionDetails>
          </Accordion>
        </CardActions>







          {/* <CardActions>

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
          </Collapse> */}






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
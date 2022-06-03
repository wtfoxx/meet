Meet is a progressive, serverless web application that uses the Google Calendar API to provide information about educational events to full-stack developers. Users can filter events by location, expand events to see detailed descriptions and view summary event information using charts.

During the coding process I learned and implemented:

-   Test driven development
-   OAuth2.0 Authorization and authentication

## Live App

Visit [Meet App](https://wtfoxx.github.io/meet/)

## Features

- Meet app displays (fictitious) events related to development. Each event features a title, date, time and location. Upon clicking the "Event details" button, a detailed description and a link to the Google Calendar event are displayed
- Progress bar at the beginning while the information is loading
- Filter to select location, and number of events to be shown in the page
- Toggleable data visualization section that shows up the distribution of topics and number of events by city, according to the user's filter selections
- Offline functionalities
- Alerts to inform if user is offline, if city selected does not exist, and if number of events does not meet criteria.
- OAuth2.0 authentication and authorization with Google
- Cloud-based server by AWS.
- Serverless framework to configure endpoints and deploy event handlers.

## Tech-stack

-   React
-   Jest
-   Enzyme
-   jest-cucumber
-   Puppeteer
-   Serverless
-   Googleapis
-   Axios
-   Atatus
-   nprogress
-   Recharts
-   gh-pages

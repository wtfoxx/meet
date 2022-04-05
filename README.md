### _FEATURE 1: FILTER EVENTS BY CITY_  
>**User story:**
> As a **user**,
I should be able to **filter events by city**,
so that **I can see the list of events that take place in that city.**

- **Scenario 1:** When user hasn’t searched for a city, show upcoming events from all cities.  
>**Given** user hasn't searched for any city
>**When** the user opens the app
>**Then** the user should see a list of all upcoming events
- **Scenario 2:** User should see a list of suggestions when they search for a city. 
>**Given** the main page is open
>**When** user starts typing in the city textbox
>**Then** the user should see a list of cities (suggestions) that match what they've typed.
- **Scenario 3:** User can select a city from the suggested list.
>**Given** the user was typing "Berlin" in the city textbox
>**When** the user selects a city (e.g., "Berlin, Germany")
>**Then** their city should be changed to that city (i.e., "Berlin, Germany"), and user should receive a list of upcoming events in that city.


### _FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS_
>**User story:**
>As a **user**,
I should be able to **show and hide events details**
So that **the interface is not cluttered and I only see what I want**

-   **Scenario 1:** An event element is collapsed by default
>**Given** the main page is open
>**When** the user opens the app
>**Then** the events should all be collapsed by default
-   **Scenario 2:** User can expand an event to see its details
>**Given** the main page is open
>**When** the user clicks to expand an event
>**Then**  the event element should expand and show the event's details
-   **Scenario 3:** User can collapse an event to hide its details
>**Given** the main page is open
>**When** the user clicks to collapse an event
>**Then** the event element should collapse and hide the event's details


### _FEATURE 3: SPECIFY NUMBER OF EVENTS_
>**User story:**
>As a **user**,
I should be able to **specify the numbers of events**,
so that **the interface is cleaner and loads faster**.

-   **Scenario 1:** When user hasn’t specified a number, 32 is the default number
>**Given** the main page is open
>**When** the user hasn't specified a number of events to show
>**Then** the number of events shown will be 32 at least
-   **Scenario 2:** User can change the number of events they want to see
>**Given** the main page is open
>**When** the user specifies a number of events to be shown
>**Then** the number of events shown will be the number specified by user or less

### _FEATURE 4: USE THE APP WHEN OFFLINE_
>**User story:**
As a **user**,
I should be able to **use the app when offline**,
so that** I'm not restricted by my internet connection**.

-   **Scenario 1:** Show cached data when there’s no internet connection
>**Given** there's no internet connection
>**When** the user opens the app
>**Then** the app shows cached data
-   **Scenario 2:** Show error when user changes the settings (city, time range)
>**Given** there is no internet connection
>**When** the user changes the setting (e.g., city, time range)
>**Then** the app shows an error page

## _FEATURE 5: DATA VISUALIZATION_
>**User story:**
As a **user**,
I should be able to **visualize the number of upcoming events in a city**,
so that **the information is visually clear.**

-   **Scenario 1:** Show a chart with the number of upcoming events in each city
>**Given** the main page is open
>**When** user opens the app
>**Then** page show a visual chart with the number of upcoming events in each city
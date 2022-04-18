Feature: Show/Hide an event's details
  Scenario: An event element is collapsed by default
    Given the main page is open
    When the user opens the app
    Then the events should all be collapsed by default

  Scenario: User can expand an event to see its details
    Given the main page is open
    When the user clicks to expand an event
    Then the event element should expand and show the event's details

  Scenario: User can collapse an event to hide its details
    Given the main page is open and an event is expanded
    When the user clicks to collapse an event
    Then the event element should collapse and hide the event's details

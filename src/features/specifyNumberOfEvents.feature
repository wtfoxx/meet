Feature: Specify number of events
  Scenario: When user hasn't specified a number, 32 is the default number
    Given the main page is open
    Then the user hasn't specified a number of events to show
    When the number of events shown will be 32


  Scenario: User can change the number of events they want to see
    Given the main page is open
    Then the user specifies a number of events to be shown
    When the number of events shown will be the number specified by user or less
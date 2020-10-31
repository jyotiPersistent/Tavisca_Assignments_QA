Feature: vacationsdirect hotel search verification 

Scenario Outline:[Scenario 1.0] As a user, I can search hotels for expected destination

    Given I hotel search url <pageurl>
    When I open the hotel search
    Then It should redirect hotels search page properly and have title- <title>
    When I click on hotel tab and provide the destination <destination>, date, and adults as search criteria
    Then It should redirect hotels details page properly with correct location name- <location>

    Examples:
  | pageurl | destination | title | location |
  | https://vacationsdirect.com/ | Houston, TX | Home | Houston |
     

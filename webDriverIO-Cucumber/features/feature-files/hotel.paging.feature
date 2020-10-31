
Feature: vacationsdirect hotel search and paging verification 

Scenario Outline:[Scenario 2.0] As a user, I can search hotels for expected destination

    Given I hotel search url <pageurl>
    When I open the hotel search
    Then It should redirect hotels search page properly and have title- <title>
    When I click on hotel tab and provide the destination <destination>, date, and adults as search criteria
    Then It should redirect hotels details page properly with correct location name- <location>

    Examples:
  | pageurl | destination | title | location |
  | https://vacationsdirect.com/ | Houston, TX | Home | Houston |


Scenario Outline:[Scenario 2.1] As a user, I can search hotels details for specific page- <pageno>

   When I search for specific page <pageno>
   Then It should search specific page properly

   Examples:
  | pageno |
  | 5 |
     
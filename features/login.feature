Feature: Login

  Scenario: Standard user logs in successfully
    Given I am on the login page
    When I log in with "standard_user" and "secret_sauce"
    Then I should see the products page
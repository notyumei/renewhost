Feature: Validate NoIP Hostname

@validate
Scenario: Validate Hostname
    Given I'm in Dashboard page
    When I click on Dynamic DNS
    Then I click on No-IP Hostnames
    When I'm in Hostname page
    Then I should see the hostname as Active
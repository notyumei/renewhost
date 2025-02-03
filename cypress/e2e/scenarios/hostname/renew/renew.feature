Feature: Renew NoIP Hostname

@renew
Scenario: Renew Hostname
    Given I'm in Dashboard page
    When I click on Dynamic DNS
    Then I click on No-IP Hostnames
    When I'm in Hostname page
    Then I click on Confirm
    Then I should see the hostname as Active
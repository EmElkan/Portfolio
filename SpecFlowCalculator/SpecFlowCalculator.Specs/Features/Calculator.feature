Feature: Calculator
![Calculator](https://specflow.org/wp-content/uploads/2020/09/calculator.png)
	In order to avoid silly mistakes
	As a math idiot
	I *want* to be told the **sum** of ***two*** numbers

Link to a feature: [Calculator](SpecFlowCalculator.Specs/Features/Calculator.feature)
***Further read***: **[Learn more about how to generate Living Documentation](https://docs.specflow.org/projects/specflow-livingdoc/en/latest/LivingDocGenerator/Generating-Documentation.html)**

@mytag
Scenario: Add two numbers
	Given the first number is 50
	And the second number is 70
	When the two numbers are added
	Then the result should be 120


Scenario: Subtract two numbers
    Given the first number is 120
    And the second number is 70
    When the two numbers are subtracted
    Then the result should be 50


Scenario: Multiply two numbers
    Given the first number is 10
    And the second number is 5
    When the two numbers are multiplied
    Then the result should be 50

Scenario: Divide two numbers
    Given the first number is 10
    And the second number is 5
    When the two numbers are divided
    Then the result should be 2
# Timestamp Microservice

A small timestamp microservice that parses unix timestamps or natural language dates
and returns a json object with the date in a predefined format.

## Example usage:

* https://timestamp-ms.herokuapp.com/December%2015,%202015
* https://timestamp-ms.herokuapp.com/1450137600

## Example output:

* { "unix": 1450137600, "natural": "December 15, 2015" }

Check it running on heroku [here](https://dry-mesa-52433.herokuapp.com/).
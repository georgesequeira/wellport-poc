# WellPort POC - Work in Progress

Welcome! This is a simple POC for WellPort with the following:
* Frontend dashboard that displays
    * Overall status of employees having taken their temperature
    * History of temperatures taken
    * Listing of Employees

# Timedata
Currently thinking about leveraging 7shifts to show upcoming shifts in our platform as well. May leave this for a later version.

# Data API
Data is stored in a PostgreSQL database managed by Hasura (on Heroku):
https://wellport-graphql-backend.herokuapp.com/console

It has the following entities:
* Employee
* Temperature reading
* Generic Cleaning (potential v1)

# Frontend
The frontend is a react app built using react-admin.

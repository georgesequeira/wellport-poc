# WellPort POC

Welcome! This is a simple POC for WellPort with the following:

* Frontend dashboard that displays
    * Overall status of employees having taken their temperature
    * History of temperatures taken
    * Listing of Employees
    * Listing of Shifts

# Quick Overview
The dashboard is a react application that leverages [react-admin](https://marmelab.com/react-admin/Readme.html) to avoid re-writing a lot of the common "admin" components of a dashboard. For this POC, we leverage [json-server](https://github.com/typicode/json-server) to quickly provide a REST API with low-hassle. With the checked-in `db.json` file, this makes repeatable testing easy.

# Requirements
The project was developed with:
* yarn 1.22.4
* npm 6.14.4
* node 14.4.0

Anything newer should work.

# Starting the API server
```
cd wellport-poc/
make run-api
```

You should be presented with the api running

```sh
❯ make run-api
yarn install
yarn install v1.22.4
warning package.json: No license field
warning No license field
[1/4] 🔍  Resolving packages...
success Already up-to-date.
✨  Done in 0.21s.
yarn run json-server --watch db.json --fks _id
yarn run v1.22.4
warning package.json: No license field
$ /Users/george/kinlet/wellport-poc/node_modules/.bin/json-server --watch db.json --fks _id

  \{^_^}/ hi!

  Loading db.json
  Done

  Resources
  http://localhost:3000/temperatures
  http://localhost:3000/shifts
  http://localhost:3000/users

  Home
  http://localhost:3000

  Type s + enter at any time to create a snapshot of the database
  Watching...
  ```


# Starting the React App
```
cd wellport-poc/
make run-admin
```

![image](https://user-images.githubusercontent.com/607097/83921845-46c72c80-a74d-11ea-9216-b453fc104de6.png)

# Integration Testing
As we are leveraging off-the-shelf components (react-admin, json-server), jest/unit tests aren't as useful. I took the opportunity to introduce my favorite method of integration/end-to-end testing frontend: cypress

Cypress is a front end testing tool that makes it easy to setup/write/run/debug tests. More info: [cypress](https://www.cypress.io/).

In order to see a small taste. Run

```
cd wellport-poc/
make run-cypress
```

# Where is the API data from?
The shift/employee data was borrowed from a test account on 7shifts.

# Timedata
Currently thinking about leveraging 7shifts to show upcoming shifts in our platform as well. May leave this for a later version.

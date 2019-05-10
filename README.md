# DeskLamp

DeskLamp is an app for teams of people to track tasks and communicate across their company, team, or projects.
* DeskLamp provides users with a modular set of tools to manage tasks across all levels of a company

[DeskLamp Live](https://desklamp.herokuapp.com/)

## How It Works
1. Users just need to click sign up to setup an account that requires a valid email, name, and password.
2. A company must be created t which will serve as the default landing page for a user. This then generates a default company hub.
3. From there the user will have access to all of the task tracking features.

## Technologies Used
### &nbsp;&nbsp;&nbsp;Backend
* Ruby on Rails was used for handling data from a Postgres database
* The Rails setup provided a lot functionality by default making it simple to build models with validations and assocations
* Jbuilder was used to build JSON responses that are being sent to the frontend for rendering

### &nbsp;&nbsp;&nbsp;Frontend
* React was used for building all of the views rendered in the browser
* Alongside React, Redux was used to manage the App's state
* Jbuilder made it easier to keep the state flat so complicated logic was not needed for retrieving data within the state

### &nbsp;&nbsp;&nbsp;Production
* DeskLamp is stored in a repository on GitHub and was deployed to Heroku for production

# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/github-finalization-assignment).


# Feedback Form

## Descriptipon
_Durration: 24 hours_

This is a simple single page app that takes feedback from the user and keeps it in a database to be reviewed by admins.

## Prerequisites

* Node.js
* react
* redux
* postgres

## Installation

1. Run npm install
2. Create a database called `prime_feedback` on your local postgres server
3. Run the SQL commands found in `database.sql`
3. Run `npm run build` to build a local react app
4. Run `npm run server` to run the server.
5. Go to `localhost:5000` 

An online version of this app is available [here](https://safe-cove-90277.herokuapp.com/)

## Usage

Each of the feedback fields take values from 0 to 5 with comments being the exception.

Users are able to move backwards and forwards throught the form, and their responses are saved.

Users can submit multiple feedbacks.

Admins can view user feedback at `/admin`.  Feedback can be deleted or flagged to indicate need for review.

## Built With

Javascript
* Node.js
* express
* pg
* react
* redux
* material-ui

SQL
* postgres
* pgadmin 4

## Known bugs
* When trying to navigate past comments, console will log `Assertion failed: Input
argument is not an HTMLInputElement onloadwff.js` if you have LastPass.  This is
a known bug with text-area and LastPasss, and Material-UI uses text-area when 
creating a multiline TextField.  This should not affect functionality.  If an issue
does occur and you have an error message refferencing onloadwff.js, disable LastPass
while using this app.

## Support

If you have nay suggestions or issues, please e-mail me at phillipb1991@msn.com
# Reactive Nutshell: The Information Dashboard

## What is Reactive Nutshell?

Nutshell is a new product offering that you have been tasked with building. It's an app for people to use to organize their daily tasks, events, news article, friends, and chat messages.

You will be using the React library to build out this application.

To start you off, here's an example of what some of the resources in your API should look like once it's populated with some data from your application.

### Users

```json
{ "id": 1, "name": "Steve Brownlee", "email": "me@me.com" }
```

### Friends

```json
{ "id": 1, "userId": 1, "currentUserId": 3 }
```

### News Articles

```json
{
    "id": 1,
    "userId": 2,
    "url": "https://www.quantamagazine.org/newfound-wormhole-allows-information-to-escape-black-holes-20171023/",
    "title": "Wormholes Allow Information to Escape Black Holes",
    "synopsis": "Check out this recent discovery about workholes",
    "timestamp": "2021-02-11T15:24"
}
```

## Professional Requirements

1. All teammates were required to use React and JSON-server. 
1. Each module should have a comment at the top with the following info: author(s) and purpose of module
1. The README for your project should include instructions on how another person can download and run the application
1. An ERD showing the database relationships. A screenshot/image should be included on your README.

## A Note About Authentication

We want you to know that the login and registration code we have given you is fake, completely insecure, and would never be implemented in a professional application. It is a simulation authentication using very simplistic tools, because authentication is not a learning objective of students at NSS.

You will be using [session storage](https://javascript.info/localstorage#sessionstorage) to keep track of which user has logged into Nutshell. You need to read the code in the **`Login.js`** and **`Register.js`** components so that you see what is going on, but you do not need to change it.

## How To Use

## Setup: Follow these steps exactly

1. Clone repository to your local machine from GitHub
1. `cd` into the project directory
1. In the `api` directory, create a copy of the `database.json.example` and remove the `.example` extension.
1. Run `json-server -p 8088 -w database.json` from the `api` directory.
1. Run `npm install` and wait for all dependencies to be installed.
1. Run `npm start` to verify that installation was successful.

> **Note:** Your `database.json` file is already in the `.gitignore` file for this project, so it will never be added to the repo or pushed to Github.

#### Demo Users

Register for an account and login. Do not use information you wish to keep private. 

### Reactive Nutshell ERD

![alt text](./public/nutshell_erd.png "Reactive Nutshell ERD")
[Entity Relations Diagram](https://drawsql.app/wmdrums/diagrams/reactive-nutshell)

# MiniApps API Dashboard

A JavaScript-powered dashboard of mini apps that fetch and display live data from multiple public APIs. This project was built as a final JavaScript portfolio assignment focused on DOM manipulation, `fetch()`, and `async/await`.

## Author

**David Rodriguez Velasquez**  
GitHub: [DavidRV96](https://github.com/DavidRV96)

---

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Collaborators](#collaborators)
- [Screenshots](#screenshots)

---

## Introduction

The **MiniApps API Dashboard** is a single-page web application that displays several mini apps in one interface. Each section connects to a different public API and dynamically updates the page with real-time data.

This project was created as part of a final JavaScript assignment designed to demonstrate understanding of:

- `fetch()` and `async/await`
- working with APIs and JSON responses
- DOM manipulation
- event listeners
- debugging with `console.log()`
- handling different response structures from multiple APIs

The goal of the assignment was to build a dashboard made up of mini apps, where each app works independently and displays useful or fun information from a real-world API.

Based on the current code, this project includes mini apps for:

- Cat facts
- Dog images
- Coffee images
- Song Lyrics
- Weather
- Jokes
- Calendar / holiday information
- Anime quotes

---

## Features

- Displays live API data in a dashboard layout
- Uses **JavaScript async functions** to fetch data
- Updates page content dynamically with DOM manipulation
- Includes multiple independent mini app sections
- Demonstrates use of `try/catch` for error handling
- Uses button interaction for at least part of the dashboard
- Organized into separate files:
  - `index.html`
  - `styles.css`
  - `script.js`

### Current API-powered mini apps in this project
- **Cat Fact** – fetches and displays a random cat fact
- **Dog Image** – fetches and displays a random dog image
- **Coffee Image** – fetches and displays a coffee-related image
- **Weather** – displays weather data from an API
- **Joke** – shows a random joke
- **Calendar Info** – displays calendar-related data
- **Anime Quote** – shows a random anime quote with character and anime title

---

## Prerequisites

Before running this project, make sure you have:

- A modern web browser such as:
  - Google Chrome
  - Microsoft Edge
  - Firefox
- [Visual Studio Code](https://code.visualstudio.com/) or another code editor
- [Git](https://git-scm.com/) installed if you want to clone the repository
- Internet access, since the app depends on live public APIs

---

## Installation

### Option 1: Clone the repository

```bash
git clone https://github.com/DavidRV96/MiniApps.git
cd MiniApps

# Eventique — College Event Management Platform

A premium, dark-themed single-page application for discovering, registering, and managing college campus events.

## Features

- **User Authentication** — Register & login with localStorage persistence
- **Event Dashboard** — Browse upcoming events in list or calendar view
- **Event Details** — View activities, chief guests, registration stats & related events
- **Event Registration** — Register for events with a confirmation flow
- **Notifications** — Real-time notification bell with unread count & mark-as-read
- **Responsive Design** — Works on desktop and mobile devices

## Tech Stack

- **HTML5** — Semantic structure
- **CSS3** — Custom properties, glassmorphism, gradients, animations
- **JavaScript (ES6+)** — SPA routing, DOM rendering, localStorage state

No frameworks. No build tools. No npm dependencies.

## Project Structure

```
grand-event-hub/
├── index.html          # Entry point
├── style.css           # Full design system
├── app.js              # SPA router & page rendering
├── auth.js             # Authentication module
├── data.js             # Mock event data & utilities
└── notifications.js    # Notification system
```

## How to Run

Simply open `index.html` in a browser, or start a local server:

```sh
npx serve
```

Then visit `http://localhost:3000`.

## Pages

| Route | Page |
|-------|------|
| `#/` | Login |
| `#/register` | Create Account |
| `#/dashboard` | Event Dashboard |
| `#/event/:id` | Event Details |
| `#/register-event/:id` | Event Registration |
| `#/thank-you/:id` | Confirmation |

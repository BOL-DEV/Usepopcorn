🎬 UsePopcorn – Movie Finder App

UsePopcorn is a sleek and responsive movie search app built with React. It allows users to search any movie, view detailed information, and manage a personal “watched” list — all inside a clean and fast UI.

This project focuses on:

API data fetching

Component-based architecture

State management

Custom hooks

Responsive layout

Clean UI/UX

Reusable components

🚀 Features
🔍 Search Movies

Instantly search any movie using the OMDB API. Results update in real-time as you type.

🎦 Movie Details

Clicking a movie shows:

Poster

Title

Year

Ratings

Plot summary

Runtime and genre

⭐ Add to Watched List

Users can add movies to a personal list that displays:

Average rating

User rating

Runtime summary

❌ Remove Movies

Easily remove movies from your watched list anytime.

📱 Fully Responsive

Optimized for:

Mobile screens (390px width and above)

Tablets

Desktop screens

🛠️ Tech Stack

React

JavaScript (ES6+)

CSS (custom + responsive breakpoints)

OMDB API

React Hooks (useEffect, useState, useRef)

📦 Installation

Clone the project:

git clone https://github.com/BOL-DEV/Usepopcorn.git


Install dependencies:

npm install


Start development server:

npm start

📁 Project Structure
src/
  components/
    Navbar.jsx
    Search.jsx
    MovieList.jsx
    MovieDetails.jsx
    WatchedList.jsx
  hooks/
    useMovies.js
  App.jsx
  index.js
  styles.css

🌐 API Used

This app uses the OMDB API:
https://www.omdbapi.com/

You’ll need an API key — add it like this:

https://www.omdbapi.com/?apikey=YOUR_KEY&s=movie_title

🧩 Improvements Coming Soon

Dark/Light mode toggle

LocalStorage sync for watched movies

Animations & transitions

Pagination for search results

👨‍💻 Author

BOL
Frontend Developer | JavaScript Lover | React Enthusiast

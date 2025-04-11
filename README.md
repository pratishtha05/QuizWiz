# QuizWiz – Real-time Multiplayer Quiz Platform

**QuizWiz** is a real-time multiplayer quiz application that enables users to compete in live quiz rooms with features like room codes, live score tracking, and leaderboard updates. It is designed using the MERN stack and supports user authentication and secure gameplay through JWT and Socket.IO.

---

## Features

- Real-time multiplayer quiz experience  
- Room-based gameplay with unique codes  
- Secure user authentication (login/signup)  
- Live leaderboard with dynamic score updates  
- Timer-based questions  
- Admin/host and participant roles  
- Responsive UI with smooth navigation  

---

## Tech Stack

**Frontend:**
- React  
- React Router DOM (with createBrowserRouter)  
- Tailwind CSS  
- Axios  
- Vite  

**Backend:**
- Node.js  
- Express.js  
- MongoDB with Mongoose  
- Socket.IO  
- JSON Web Token (JWT)  
- Bcrypt.js    

---

## Project Structure

The project is divided into two main directories:  
`frontend` for the React-based client and `backend` for the Node.js/Express server.

---

## Getting Started

1. **Clone the repository**  
   - Download the project or clone it from GitHub.

2. **Install dependencies**  
   - Run the appropriate package manager (e.g., npm) in both `frontend` and `backend` folders.

3. **Run the project**  
   - Start the backend server first.  
   - Then run the frontend development server.

---

## Authentication Flow

- Users can register and log in securely using JWT.  
- Tokens are stored on the client side to maintain session state.  
- Auth-based routing ensures protected components are accessible only to authenticated users.  
- Navbar adapts based on login status (hides login/signup when logged in).  

---

## Real-Time Gameplay

- Uses Socket.IO to connect clients and server in real time.  
- Players can join quiz rooms via room codes.  
- Questions are pushed by the host to all participants.  
- Scores are calculated instantly and updated live on the leaderboard.  

---

## Future Scope

- Chat functionality within quiz rooms  
- Question categories and difficulty settings  
- Admin dashboard to create and manage quizzes  
- Game analytics and history for users  
- Mobile app version for iOS and Android  

---

## Contribution

Contributions are welcome. New features, bug fixes, and ideas are encouraged. For significant changes, open an issue for discussion before submitting a pull request.

---

## License

This project is licensed under the MIT License.

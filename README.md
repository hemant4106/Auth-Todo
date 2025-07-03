# Node.js Auth + TODO App (MongoDB + JWT)

This is a Node.js backend project that includes both:

1. User Authentication (Register/Login) with JWT
2. A protected TODO CRUD API

Both tasks are implemented **in the same project folder**, but organized into separate route files and controllers so the structure is clean and modular.

## Features

### Auth (Task 1)
- Register user (POST /api/register)
- Login user and return JWT token (POST /api/login)
- Passwords are hashed using bcryptjs
- JWT is used for stateless authentication

### TODO App (Task 2)
- Create a TODO (POST /api/todos)
- Read all TODOs for logged-in user (GET /api/todos)
- Update a TODO (PUT /api/todos/:id)
- Delete a TODO (DELETE /api/todos/:id)
- All routes are protected with JWT

## Folder Structure

```
auth-todo-app/
│
├── controllers/
│   ├── authController.js
│   └── todoController.js
│
├── middleware/
│   └── authMiddleware.js
│
├── models/
│   ├── User.js
│   └── Todo.js
│
├── routes/
│   ├── authRoutes.js
│   └── todoRoutes.js
│
├── .env
├── server.js
├── package.json
└── README.md
```

## Environment Variables

Create a `.env` file in the root with the following:

```
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/tododb?retryWrites=true&w=majority
JWT_SECRET=yourSecretKeyHere
```

Make sure to replace `<username>` and `<password>` with your actual MongoDB credentials.

## Installation & Running Locally

1. Clone this repository

```
git clone https://github.com/your-username/auth-todo-app.git
cd auth-todo-app
```

2. Install dependencies

```
npm install
```

3. Add a `.env` file with your Mongo URI and JWT secret

4. Start the server

```
node server.js
```

The server will start on `http://localhost:5000`

## API Testing

Use Postman to test the following endpoints:

### Auth Routes
- POST `/api/register` – Register a new user
- POST `/api/login` – Login and receive a JWT token

### TODO Routes (Protected)
Add the token to `Authorization: Bearer <token>` header
- POST `/api/todos` – Create a new TODO
- GET `/api/todos` – Get all TODOs for user
- PUT `/api/todos/:id` – Update TODO by ID
- DELETE `/api/todos/:id` – Delete TODO by ID

## Notes

- You must login to get a token before accessing TODO routes.
- Basic error handling is included (e.g. invalid token, missing fields).
- MongoDB Atlas is used for the database.


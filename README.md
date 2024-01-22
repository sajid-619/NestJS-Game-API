# NestJS Game API

This is a simple RESTful API built with NestJS for a mobile game. The API allows players to submit their high scores and view the leaderboard.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Running Locally](#running-locally)
  - [Docker Setup](#docker-setup)
- [API Endpoints](#api-endpoints)

## Features

- Submit a new high score for a player
- Retrieve the top 10 scores, ranked by score
- Authentication using JSON Web Tokens (JWTs)
- Authorization for users and admins
- Rate limiting to prevent abuse
- Logging of requests to a file
- SQL-based database for storing high scores
- Dockerized for easy deployment

## Prerequisites

Make sure you have the following installed on your machine:

- Node.js (https://nodejs.org/)
- npm (comes with Node.js)
- Docker (https://www.docker.com/)

## Getting Started

### Running Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/nestjs-game-api.git
   cd nestjs-game-api
   ```

2. Install dependencies:

  ```bash
  npm install
  ```

3. Set up your environment variables. Create a .env file in the project root with the following:

  ```bash
  PORT=3000
  DATABASE_HOST=localhost
  DATABASE_PORT=3306
  DATABASE_USERNAME=root
  DATABASE_PASSWORD=root_password
  DATABASE_NAME=game_db
  JWT_SECRET=your_jwt_secret
  ```

4. Run the application:

  ```bash
  npm run start
  ```

The API will be available at http://localhost:3000.

### Docker Setup

1. Build the Docker image:

```
  bash
  docker-compose build
```

2. Run the Docker containers:

```
  bash
  docker-compose up
```

The API will be available at http://localhost:3000.

### API Endpoints
POST /scores: Submit a new high score for a player. Requires authentication.

Request Body: { "playerName": "examplePlayer", "score": 100 }
GET /scores/leaderboard: Retrieve the top 10 scores, ranked by score.

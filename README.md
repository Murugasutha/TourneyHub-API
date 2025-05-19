# 🏆 TourneyHub API

**TourneyHub API** is a RESTful backend built with Node.js, Express.js, Sequelize, and SQLite. It manages games and tournaments efficiently by offering CRUD operations, tournament creation, and player registration in a scalable and developer-friendly structure.

---

## 🚀 Features

- 🔹 Add, view, update, and delete games
- 🔹 Create and manage tournaments
- 🔹 Register players to tournaments
- 🔹 Clean and scalable project structure

---

## 📦 Tech Stack

- **Backend Framework:** Node.js + Express.js  
- **Database:** Sequelize ORM with SQLite  
- **Language:** JavaScript  
- **Architecture:** REST API  

---

## 📌 API Endpoints

### 🎮 Games
| Method | Endpoint             | Description            |
|--------|----------------------|------------------------|
| GET    | `/api/games`         | Fetch all games        |
| POST   | `/api/games`         | Add a new game         |
| PUT    | `/api/games/:id`     | Update a game by ID    |
| DELETE | `/api/games/:id`     | Delete a game by ID    |

### 🏆 Tournaments
| Method | Endpoint                   | Description                    |
|--------|----------------------------|--------------------------------|
| GET    | `/api/tournaments`         | Fetch all tournaments          |
| POST   | `/api/tournaments`         | Create a new tournament        |
| GET    | `/api/tournaments/:id`     | Get a tournament by ID         |
| PUT    | `/api/tournaments/:id`     | Update a tournament by ID      |
| DELETE | `/api/tournaments/:id`     | Delete a tournament by ID      |

### 👥 Player Registration
| Method | Endpoint                                | Description                        |
|--------|------------------------------------------|------------------------------------|
| POST   | `/api/tournaments/:id/register`         | Register a player to a tournament  |

---

## 🛠️ Installation

```bash
git clone https://github.com/Murugasutha/TourneyHub-API.git
cd TourneyHub-API
npm install
npm install sequelize sqlite3 cors
npm start
```

## 📬 Contact
For any queries or collaboration, feel free to reach out:
📧 murugasutha18@gmail.com
🔗 [LinkedIn](https://www.linkedin.com/in/muruga-sutha-k/)

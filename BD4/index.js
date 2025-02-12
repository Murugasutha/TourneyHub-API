const express = require('express');
const { resolve } = require('path');
let cors = require('cors');
let sqlite3 = require('sqlite3').verbose();
let { open } = require('sqlite');

const app = express();
let PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

let db;

(async function initializeDB() {
  db = await open({
    filename: './BD4/database.sqlite',
    driver: sqlite3.Database,
  });
  console.log('Database connected successfully');
})();

// 1: Get All Games

async function getAllGames() {
  let query = 'SELECT * FROM games';
  let response = await db.all(query, []);
  return { games: response };
}

app.get('/games', async (req, res) => {
  try {
    let result = await getAllGames();
    if (result.games.length === 0) {
      return res.status(404).json({ message: 'No games found' });
    }
    res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

//2: Get Game by ID

async function getGamesById(id) {
  let query = 'SELECT * FROM games WHERE id = ?';
  let response = await db.all(query, [id]);
  return { games: response };
}

app.get('/games/details/:id', async (req, res) => {
  try {
    let id = req.params.id;
    let result = await getGamesById(id);
    if (result.games.length === 0) {
      return res.status(404).json({ message: 'No games found for id: ' + id });
    }
    res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// 3: Get Games by Genre

async function getGamesByGenre(genre) {
  let query = 'SELECT * FROM games WHERE genre = ?';
  let response = await db.all(query, [genre]);
  return { games: response };
}

app.get('/games/genre/:genre', async (req, res) => {
  try {
    let genre = req.params.genre;
    let result = await getGamesByGenre(genre);
    if (result.games.length === 0) {
      return res
        .status(404)
        .json({ message: 'No games found for genre: ' + genre });
    }
    res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// 4: Get Games by Platform

async function getGamesByPlatform(platform) {
  let query = 'SELECT * FROM games WHERE platform = ?';
  let response = await db.all(query, [platform]);
  return { games: response };
}

app.get('/games/platform/:platform', async (req, res) => {
  try {
    let platform = req.params.platform;
    let result = await getGamesByPlatform(platform);
    if (result.games.length === 0) {
      return res
        .status(404)
        .json({ message: 'No games found for platform: ' + platform });
    }
    res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// 5: Get Games Sorted by Rating

async function sortGamesByRating() {
  let query = 'SELECT * FROM games ORDER BY rating DESC';
  let response = await db.all(query, []);
  return { games: response };
}

app.get('/games/sort-by-rating', async (req, res) => {
  try {
    let result = await sortGamesByRating();
    if (result.games.length === 0) {
      return res.status(404).json({ message: 'No games found' });
    }
    res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// 6: Get All Players

async function getAllPlayers() {
  let query = 'SELECT * FROM players';
  let response = await db.all(query, []);
  return { players: response };
}

app.get('/players', async (req, res) => {
  try {
    let result = await getAllPlayers();
    if (result.players.length === 0) {
      return res.status(404).json({ message: 'No players found' });
    }
    res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// 7: Get Player by ID

async function getPlayersByID(id) {
  let query = 'SELECT * FROM players WHERE id = ?';
  let response = await db.all(query, [id]);
  return { players: response };
}

app.get('/players/details/:id', async (req, res) => {
  try {
    let id = req.params.id;
    let result = await getPlayersByID(id);
    if (result.players.length === 0) {
      return res
        .status(404)
        .json({ message: 'No players found for id: ' + id });
    }
    res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// 8: Get Players by Platform

async function getPlayersByPlatform(platform) {
  let query = 'SELECT * FROM players WHERE platform = ?';
  let response = await db.all(query, [platform]);
  return { players: response };
}

app.get('/players/platform/:platform', async (req, res) => {
  try {
    let platform = req.params.platform;
    let result = await getPlayersByPlatform(platform);
    if (result.players.length === 0) {
      return res
        .status(404)
        .json({ message: 'No players found for platform: ' + platform });
    }
    res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// 9: Get players Sorted by Rating

async function sortPlayersByRating() {
  let query = 'SELECT * FROM players ORDER BY rating DESC';
  let response = await db.all(query, []);
  return { players: response };
}

app.get('/players/sort-by-rating', async (req, res) => {
  try {
    let result = await sortPlayersByRating();
    if (result.players.length === 0) {
      return res.status(404).json({ message: 'No games found' });
    }
    res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// 10: Get All Tournaments

async function getAllTournaments() {
  let query = 'SELECT * FROM tournaments';
  let response = await db.all(query, []);
  return { tournaments: response };
}

app.get('/tournaments', async (req, res) => {
  try {
    let result = await getAllTournaments();
    if (result.tournaments.length === 0) {
      return res.status(404).json({ message: 'No tournaments found' });
    }
    res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// 11: Get Tournament by ID

async function getTournamentsByID(id) {
  let query = 'SELECT * FROM tournaments WHERE id = ?';
  let response = await db.all(query, [id]);
  return { tournaments: response };
}

app.get('/tournaments/details/:id', async (req, res) => {
  try {
    let id = req.params.id;
    let result = await getTournamentsByID(id);
    if (result.tournaments.length === 0) {
      return res
        .status(404)
        .json({ message: 'No tournaments found for id: ' + id });
    }
    res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// 12: Get Tournaments by Game ID

async function getPlayersByGameID(id) {
  let query = 'SELECT * FROM players WHERE gameId = ?';
  let response = await db.all(query, [id]);
  return { tournaments: response };
}

app.get('/tournaments/games/:id', async (req, res) => {
  try {
    let id = req.params.id;
    let result = await getPlayersByGameID(id);
    if (result.tournaments.length === 0) {
      return res
        .status(404)
        .json({ message: 'No tournaments found for game id: ' + id });
    }
    res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// 13: Get Tournaments Sorted by Prize Pool

async function sortTournamentsByPrizePool() {
  let query = 'SELECT * FROM tournaments ORDER BY prizePool DESC';
  let response = await db.all(query, []);
  return { tournaments: response };
}

app.get('/tournaments/sort-by-prize-pool', async (req, res) => {
  try {
    let result = await sortTournamentsByPrizePool();
    if (result.tournaments.length === 0) {
      return res.status(404).json({ message: 'No tournaments found' });
    }
    res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

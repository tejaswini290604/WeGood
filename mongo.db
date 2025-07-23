// .env file loading
const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
require('dotenv').config();
const bodyParser = require('body-parser');
const { Schema } = mongoose;

const app = express();
const port = process.env.PORT || 5000;

// Middleware for parsing request bodies
app.use(bodyParser.json()); // For parsing JSON requests
app.use(express.static('public')); // Serve static HTML files

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected!"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

// User Schema for mood tracking and preferences
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  moodHistory: [{ date: Date, moodScore: Number }],
  preferences: {
    musicGenre: String,
    relaxationVideo: String,
  },
  lastMoodUpdate: Date,
});

const User = mongoose.model('User', userSchema);

// Mood Analysis Function
function analyzeMood(answers) {
  let score = 0;
  const scoringMap = {
    "Excellent – I feel happy, motivated, and emotionally stable.": 2,
    "Good – I have minor ups and downs but generally feel okay.": 1,
    "Fair – I struggle with my emotions sometimes but can manage.": -1,
    "Poor – I often feel overwhelmed, sad, or anxious.": -2,
    "Rarely or never": 2,
    "Sometimes": 1,
    "Often": -1,
    "Almost always": -2,
    "No, not at all": 2,
    "Occasionally, but it doesn’t last long": 1,
    "Yes, frequently but I can still function": -1,
    "Yes, almost every day and it affects my daily life": -2,
  };

  Object.values(answers).forEach(value => {
    score += scoringMap[value] || 0;
  });

  if (score >= 20) return "Happy";
  if (score >= 10) return "Content";
  if (score >= 0) return "Neutral";
  if (score >= -10) return "Stressed";
  return "Depressed";
}

// Spotify API Route
app.post('/get-spotify-data', async (req, res) => {
  const { token } = req.body; // Spotify access token sent from frontend
  try {
    const response = await axios.get('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    res.json(response.data); // Send Spotify data back to frontend
  } catch (error) {
    console.error("Error fetching Spotify data:", error);
    res.status(500).send("Error fetching Spotify data");
  }
});

// OpenAI API Route
app.post('/openai-query', async (req, res) => {
  const { prompt } = req.body; // User's query/prompt sent from frontend
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: 'text-davinci-003', // Or other models you want to use
        prompt: prompt,
        max_tokens: 100,
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    res.json(response.data); // Send OpenAI response to frontend
  } catch (error) {
    console.error("Error querying OpenAI API:", error);
    res.status(500).send("Error querying OpenAI API");
  }
});

// YouTube API Route
app.get('/youtube-search', async (req, res) => {
  const { query } = req.query; // Search query from frontend
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${process.env.YOUTUBE_API_KEY}`
    );
    res.json(response.data); // Send YouTube results to frontend
  } catch (error) {
    console.error("Error fetching YouTube data:", error);
    res.status(500).send("Error fetching YouTube data");
  }
});

// API Route for updating user mood based on quiz responses
app.post('/update-user', async (req, res) => {
  const { username, mood, preferences } = req.body;

  try {
    let user = await User.findOne({ username });

    if (!user) {
      return res.status(404).send("User not found");
    }

    // Update mood history and preferences
    user.moodHistory.push({ date: new Date(), moodScore: mood });
    user.preferences = preferences;

    await user.save();

    res.json({ message: "User updated successfully!" });
  } catch (error) {
    res.status(500).send("Error updating user: " + error.message);
  }
});

// External API interaction for Spotify Playlist and Relaxation Videos
app.get('/mood-music/:mood', async (req, res) => {
  const { mood } = req.params;

  try {
    // Fetch Spotify Playlist
    const playlistMap = {
      Happy: '37i9dQZF1DXdPec7aLTmlC',
      Neutral: '37i9dQZF1DX4WYpdgoIcn6',
      Stressed: '37i9dQZF1DWZqd5JICZI0u',
      Depressed: '37i9dQZF1DX3YSRoSdA634'
    };
    const playlistId = playlistMap[mood] || '37i9dQZF1DX4WYpdgoIcn6';

    const tokenResponse = await axios.post('https://accounts.spotify.com/api/token',
      new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: process.env.SPOTIFY_CLIENT_ID,
        client_secret: process.env.SPOTIFY_CLIENT_SECRET
      }),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );

    const accessToken = tokenResponse.data.access_token;

    const spotifyResponse = await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}`, {
      headers: { Authorization: `Bearer ${accessToken}` }
    });

    // Fetch YouTube Relaxation Video
    const youtubeResponse = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        q: `${mood} relaxation video`,
        key: process.env.YOUTUBE_API_KEY,
      },
    });

    res.status(200).send({
      music: spotifyResponse.data,
      video: youtubeResponse.data.items[0],  // Returning the first video result
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching external APIs');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});





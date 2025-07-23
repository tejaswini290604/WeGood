
# WeGood – Mental Health Support Web App 🧠💙

**WeGood** is a mental health-focused web application designed to help users detect early signs of mental health concerns. 
It collects mood and behavioral data via a short questionnaire based on research and guidance from psychology professionals. 
Based on the analysis, it provides users with personalized recommendations and an action plan to support emotional well-being.

---

## 💡 Features

- 🧠 **Early Detection**: Identifies early signs of mental health issues through targeted questions.
- 📊 **Mood Analysis**: Analyzes user responses using logic based on psychological research.
- 📋 **Personalized Recommendations**: Offers tailored plans and suggestions based on analysis.
- 🎧📺 **Media Suggestions**: Optionally integrates Spotify and YouTube to suggest music/videos for mood enhancement.
- 🖥️ **Simple UI**: Clean, accessible, and responsive front-end for users of all backgrounds.

---

## 🗂️ Project Structure

```
wegood-main/
├── WeGood.html           # Main user interface (UI)
├── WeGood.js             # Handles UI logic and form submission
├── uipages.js            # Additional frontend scripts
├── server.js             # Node.js backend server
├── spotify.js            # Spotify integration logic
├── spotifyapi.js         # API interactions with Spotify
├── youtube.api           # Handles YouTube content suggestions
├── mongo.db              # MongoDB-related file or dump
├── userdata.jason        # Stores user responses (should be .json)
└── README.md             # Project documentation
```

---

## ⚙️ How to Run

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/yourusername/wegood.git
   cd wegood-main
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   ```

3. **Start the Server**  
   ```bash
   node server.js
   ```

4. **Open the App**  
   Open `WeGood.html` in your browser or navigate to the server-hosted URL.

---

## 🔑 Requirements

- Node.js (v14+ recommended)
- MongoDB (for storing user data)
- Spotify & YouTube API credentials (if using media features)

---

## 📌 Notes

- Change `userdata.jason` to `userdata.json` for proper JSON handling.
- Ensure all API keys are stored securely (e.g., in environment variables).
- This project is for **educational and awareness** purposes and not a substitute for professional medical advice.

---

## 📃 License

This project is licensed under the **MIT License**.

---

> “Your mental health is a priority. Your happiness is an essential. Your self-care is a necessity.” – Unknown

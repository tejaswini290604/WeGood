// app.js
// Handle credentials form submission
document.getElementById("credentials-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent the form from reloading the page
    const name = document.getElementById("name").value; // Get the name input value
    document.getElementById("user-name").innerText = name; // Display the name in the UI
    alert("Credentials saved! Welcome, " + name); // Show a welcome alert
});

// Handle quiz form submission
document.getElementById("quiz-form").addEventListener("submit", async function(e) {
    e.preventDefault(); // Prevent form reload

    // Collect quiz answers
    const quizAnswers = {
        q1: document.querySelector('input[name="q1"]:checked').value,
        q2: document.querySelector('input[name="q2"]:checked').value,
        // Collect other answers similarly
    };

    try {
        // Send quiz answers to the backend for mood analysis
        const response = await axios.post('http://localhost:5000/analyze-mood', quizAnswers);

        const mood = response.data.mood; // Extract mood from the response
        alert("Your diagnosis: " + mood); // Display diagnosis

        // Call the Spotify API to get mood-based music recommendations
        getMoodPlaylist(mood).then(playlist => {
            console.log('Mood Playlist:', playlist);
            // Display the playlist in the UI (you can update the UI here)
        }).catch(error => {
            console.error('Error fetching playlist:', error);
        });

    } catch (error) {
        console.error("Error analyzing mood:", error);
    }
});

// Analyze mood based on quiz answers
function analyzeMood(answers) {
    // Simulate mood analysis based on answers
    let mood = "Happy"; // Example, you will analyze based on answers

    // Display diagnosis
    alert("Your diagnosis: " + mood);

    // Recommend services based on mood
    recommendServices(mood);
}

// Recommend services based on mood
function recommendServices(mood) {
    const servicesContainer = document.getElementById("services");
    if (mood === "Sad") {
        servicesContainer.innerHTML += "<p>We recommend trying Breathing Exercises for Stress Relief.</p>";
    } else if (mood === "Anxious") {
        servicesContainer.innerHTML += "<p>We recommend using Affirmations for relaxation.</p>";
    }
}

// Fetch a YouTube video for breathing exercises
function getBreathingExercise() {
    const youtubeURL = "https://www.youtube.com/embed/your-breathing-exercise-video";
    window.open(youtubeURL, "_blank");
}

// Send a message (this can be used for chat functionality)
function sendMessage() {
    const userMessage = document.getElementById("chat-input").value;
    if (userMessage) {
        // Call OpenAI API or a simple response mechanism
        const response = "Totoro: " + "This is a friendly response from Totoro!";
        document.getElementById("chat-output").innerText = response;
    }
}

// Spotify API integration (example of how you might use it)
async function getMoodPlaylist(mood) {
    try {
        // Mock response for mood-based playlist
        const playlists = {
            happy: ["Happy Song 1", "Happy Song 2", "Happy Song 3"],
            sad: ["Sad Song 1", "Sad Song 2", "Sad Song 3"],
            anxious: ["Calm Song 1", "Calm Song 2", "Calm Song 3"],
        };

        return playlists[mood.toLowerCase()] || ["Default Song"];
    } catch (error) {
        console.error("Error fetching playlist:", error);
        return [];
    }
}
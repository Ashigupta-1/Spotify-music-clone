const songs = document.querySelectorAll("#songs li");
const audio = document.getElementById("audio");
const playButton = document.getElementById("play");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentSongIndex = 0;
let isPlaying = false;

// Load selected song
function loadSong(index) {
    const song = songs[index].getAttribute("data-src");
    audio.src = song;
}

// Play or Pause Song
function playPauseSong() {
    if (isPlaying) {
        audio.pause();
        playButton.textContent = "Play";
    } else {
        audio.play();
        playButton.textContent = "Pause";
    }
    isPlaying = !isPlaying;
}

// Next Song
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
    playButton.textContent = "Pause";
}

// Previous Song
function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
    playButton.textContent = "Pause";
}

// Event Listeners
playButton.addEventListener("click", playPauseSong);
nextButton.addEventListener("click", nextSong);
prevButton.addEventListener("click", prevSong);
songs.forEach((song, index) => {
    song.addEventListener("click", () => {
        currentSongIndex = index;
        loadSong(index);
        audio.play();
        playButton.textContent = "Pause";
    });
});

// Initialize first song
loadSong(currentSongIndex);

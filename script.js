// const audioPlayer = document.getElementById('audio-player');
// const playPauseBtn = document.getElementById('play-pause-btn');
// const prevBtn = document.getElementById('prev-btn');
// const nextBtn = document.getElementById('next-btn');
// const repeatBtn = document.getElementById('repeat-btn');
// const sleepTimerInput = document.getElementById('sleep-timer');
// const setTimerBtn = document.getElementById('set-timer-btn');
// const playlist = document.querySelector('.playlist');

// let currentSongIndex = 0;
// let isPlaying = false;

// // Replace with your own list of songs and their sources
// const songs = [
//     { name: 'Song 1', source: 'path/to/song1.mp3' },
//     { name: 'Song 2', source: 'path/to/song2.mp3' },
//     // Add more songs here...
// ];

// function loadSong(index) {
//     const { name, source } = songs[index];
//     audioPlayer.src = source;
//     audioPlayer.load();
//     audioPlayer.play();
//     document.title = name;
// }

// function togglePlayPause() {
//     if (isPlaying) {
//         audioPlayer.pause();
//     } else {
//         audioPlayer.play();
//     }
// }

// function playNextSong() {
//     currentSongIndex = (currentSongIndex + 1) % songs.length;
//     loadSong(currentSongIndex);
// }

// function playPrevSong() {
//     currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
//     loadSong(currentSongIndex);
// }

// function toggleRepeat() {
//     audioPlayer.loop = !audioPlayer.loop;
// }

// function setSleepTimer() {
//     const sleepDuration = sleepTimerInput.value;
//     setTimeout(() => {
//         audioPlayer.pause();
//     }, sleepDuration * 1000);
// }

// function createPlaylist() {
//     for (let i = 0; i < songs.length; i++) {
//         const song = songs[i];
//         const listItem = document.createElement('li');
//         listItem.textContent = song.name;
//         listItem.addEventListener('click', () => {
//             currentSongIndex = i;
//             loadSong(currentSongIndex);
//         });
//         playlist.appendChild(listItem);
//     }
// }

// playPauseBtn.addEventListener('click', () => {
//     isPlaying = !isPlaying;
//     togglePlayPause();
// });

// prevBtn.addEventListener('click', playPrevSong);
// nextBtn.addEventListener('click', playNextSong);
// repeatBtn.addEventListener('click', toggleRepeat);
// setTimerBtn.addEventListener('click', setSleepTimer);

// audioPlayer.addEventListener('play', () => {
//     isPlaying = true;
//     playPauseBtn.textContent = 'Pause';
// });

// audioPlayer.addEventListener('pause', () => {
//     isPlaying = false;
//     playPauseBtn.textContent = 'Play';
// });

// createPlaylist();

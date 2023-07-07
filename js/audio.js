const controlsButton = document.getElementById('controlsButton');
const controlsMenu = document.getElementById('controlsMenu');
const audio = document.getElementById('myAudio');
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');
const volumeControl = document.getElementById('volumeControl');
const playPauseButton = document.getElementById("playPauseButton");


playPauseButton.addEventListener("click", function() {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });
  
  audio.addEventListener("play", function() {
    playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
  });
  
  audio.addEventListener("pause", function() {
    playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
  });

volumeControl.addEventListener('input', function() {
  audio.volume = this.value;
});

controlsButton.addEventListener('click', function() {
  controlsMenu.classList.toggle('show');
});

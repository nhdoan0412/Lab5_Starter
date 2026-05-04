// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImg = document.querySelector('#expose > img');
  const volumeSlider = document.getElementById('volume');
  const volumeImg = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');
  const audio = document.querySelector('audio');

  // Set initial audio volume to match slider default (50)
  audio.volume = volumeSlider.value / 100;

  // Horn selection
  hornSelect.addEventListener('change', () => {
    const horn = hornSelect.value;
    hornImg.src = `assets/images/${horn}.svg`;
    hornImg.alt = horn;
    audio.src = `assets/audio/${horn}.mp3`;
  });

  // Volume slider
  volumeSlider.addEventListener('input', () => {
    const vol = parseInt(volumeSlider.value);
    audio.volume = vol / 100;

    let level;
    if (vol === 0) {
      level = 0;
    } else if (vol < 33) {
      level = 1;
    } else if (vol < 67) {
      level = 2;
    } else {
      level = 3;
    }

    volumeImg.src = `assets/icons/volume-level-${level}.svg`;
    volumeImg.alt = `Volume level ${level}`;
  });

  // Play button: play audio and fire confetti if party-horn is selected
  playButton.addEventListener('click', () => {
    if (hornSelect.value === 'select') return;

    audio.play();

    if (hornSelect.value === 'party-horn') {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  });
}

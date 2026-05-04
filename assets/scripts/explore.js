// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;

  const textArea = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('button');
  const face = document.querySelector('img');

  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();

    voiceSelect.innerHTML = '';

    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Select Voice:';
    defaultOption.disabled = true;
    defaultOption.selected = true;
    voiceSelect.appendChild(defaultOption);

    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  populateVoiceList();

  synth.addEventListener('voiceschanged', populateVoiceList);

  setTimeout(populateVoiceList, 500);

  talkButton.addEventListener('click', () => {
    const text = textArea.value.trim();

    if (text === '') {
      return;
    }

    if (voices.length === 0) {
      populateVoiceList();
    }

    synth.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    const selectedVoiceIndex = voiceSelect.value;

    if (selectedVoiceIndex !== '') {
      utterance.voice = voices[selectedVoiceIndex];
    }

    utterance.onstart = () => {
      face.src = 'assets/images/smiling-open.png';
    };

    utterance.onend = () => {
      face.src = 'assets/images/smiling.png';
    };

    utterance.onerror = () => {
      face.src = 'assets/images/smiling.png';
    };

    synth.speak(utterance);
  });
}
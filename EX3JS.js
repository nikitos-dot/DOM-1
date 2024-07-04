'use strict';
function toggleButtonOff(elemId) {
  const elem = document.getElementById(elemId);
  elem.innerHTML = 'Clicked';
  elem.className = 'nonEvents';
}
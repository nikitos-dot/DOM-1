'use strict';
function toggleVissibility(elemId) {
  const elem = document.getElementById(elemId);
  if (elem.className === 'visible')
    elem.className = 'hidden';
  else
    elem.className = 'visible';

}
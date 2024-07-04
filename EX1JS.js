'use strict';

function addClass() {
  const input = document.getElementById('classInput');
  const para = document.getElementById('text');
  para.className = input.value;

}
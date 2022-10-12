function sound() {
  let beep = new Audio('beep.wav');
  beep.play();
}

.button1.onclick = sound();

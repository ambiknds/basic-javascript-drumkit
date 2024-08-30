function playSound(e) {
  let code;
  if (e.keyCode) {
    code = e.keyCode;
  } else {
    code = this.dataset.key;
  }

  const audio = this.document.querySelector(`audio[data-key="${code}"]`)
  const key = this.document.querySelector(`.key[data-key="${code}"]`)
  if (!audio) return; //stop function if no audio
  audio.currentTime = 0 //rewind to the start
  audio.play();
  key.classList.add('playing')
  console.log(e)
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}
const keys = document.querySelectorAll(".key")
keys.forEach(key => key.addEventListener("transitionend", removeTransition))
window.addEventListener("keydown", playSound)
window.addEventListener("click", playSound)

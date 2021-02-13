function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"`)
    if(!audio) return; //stops the function from running
    audio.currentTime = 0; //rewinds to the starting
    audio.play()
    key.classList.add("playing");
    }
function removeTransiition(e){
    if(e.propertyName !== 'transform') return; //skip if not transformed
    this.classList.remove("playing")
    }
  
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend', removeTransiition));
  
window.addEventListener('keydown', playSound);

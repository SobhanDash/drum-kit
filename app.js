function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    const key = document.querySelector(`.key[data-key="${e.code}"`)
    console.log(audio)
    console.log(key)
    if(!audio) return; //stops the function from running
    audio.currentTime = 0; //rewinds to the starting
    audio.play()
    key.classList.add("playing");
    }
function removeTransition(e){
    if(e.propertyName !== 'transform') return; //skip if not transformed
    this.classList.remove("playing")
    }
  
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  
window.addEventListener('keydown', playSound);

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.keys[data-key="${e.keyCode}"`)
    console.log(audio)
    console.log(key)
    
    if(!audio) return; //stops the function from running

    audio.currentTime = 0; //rewinds to the starting
    audio.play()
    key.classList.add("playing");
    }
function removeTransition(e){
    if(e.propertyName !== 'transform') return; //skip if not transformed
    console.log(this.classList)
    this.classList.remove("playing")
    console.log("running")
    }
  
const keyss = document.querySelectorAll(".keys");
keyss.forEach(key => key.addEventListener('transitionend', removeTransition));
  
window.addEventListener('keydown', playSound);

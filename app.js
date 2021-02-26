function playSound(e){
    console.log(e)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.keys[data-key="${e.keyCode}"`);
    // console.log(audio)
    // console.log(key)
    
    if(!audio) return; //stops the function from running

    audio.currentTime = 0; //rewinds to the starting
    audio.play()
    key.classList.add("playing");
    setTimeout(function() {
        key.classList.toggle('playing');
    }, 200)
    }
//

function btnClickSound(e){
    // console.log(e)
    // console.log(e.srcElement.innerText)
    const code = e.srcElement.innerText;
    //console.log(code)
    let a = 0
    
    switch(code){
        case "A" :
            a = 65;
            break;
        case "S" :
            a = 83;
            break;
        case "D" :
            a = 68;
            break;
        case "F" :
            a = 70;
            break;
        case "G" :
            a = 71;
            break;
        case "H" :
            a = 72;
            break;
        case "J" :
            a = 74;
            break;
        case "K" :
            a = 75;
            break;
        case "L" :
            a = 76;
            break;                
    }

    const audio = document.querySelector(`audio[data-key="${a}"]`);
    const key = document.querySelector(`.keys[data-key="${a}"`); 
    console.log(key)
    
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
    setTimeout(function() {
        key.classList.toggle('playing');
    }, 200)

}

const btnCLick = document.querySelectorAll('.keys')
btnCLick.forEach(btn => btn.addEventListener('click', btnClickSound))

window.addEventListener('keydown', playSound);


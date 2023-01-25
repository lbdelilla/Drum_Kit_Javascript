
 const secondHand = document.querySelector('.second-hand')
 const minHand = document.querySelector('.min-hand')
 const hourHand = document.querySelector('.hour-hand')
 const audio = document.querySelector(`audio[data-key="clock"]`)
 const btn = document.querySelector('button')

 const setDate = () => {
   
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360)+ 90; //add´s up de 90 degrees set in transform
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;


    const mins = now.getMinutes();
    const minDegrees = ((mins / 60) * 360)+ 90;
    minHand.style.transform = `rotate(${minDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    
 }


 setInterval(setDate, 1000);

 setDate();

 btn.addEventListener("click", function() {

    if (audio.remove) {
        audio.play();
        btn.innerHTML= `<i class="fa-solid fa-volume-high"></i>` 
    }
    else {
        audio.remove()
    };
    btn.innerHTML= `<i class="fa-solid fa-volume-off"></i>`
    
});



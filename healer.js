const $slide = document.getElementById('slide')
    $slide.addEventListener('animationend', (event)=>{
        console.log(event)
        // if(event.animationName === background){
        //     $slide.style.animationName="background1"
        //     $slide.style.animationDuration=1.5
        //     $slide.style.animationDelay=5
        // }
    })
let counter = 0;

function handleEvents(){
    const arrows = document.querySelectorAll('.slider__circle');
    arrows.forEach(arrow => arrow.addEventListener("click", event => {
        // console.log(event.currentTarget.classList.contains('slider__circle--right'))
        // console.log(event.currentTarget)
        if(event.currentTarget.classList.contains('slider__circle--right')){
            changeSlide()
        }
        else{
            changeSlide(1)
        }
    }))
}
function changeSlide(direction=-1){
    const sliderImages = document.querySelectorAll('.slider__img');
    counter = counter - direction
    console.log(counter)
    if (counter < sliderImages.length){
        sliderImages.forEach(image =>
          image.style.transform = `translateX(${direction *counter*100}%)`)
    } 
    else if(counter < 0 && counter > -sliderImages.length){
        sliderImages.forEach(image =>
            image.style.transform = `translateX(-${direction *(sliderImages.length - 1)*100}%)`);
            counter = -(sliderImages.length - 1);
            console.log(counter)
    }
    else{
        sliderImages.forEach(image => image.style.transform = 'translateX(0)')
        counter = 0
    }
    
}

handleEvents()



// function addClass(image) {
//     image.classList.add('jakasklasa')
// }
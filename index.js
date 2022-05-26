const slider = document.querySelectorAll('.container');
const nxtBtn = document.querySelectorAll('.nxt-btn');
const preBtn = document.querySelectorAll('.pre-btn');

slider.forEach((item, i) => {
    let sliderDimensions = item.getBoundingClientRect();
    let sliderWidth = sliderDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += sliderWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= sliderWidth;
    })
})
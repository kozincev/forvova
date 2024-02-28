let offset = 0

let next = document.querySelector('#next')
let prev = document.querySelector('#prev')

let prev2 = document.querySelector('#prev-2')
let next2 = document.querySelector('#next-2')

let prev3 = document.querySelector('#prev-3')
let next3 = document.querySelector('#next-3')

const sliderLine = document.querySelector('.slider')
const sliderLine2 = document.querySelector('.main-3-img')
const sliderLine3 = document.querySelector('.main-5-img')

next.addEventListener('click', function(){
    offset = offset + 432
    sliderLine.style.left = offset + 'px'
})
prev.addEventListener('click', function(){
    offset = offset - 432
    sliderLine.style.left = offset + 'px'
})

next2.addEventListener('click', function(){
    offset = offset + 634.85
    sliderLine2.style.left = offset + 'px'
})
prev2.addEventListener('click', function(){
    offset = offset - 634.85
    sliderLine2.style.left = offset + 'px'
})

next3.addEventListener('click', function(){
    offset = offset + 636
    sliderLine3.style.left = offset + 'px'
})
prev3.addEventListener('click', function(){
    offset = offset - 636
    sliderLine3.style.left = offset + 'px'
})


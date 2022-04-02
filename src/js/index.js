// CARDS
let count2 = 5
let counte21 = 1
function counte2(){
    count2 = count2 - 1;
    counte21 = count2 + 1;
    if (count2 <= 0){
        count2 = 5;       
    };
};
let count = 1
let counte1 = 1
function counte(){
    count++;
    counte1 = count - 1;
    if (count > 5){
        count = 1;
    }
};
function baixo(){
    counte2();
    document.querySelector('.aberto').classList.remove('aberto')
    document.querySelector('.c-'+count2).classList.add('aberto')
    document.querySelector('.c-'+counte21).classList.remove('aberto')
}
function cima(){
    counte();
    document.querySelector('.aberto').classList.remove('aberto')
    document.querySelector('.c-'+count).classList.add('aberto')
    document.querySelector('.c-'+counte1).classList.remove('aberto')
}
// POPUP
const popup1 = document.querySelector('.popup-c-1')
const cafe1 = document.querySelector('.c-1')
cafe1.addEventListener( 'click', () =>{
    popup.style.display = 'block'
    popup1.style.display = 'block'
})
const popup2 = document.querySelector('.popup-c-2')
const cafe2 = document.querySelector('.c-2')
cafe2.addEventListener( 'click', () =>{
    popup.style.display = 'block'
    popup2.style.display = 'block'
})
const popup3 = document.querySelector('.popup-c-3')
const cafe3 = document.querySelector('.c-3')
cafe3.addEventListener( 'click', () =>{
    popup.style.display = 'block'
    popup3.style.display = 'block'
})
const popup4 = document.querySelector('.popup-c-4')
const cafe4 = document.querySelector('.c-4')
cafe4.addEventListener( 'click', () =>{
    popup.style.display = 'block'
    popup4.style.display = 'block'
})
const popup5 = document.querySelector('.popup-c-5')
const cafe5 = document.querySelector('.c-5')
cafe5.addEventListener( 'click', () =>{
    popup.style.display = 'block'
    popup5.style.display = 'block'
})
const popup = document.querySelector('.popup-box')
popup.addEventListener( 'click', event =>{
    const classClick = event.target.classList[0]
    const classNames = ['popup-box', 'popup-close', 'popup-button']
    const close = classNames.some( classNames => classNames === classClick)
    
    if (close) {
        popup.style.display = 'none'
        popup1.style.display = 'none'
        popup2.style.display = 'none'
        popup3.style.display = 'none'
        popup4.style.display = 'none'
        popup5.style.display = 'none'
    }
})
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
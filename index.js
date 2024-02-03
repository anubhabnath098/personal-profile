function sendemail(){
    window.open('mailto:iib2023019@iiita.ac.in');
}
const btn=document.querySelectorAll(".get-in-touch");
btn.forEach(button => {
    button.addEventListener("click", sendemail)
});
function about(){
    window.open('./extrafiles/ANUBHAB.pdf');
}
const btn2=document.querySelectorAll(".learn-more");
btn2.forEach(button => {
    button.addEventListener("click",about);
});
function hobby1(){
    window.open('https://www.businessinsider.com/guides/learning/best-selling-books-of-all-time?IR=T');
}
function hobby2(){
    window.open('https://store.steampowered.com/');
}
function hobby3(){
    window.open('https://www.imdb.com/list/ls055592025/');
}

document.querySelector(".hobby1").addEventListener("click",hobby1);
document.querySelector(".hobby2").addEventListener("click",hobby2);
document.querySelector(".hobby3").addEventListener("click",hobby3);

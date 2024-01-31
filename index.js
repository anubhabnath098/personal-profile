function sendemail(){
    window.open('mailto:iib2023019@iiita.ac.in');
}
const btn=document.querySelectorAll(".get-in-touch");
btn.forEach(button => {
    button.addEventListener("click", sendemail)
});
function about(){
    window.open('./public/about.html');
}
const btn2=document.querySelectorAll(".learn-more");
btn2.forEach(button => {
    button.addEventListener("click",about);
});

function sendemail(){
    window.open('mailto:iib2023019@iiita.ac.in');
}
const btn=document.querySelectorAll(".get-in-touch");
btn.forEach(button => {
    button.addEventListener("click", sendemail)
});
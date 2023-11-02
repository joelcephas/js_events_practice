let men = document.querySelector(".men")
let con = document.querySelector(".con")
let ele = document.querySelector(".element")
window.addEventListener('mousemove', (evt) => {
    // if (window.movementX < 2) {
    //     men.style.left = "0px"
    //     con.style.left = "500px"
    // } else {
    //     men.style.left = "-500px"
    //     con.style.left = "0px"
    // }
    // console.log(evt);
})
let mm = document.querySelector(".mm")
mm.addEventListener('click', function () {
    ele.classList.toggle("elem")
    ele.style = 'transition:ease-in-out 1s ease';
    // console.log("yo");
})
// window.addEventListener('mousemove', (e) => {
//     console.log(e);
// })
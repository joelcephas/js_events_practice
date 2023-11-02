//_______________________________________________________________________
// js event

//click event
const quest = document.querySelector(".click-event")
// console.log(quest);
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
// console.log(btn1);
// console.log(btn2);
const ans = document.querySelector("p")

// quest.addEventListener('click', () => {
//     quest.classList.toggle("essai")
//     // console.log("beleave !!!");
// })

btn1.addEventListener('click', () => {
    btn1.classList.toggle("essai1")
    //btn1.classList.add(): pour seulement ajouter une class
    ans.style.visibility = "visible"
    ans.style.backgroundColor = "red"
    console.log("clicked");
})

btn2.addEventListener('click', () => {
    btn2.classList.toggle("essai2")
    ans.style.visibility = "visible"
    ans.style.backgroundColor = "green"
    console.log("push");
})

//_________________________________________________________________________
// Mouse event

const mousemove = document.querySelector(".mouseMove");
// console.log(mousemove);
window.addEventListener('mousemove', (e) => {
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
    // console.log("Youpi !!!", e);
})

window.addEventListener('mousedown', () => {
    mousemove.style.transform = "scale(2) translate(-25%, -25%)";
    mousemove.style.border = "2px solid blue";
    // console.log("assia");
})
window.addEventListener('mouseup', () => {
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
    mousemove.style.border = "2px solid purple";
    // console.log("assia");
})
quest.addEventListener('mouseenter', () => {
    quest.style.background = "rgba(0,0,0,0.6)"
    // console.log("coucou !!");
})
quest.addEventListener('mouseout', () => {
    quest.style.background = "black"
    // console.log("coucou !!");
})

//_______________________________________________________________________________
// keypress event

const kp = document.querySelector(".keypress")
const key = document.getElementById("key")

document.addEventListener('keypress', (e) => {
    key.textContent = e.key
    // console.log("pipi !!!", e.key);
    if (e.key === "d") {
        kp.style.background = "pink"
    }
    // ring();
})
// To add a sound on keys
// const ring = () => {
//     const audio = new Audio();
//     audio.scr = ""// give it url
//     audio.play();
// }
//__________________________________________________________________________________
// scrolling event

const nav = document.querySelector("nav")
window.addEventListener('scroll', () => {
    //console.log("youpi !!", window.scrollY);

    if (window.scrollY > 100) {
        nav.style.top = "0px"
    } else {
        nav.style.top = "-50px"
    }
})
//______________________________________________________________________________

// form event

const input = document.querySelector('input[type="text"]')
const select = document.querySelector('select')
const form = document.querySelector('form')
let get = ""
let language = ""
// console.log(input);
//console.log(form);
input.addEventListener('input', (e) => {
    // console.log("passe", e.target.value);
    get = e.target.value
    //console.log(get);
})
select.addEventListener('input', (e) => {
    // console.log(e.target.value)
    language = e.target.value;
})
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log("yes")
    if (cgv.checked) {
        document.querySelector("form > div").innerHTML = `
        <h3>Nom : ${get}</h3>
        <h4>Langage prefere : ${language}</h4>
        `
    } else {
        alert("Veuillez cocher le CGV")
    }
})
//__________________________________________________________________________

// Load event

window.addEventListener('load', () => {
    console.log("Document charge !!");
})
//____________________________________________________________________________
// Foreach
const boxes = document.querySelectorAll(".box")
// console.log(boxes);
boxes.forEach((box) => {
    // box.addEventListener('click', (e) => {
    //     // console.log(e.target);
    // })
    box.addEventListener('click', (e) => {
        e.target.style.transform = "scale(0.8)";
    })
})

//______________________________________________________________________________________
// stop Propagation
quest.addEventListener('click', (e) => {
    e.stopPropagation()// pour qu'un evenement n'ecrase pas un autre
})
//------------------------------------------------------------------------
//setProperty
window.addEventListener('mousemove', (e) => {
    //console.log(e);
    nav.style.setProperty("--x", e.layerX + "px")
    nav.style.setProperty("--y", e.layerY + "px")
})

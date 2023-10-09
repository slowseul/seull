let myPlay = document.querySelector(".facewrapper1");
let myPlay2 = document.querySelector(".facewrapper2");
let myPlay3 = document.querySelector(".facewrapper3");
let myBackground = document.querySelector(".background");
let myButton = document.querySelector(".cls2");
let myQuestion = document.querySelector(".cls3");
let myQuestionInfo = document.querySelector(".questionMark");

function playAni() {
    myPlay.style.display = "inline-block";

myPlay.addEventListener("animationend", () => {
 myPlay2.style.display = "inline-block";
   })
myPlay2.addEventListener("animationend", () => {
    myPlay3.style.display = "inline-block";
   })
}
window.addEventListener("load", () => {
    playAni();
})

// function playAni2(){
//     myButton1.setAttribute("id", "playButton")
// }
myButton.addEventListener("click", () => {
    if(myButton.style.transform === 'scale(1)' || myButton.style.transform === ''){
        myBackground.style.opacity = "1"
    }
    else {
        myBackground.style.opacity = "0.2"
    }
})

myQuestion.addEventListener("click", () => {
    if(myQuestion.style.transform === 'scale(1)' || myQuestion.style.transform === ''){
        myQuestionInfo.style.display = "inline-block"
    }
    else {
        myQuestionInfo.style.display = "none"
    }
})

const myIcon = document.querySelectorAll("#Layer1");
const mySpeaker = document.querySelector(".cls1")
const mySpeakerWrapper = document.querySelectorAll(".bottom-wrapper-right-item1");
let myAudio = document.getElementById("myAudio")
       
      myIcon.forEach((icon) => {
        icon.addEventListener("click", (e) => {
        if(icon.style.transform === 'scale(1)' || icon.style.transform === ''){
        icon.style.fill = '#00b0b6';
        icon.style.stroke = '#00b0b6';
        icon.style.transform = 'scale(1.05)';
    }
    else {
   
        icon.style.fill = '#ffffff';
        icon.style.stroke = '#ffffff';
        icon.style.transform = 'scale(1)'; 
     }
    });
  });

  mySpeaker.addEventListener("click", () => {
    if(mySpeaker.style.transform === 'scale(1)' || mySpeaker.style.transform === ''){
        myAudio.pause();
    }
    else{
        myAudio.play();
    }
  });

  

const headerleft = document.getElementById("header-item-left");
const headerleftsub = document.querySelector(".header-subitem-left");
const subitemWrapper = document.querySelector(".subitem-typo-wrapper")
headerleft.addEventListener("click", () => {
    if(headerleftsub.style.display ==='none' || headerleftsub.style.display === ''){
        headerleftsub.style.display = 'inline-block';
    }
    else{
        headerleftsub.style.display = 'none';
        subitemWrapper.style.display = 'none';
    }
    });

    headerleftsub.addEventListener("click", () => {
    if(subitemWrapper.style.display === 'none' || subitemWrapper.style.display === ''){
        subitemWrapper.style.display = 'flex';
    }
    else{
        subitemWrapper.style.display = 'none';
    }
    });

// firstitem.addEventListener("click", (e) => {
//     headerlefttypo.forEach((typo) => {
//      if(typo.style.display === 'none' || typo.style.display === ''){
//         typo.style.display='inline-block';
//      }
//      else{
//         typo.style.display='none';
//      }
//     })
// })

const seconditem = document.getElementById("subitem-info");
const headerleftinfo = document.getElementById("header-subitem-info");

seconditem.addEventListener("click", () => {
    if(headerleftinfo.style.display === 'none' || headerleftinfo.style.display === ''){
        headerleftinfo.style.display = 'inline-block'
    }
    else{
        headerleftinfo.style.display = 'none'
    }
});

console.log(window.scrollY)


const typeChange1 = document.querySelector(".bottom-wrapper1")
const typeChange2 = document.querySelector(".bottom-wrapper2")
const typeChange3 = document.getElementById("header-item-left")
const typeChange4 = document.querySelector(".header-item-right")

window.addEventListener("scroll", () => {
    if(window.scrollY>2000) {
        typeChange1.style.color = "rgb(255,255,255)"
        typeChange2.style.color = "rgb(255,255,255)"
        typeChange3.style.color = "rgb(255,255,255)"
        typeChange4.style.color = "rgb(255,255,255)"
    }
    else {
        typeChange1.style.color = "#6a65f6"
        typeChange2.style.color = "#6a65f6"
        typeChange3.style.color = "#008cff"
        typeChange4.style.color = "#001ddc"
    }
})

typeChange1.addEventListener("animationend",() => {
    typeChange1.style.letterSpacing = "-20px"
})
typeChange2.addEventListener("animationend",() => {
    typeChange2.style.letterSpacing = "-20px"
})

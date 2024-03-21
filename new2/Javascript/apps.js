import {infoDiv} from "./info.js"
import {imgDiv, imgDiv1, imgDiv2, imgDiv3} from "./img.js"
import { cardDiv } from "./card.js"



let sectionOne = document.getElementById("sectionOne")
let sectionTwo = document.getElementById("sectionTwo")



const dataPne = {
    title : "Huge Ideas, but small action",
    para : "Having plans  on  mind but dont know how to do?",                   
    button: "Contact Us",
    image: "manthinking.png"
}

const  {title, para, button, image } = dataPne




const dataTwo = {
    image2: "businessCard3.png",
    image3: "businessCard1.png",
    image4: "businessCard2.png",

    betext : "Mark Dionis Kho",
    para1 : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quasi velit odit optio inventore ut quis, reprehenderit unde quaerat molestiae doloribus corporis nesciunt laboriosam cupiditate sit tempora! Odit, vel iste!",
    button1: "Contact Us",

    title2 : "CreateBox",
    para2 : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quasi velit odit optio inventore ut quis, reprehenderit unde quaerat molestiae doloribus corporis nesciunt laboriosam cupiditate sit tempora! Odit, vel iste!",
    button2: "Contact Us",

    title3 : "Graplution",
    para3 : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quasi velit odit optio inventore ut quis, reprehenderit unde quaerat molestiae doloribus corporis nesciunt laboriosam cupiditate sit tempora! Odit, vel iste!",
    button3: "Contact Us",
   
 
}

const  {image2, image3, image4, betext, para1, button1, title2, para2, button2, title3, para3,button3 } = dataTwo


sectionOne.append(infoDiv(title, para,  button))
sectionOne.append(imgDiv(image))


sectionTwo.append(cardDiv(image2,betext,para1,button1, image3,title2,para2,button2, image4,title3,para3,button3))

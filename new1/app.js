import {info} from "./info.js"
import {imagess} from "./img.js"

let container = document.getElementById("container")

const data = {
title :"Mark Dionis Paguia Kho",
para: "dynamic individual with a passion for innovation and creativity. With a keen eye for detail and a drive for excellence, Mark continually seeks new opportunities to grow and make a positive impact. His diverse skill set and unwavering dedication set him apart, allowing him to thrive in various endeavors.",
images:"mark.jpg",
buttonOne:"Contact",
buttonTwo:"Learn more"
}

const{title, para, images,buttonOne, buttonTwo} = data
container.append(info(title, para,buttonOne, buttonTwo))
container.append(imagess(images))
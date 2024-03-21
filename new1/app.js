import {info} from "./info.js"
import {imagess} from "./img.js"

let container = document.getElementById("container")

const data = {
title :"Mark's Property of Things",
para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsam natus pariatur, totam reprehenderit nemo quas ducimus, vel possimus inventore dolorem.",
images:"mark.jpg",
buttonOne:"About me",
buttonTwo:"Learn more"
}

const{title, para, images,buttonOne, buttonTwo} = data
container.append(info(title, para,buttonOne, buttonTwo))
container.append(imagess(images))
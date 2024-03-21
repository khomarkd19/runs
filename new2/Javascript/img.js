const imgDiv = (image) => {
    let div = document.createElement("div")
    div.className = "img1"
    div.innerHTML = `<img class="pic1" src="./images/${image}">`
    return div  
}
export{ imgDiv }


const imgDiv1 = (image2) => {
    let div1 = document.createElement("div")
    div1.className = "img2"
    div1.innerHTML = `<img class="pic2" src="./images/${image2}">`
    return div1   
}
export{ imgDiv1 }


const imgDiv2 = (image3) => {
    let div2 = document.createElement("div")
    div2.className = "img3"
    div1.innerHTML = `<img class="pic3" src="./images/${image3}">`
    return div2
}
export{ imgDiv2 }

const imgDiv3 = (image4) => {
    let div3 = document.createElement("div")
    div3.className = "img4"
    div1.innerHTML = `<img class="pic4" src="./images/${image4}">`

    return div3
    
}
export{ imgDiv3 }


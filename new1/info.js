const info = (title, para,buttonOne, buttonTwo)=> {
    let div = document.createElement("div")
    div.className="leftDiv"
    div.innerHTML= `<h1>${title}</h1>
    
                    <p class="para">${para}</p>
                    
                    <div class="marginbutton">
                    <button class="button" id="btn1">${buttonOne}</button>
                    <button class="button" id="btn2">${buttonTwo}</button>
                    </div>
                    `
    return div
    }
    export{info}
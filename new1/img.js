const imagess = (img)=> {
    let div = document.createElement("div")
    div.className="rightDiv"
    div.innerHTML= `<img class="ig" src="${img}"> `
    
    return div
  }
  export{imagess}
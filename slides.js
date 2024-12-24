console.log("hi")
window.addEventListener("load", () => {
    console.log("bye")
    for (let el of document.getElementsByClassName("imagesSlides")) {
        console.log(el)
        let leftButton = document.createElement("button")
        let rightButton = document.createElement("button")
        leftButton.innerText = "‹"
        rightButton.innerText = "›"
        leftButton.className = "leftRight lrl"
        rightButton.className = "leftRight lrr"
        let row = document.createElement("div")
        row.className = "slideControls"
        row.appendChild(leftButton)
        row.appendChild(rightButton)
        el.after(row)
    
        leftButton.onclick = () => {
            let lastOneBefore = el.children[0]
            for (let i of el.getElementsByTagName("img")) {
                if (i.getBoundingClientRect().left < 0) {
                    lastOneBefore = i
                } else {
                    break
                }
            }
            lastOneBefore.scrollIntoView({block: "nearest", inline: "nearest"});
        }
        rightButton.onclick = () => {
            for (let e of el.getElementsByTagName("img")) {
                if (e.offsetLeft > el.scrollLeft) {
                    e.scrollIntoView({block: "nearest", inline: "start"});
                    break
                }
            }
        }
    }
}
)
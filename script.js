function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const container = document.querySelector(".container");
        const celula = document.createElement("div");
        celula.style.width = `${512 / size}px`;
        celula.style.height = `${512 / size}px`;
        celula.classList.add("cell");
        container.appendChild(celula);
    }
}

function reset() {
    document
      .querySelectorAll(".cell")
      .forEach((e) => e.parentNode.removeChild(e));
  }

let label = document.querySelector("input[name=size]").labels[0];
let color = document.getElementById("colorpicker");
let size = document.getElementById("size");
let clear = document.getElementById("clear");

const buttons = document.querySelectorAll("input[name=mode]");

let mode;

for (let i = 0; i < 3; i++) {
    buttons[i].addEventListener("click", function() {
       if (buttons[i].value === "colormode") {
           mode = "color";
       }
       else if (buttons[i].value === "eraser") {
           mode = "eraser";
       }
       else {
           mode = "rainbow";
       }
    })
}


createGrid(size.value);


const celule = document.querySelectorAll(".cell");

label.innerText = `${size.value} x ${size.value}`;


celule.forEach(celula => celula.addEventListener("mouseover", function() {
    switch(mode) {
        default:    
            celula.setAttribute("style", `background-color: ${color.value}`);
            celula.style.width = `${512 / size.value}px`;
            celula.style.height = `${512 / size.value}px`;
            break;
        case "color" :
            celula.setAttribute("style", `background-color: ${color.value}`);
            celula.style.width = `${512 / size.value}px`;
            celula.style.height = `${512 / size.value}px`;
            break;
        case "eraser":
            celula.setAttribute("style", `background-color: #ffffff`);
            celula.style.width = `${512 / size.value}px`;
            celula.style.height = `${512 / size.value}px`;
            break;
        case "rainbow": 
             const randomColor = Math.floor(Math.random()*16777215).toString(16);
             celula.setAttribute("style", `background-color: #${randomColor}`);
             celula.style.width = `${512 / size.value}px`;
             celula.style.height = `${512 / size.value}px`;
             break;

    }
}));

size.addEventListener("change", function() {
    label.innerText = `${size.value} x ${size.value}`;
    reset();
    createGrid(size.value);
    const celule = document.querySelectorAll(".cell");
    celule.forEach(celula => celula.addEventListener("mouseover", function() {
        switch(mode) {
            default:    
                celula.setAttribute("style", `background-color: ${color.value}`);
                celula.style.width = `${512 / size.value}px`;
                celula.style.height = `${512 / size.value}px`;
                break;
            case "color" :
                celula.setAttribute("style", `background-color: ${color.value}`);
                celula.style.width = `${512 / size.value}px`;
                celula.style.height = `${512 / size.value}px`;
                break;
            case "eraser":
                celula.setAttribute("style", `background-color: #ffffff`);
                celula.style.width = `${512 / size.value}px`;
                celula.style.height = `${512 / size.value}px`;
                break;
            case "rainbow": 
                const randomColor = Math.floor(Math.random()*16777215).toString(16);
                celula.setAttribute("style", `background-color: #${randomColor}`);
                celula.style.width = `${512 / size.value}px`;
                celula.style.height = `${512 / size.value}px`;
                break;
        }
    }));
    
})

clear.addEventListener("click", function() {
    const celule = document.querySelectorAll(".cell");
    celule.forEach(celula => {
        celula.setAttribute("style", `background-color: #ffffff`);
        celula.style.width = `${512 / size.value}px`;
        celula.style.height = `${512 / size.value}px`;
    })

})




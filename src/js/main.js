let btnCouleur = document.getElementsByClassName("btn1");
let btnBorder = document.getElementsByClassName("btn2");
let noBorder = document.getElementById("noBorder")
let btnSizeBorder = document.getElementsByClassName("btn3");
let visuel = document.getElementsByClassName("visuel")[0];
let visuelBorder;

// Event boutton Couleur Rangée 1
for (let i = 0; i < btnCouleur.length; i++) {
    btnCouleur[i].addEventListener("click", () => {
        visuel.style.backgroundColor = btnCouleur[i].style.backgroundColor;
    })
};

// Event boutton Border Rangée 1
for (let i = 0; i < btnBorder.length; i++) {
    btnBorder[i].addEventListener("click", () => {
        visuel.style.border = btnBorder[i].style.border;
        visuelBorder = visuel.style.border;
    })
};

// Event boutton Reset Border
noBorder.addEventListener("click", () => {
    visuel.style.border = "none";
});

// Event boutton Border Top
for (let i = 0; i < btnSizeBorder.length; i++) {
    btnSizeBorder.addEventListener("click", () => {
        visuel.style.border = visuelBorder;
        if (i == 0) {
            visuel.style.borderTop = "3px";
        } else if(i == 1){
            visuel.style.borderWidth = "10px";
            visuelBorder.visuel.style.border;
        }
    })
}
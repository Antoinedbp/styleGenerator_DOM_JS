let btnCouleur = document.getElementsByClassName("btn1");
let btnBorder = document.getElementsByClassName("btn2");
let btnSizeBorder = document.getElementsByClassName("btn3");
let visuel = document.getElementsByClassName("visuel")[0];
let visuelBorder;
let paletteC = document.getElementsByClassName("inputColor");
let border2 = document.getElementsByClassName("btnBorder");
let borderRadius = document.getElementsByClassName("inputRadius")
let reset = document.querySelector(".monButton");



/* -------------------------------------------------------------------------- */
/*                       Event boutton Couleur Rangée 1                       */
/* -------------------------------------------------------------------------- */

for (let i = 0; i < btnCouleur.length; i++) {
    btnCouleur[i].addEventListener("click", () => {
        visuel.style.backgroundColor = btnCouleur[i].style.backgroundColor;
    })
};

/* -------------------------------------------------------------------------- */
/*                    Event boutton type de Border Rangée 1                   */
/* -------------------------------------------------------------------------- */

for (let i = 0; i < btnBorder.length; i++) {
    btnBorder[i].addEventListener("click", () => {
        visuel.style.border = btnBorder[i].style.border;
        visuelBorder = visuel.style.border;
    })
};



/* -------------------------------------------------------------------------- */
/*                          Event boutton Border Top                          */
/* -------------------------------------------------------------------------- */

for (let i = 0; i < btnSizeBorder.length; i++) {
    btnSizeBorder[i].addEventListener("click", () => {
        visuel.style.border = visuelBorder;
        if (i == 0) {
            visuel.style.borderTop = "2px solid red"
        } else if(i == 1){
            visuel.style.borderTop = "5px solid red";
        }else if(i == 2){
            visuel.style.borderTop = "10px solid red";
            
        }
    })
};

/* -------------------------------------------------------------------------- */
/*                      Event boutton Palette de couleur                      */
/* -------------------------------------------------------------------------- */



/* -------------------------------------------------------------------------- */
/*                        Event choix du coté du Border                       */
/* -------------------------------------------------------------------------- */

for (let i = 0; i < border2.length; i++) {
    border2[i].addEventListener("click", () => {
        if (i == 0) {
            visuel.style.border = "5px solid";
        } else if(i == 1){
           visuel.style.borderTop = "5px solid";
        } else if(i == 2){
            visuel.style.borderRight = "5px solid";
        } else if(i == 3){
            visuel.style.borderBottom = "5px solid";
        } else{
            visuel.style.borderLeft = "5px solid";
        }
    })
    
}


/* -------------------------------------------------------------------------- */
/*                             Event Border Radius                            */
/* -------------------------------------------------------------------------- */

for (let i = 0; i < borderRadius.length; i++) {
    borderRadius[i].addEventListener("click", () => {
        if (i == 0) {
            visuel.style.borderRadius = "15px";
        } else if(i == 1){
            visuel.style.borderRadius = "15px 0px 0px 0px";
        }else if(i == 2){
            visuel.style.borderRadius = "0px 15px 0px 0px";
        }else if(i == 3){
            visuel.style.borderRadius = "0px 0px 15px 0px";
        } else if(i == 4){
            visuel.style.borderRadius = "0px 0px 0px 15px";
        }
    })
    
};



// Button Reset
reset.addEventListener("click", () => {
    visuel.style.border = "1px solid lightgray";
    visuel.style.backgroundColor = "white";
    visuel.style.borderRadius = "0px";
})
"use strict";

class Showcase{
    constructor(icon = "left"){
        this.icon = icon;
        this.fruits = ["Portakal", "Elma", "Armut", "Salatalık", "Brokoli", "Ispanak", "Limon", "Havuç", "Biber"];
    }
}

class Cart{
    constructor(icon = "right"){
        this.icon = icon;
        this.fruits = [];
    }
}

class Common{
    /* Verilen diziyi "ul li" yapısına dönüştür ve ekrana yazdır*/
    convertToListFromArray(pFruitArray, pListContainer, icon) {
        let newFruitList = pFruitArray.map(item => {
            return `<li>${item}<i class="${this.addClassForIcon(icon)}"></i></li>`;
        }).join("");
        pListContainer.innerHTML = newFruitList;
    }

    addClassForIcon(pIcon){
        if(pIcon === "left"){
            return "fas fa-angle-double-right";
        } else if (pIcon === "right") {
            return "far fa-check-circle";
        }
    }

    /* Her tıklama sonrasında dizileri güncelle */
    updateListAfterClick(e) {
        let liText = e.target.innerText;
        let liIndex = showcase.fruits.indexOf(liText);
        showcase.fruits.splice(liIndex, 1);
        cart.fruits.push(liText);
        cart.fruits.sort();
    }
}

class Manager{
    start(){        
        let showcaseContainer = dom.getElementById("showcase-fruits");
        let cartContainer = dom.getElementById("cart-fruits");

        /* Diziyi listeye çevir */
        common.convertToListFromArray(showcase.fruits, showcaseContainer, showcase.icon);

        /* Her tıklamada dizileri güncelle ve güncel dizileri listeye çevir */
        showcaseContainer.addEventListener('click', function (e) {
            common.updateListAfterClick(e);
            common.convertToListFromArray(showcase.fruits, showcaseContainer, showcase.icon);
            common.convertToListFromArray(cart.fruits, cartContainer, cart.icon);
        });
    }
}
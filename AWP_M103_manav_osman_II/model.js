"use strict";

class Product{
    constructor(){
        this.products = [  
            {id : 0, name : "Biber", price : 2, total : 2, amount : 1, img : "./images/biber.jpg"}, 
            {id : 1, name : "Elma", price : 4, total : 4,amount : 1, img : "./images/elma.jpg"}, 
            {id : 2, name : "Havuç", price : 1, total : 1,amount : 1, img : "./images/havuc.jpg"}, 
            {id : 3, name : "Mantar", price : 5, total : 5,amount : 1, img : "./images/mantar.jpg"}, 
            {id : 4, name : "Portakal", price : 4, total : 4,amount : 1, img : "./images/portakal.jpg"}, 
            {id : 5, name : "Sarımsak", price : 2, total : 2,amount : 1, img : "./images/sarimsak.jpg"},
            {id : 6, name : "Mandalina", price : 2, total : 2,amount : 1, img : "./images/mandalina.jpg"},
            {id : 7, name : "Taze Fasulye", price : 2, total : 2,amount : 1, img : "./images/fasulye.jpg"}
        ];
    }

    /**
    * Bu fonksiyon, ürünleri listeliyor.
    */
    renderProducts() {
        let container = dom.getElementById("products");
        let products = product.products.map(item => {
        return `<div class="product"><img src="${item.img}"><div class="product-name">${item.name} (Kg)</div><div class="product-price">${item.price} ₺</div><div class="add-cart"><button id="${item.id}" class="add-cart-btn">Sepete Ekle</button></div></div>`;
        }).join('');
        container.innerHTML = products;
    }

    /**
    * Bu fonksiyon, sepete ekle butonuna tıklandığında ürünü sepete ekliyor.
    */
    getClickedProduct() {
        let container = dom.getElementById("products");
        container.addEventListener("click",function(e) {
            this.addToCart(e);
            cart.renderCart();
            cart.totalCart();
        }.bind(this));
    };

    addToCart(e){
        if(e.target.className == "add-cart-btn"){
            let id = e.target.id;                 
            let clickedProduct = commonFunctions.getProductById(id);
            let clickedProductIndex = cart.cart.indexOf(clickedProduct);    
            if(clickedProductIndex === -1){
                cart.cart.push(clickedProduct);
            }else {            
                clickedProduct.amount ++;
                clickedProduct.total = clickedProduct.price * clickedProduct.amount;
            }    
        }
    }
}

class Cart{
    constructor(){
        this.cart = [];
    }

    /**
    * Bu fonksiyon, sepetteki ürünleri listeliyor.
    */
    renderCart() {
        let container = dom.getElementById("cart-products");
        let cart = this.cart.map(item => {
            return `<tr><td><img src="${item.img}"></td><td>${item.name}</td><td>${item.amount}</td><td>${item.price} ₺</td><td>${item.total} ₺</td><td><i id="${item.id}" class="far fa-trash-alt"></i></td></tr>`;
        }).join('');    
        container.innerHTML = cart;
        this.isEmptyCart();   
    }

    /**
    * Bu fonksiyon, sepette ürün olup olmadığını kontrol ediyor.
    */
    isEmptyCart() {
        if(this.cart.length === 0){
            dom.getElementById("empty-cart").classList.remove("empty-cart");
        }else{
            dom.getElementById("empty-cart").classList.add("empty-cart");
        }
    }

    /**
    * Bu fonksiyon, toplam alışveriş tutarını hesaplıyor.
    */
    totalCart() {
        let totalCart = 0;
        this.cart.forEach(item => {
            totalCart = totalCart + parseFloat(item.total);
        });
        dom.getElementBySelector("#total-price span").innerHTML = totalCart.toFixed(2) + " ₺";
    }

    /**
    * Bu fonksiyon, sepetten ürünü siliyor.
    */
    getClickedProductFromCart() {
        let container = dom.getElementById("cart-products");
        container.addEventListener("click",function(e) {
            this.deleteFromCart(e);
            this.renderCart();
            this.totalCart();
        }.bind(this));
    };

    deleteFromCart(e){
        if(e.target.className == "far fa-trash-alt"){
            let id = e.target.id;        
            let clickedProduct = commonFunctions.getProductById(id);
            let clickedProductIndex = this.cart.indexOf(clickedProduct);   
            if(clickedProduct.amount == 1){
                this.cart.splice(clickedProductIndex,1);
            }else{
                clickedProduct.amount --;
                clickedProduct.total = clickedProduct.price * clickedProduct.amount;
            }    
        }
    }
}

class CommonFunctions{
    /**
    * Bu fonksiyon, id'ye göre ilgili ürünü getiriyor.
    */
    getProductById(id) {
        let clickedProduct;
        product.products.forEach(item => {
            if(item.id == id ){               
                clickedProduct = item;
            }
        });
        return clickedProduct;
    }
}

class Manager{
    start(){
        product.renderProducts();
        product.getClickedProduct();
        cart.getClickedProductFromCart();         
    }
}
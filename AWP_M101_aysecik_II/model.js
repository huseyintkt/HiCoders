"use strict";

class Aysecik {
    constructor() {
        this.allNumbersWithText = [];
        this.allNumbersWithNumber = [];
        this.numbersArray = [
            "sıfır",
            "bir",
            "iki",
            "üç",
            "dört",
            "beş",
            "altı",
            "yedi",
            "sekiz",
            "dokuz",
            "on",
            "on bir",
            "on iki",
            "on üç",
            "on dört",
            "on beş"
        ];
    }

    /**
    * Bu fonksiyon, kullanicidan kac adet sayi girecegini rakam olarak ister ve bu degeri geri dondurur
    */
    getNumberOfEnteredNumbers(){
        let numberOfEnteredNumbers = prompt("Lütfen kaç sayı girmek istediğinizi rakam ile yazınız.");    
        if(numberOfEnteredNumbers >= 0 && numberOfEnteredNumbers <= 15) {
            return numberOfEnteredNumbers;  
        } else {
            alert("Hata!!! Lütfen 0-15 arasında bir sayı giriniz.");
            return this.getNumberOfEnteredNumbers();            
        }
    };

    /**
    * Bu fonksiyon, yazi ile girilenleri bir diziye atar.
    */
    getNumbersToEnter(pNumberOfEnteredNumbers, pNumbersArray) {
        for(let i = 0; i < pNumberOfEnteredNumbers; i++){    
            let enteredNumber = prompt("Lütfen 0 - 15 arasında bir sayıyı yazı olarak giriniz.");            
            // Girilen sayının geçerli olup olmadığının kontrolü
            if(pNumbersArray.indexOf(enteredNumber) !== -1) {
                this.allNumbersWithText[i] = enteredNumber;            
            } else{
                alert("Hata!!! Lütfen 0 - 15 arasında bir sayıyı yazı olarak giriniz!");            
                i--;
            }        
        }  
        return this.allNumbersWithText;
    };    

    /**
     * Bu fonksiyon, yazi ile olusturdugumuz diziyi rakamlardan olusan diziye cevirir.
     */
    convertToNumberFromText(pAllNumbersWithText, pNumbersArray) {
        pAllNumbersWithText.forEach(item => {
            let indexNo = pNumbersArray.indexOf(item);
            if(indexNo !== -1){
                this.allNumbersWithNumber.push(indexNo);
            }  
        });
        return this.allNumbersWithNumber;
    }

    /**
    * Bu fonksiyon, girilen sayi adedini ekrana yazar.
    */
    setNumberOfEnteredNumbers(pNumberOfEnteredNumbers) {
        dom.getElementById("amount").innerHTML = pNumberOfEnteredNumbers;
    }

    /**
    * Bu fonksiyon, girilen tum sayilari ekrana yazdirir.
    */
    listOfEnteredNumbers(pAllNumbersWithNumber) { 
        let listItem = pAllNumbersWithNumber.map(item => {
            return `<li>sayı : ${item} ( ${this.numberRepeatItemAtArray(pAllNumbersWithNumber, item)} defa girildi )</li>`;
        }).join("");
        dom.getElementById("list").innerHTML = listItem;
    }

    /**
    * Bu fonksiyon, dizideki bir elemanin kaç defa oldugunu geri dondurur.
    */
    numberRepeatItemAtArray(pArray, pItem){
        return pArray.filter((v) => (v === pItem)).length;     
    }

    /**
    * Bu fonksiyon, girilen sayilarin toplamini ekrana yazdirir.
    */
    sumOfEnteredNumbers(pAllNumbersWithNumber) {
        dom.getElementById("total").innerHTML = pAllNumbersWithNumber.reduce(function(total, item){
            return total + item;
        });
    } 
    
    /**
    * Bu fonksiyon, girilen sayilarin ortalamasini ekrana yazdirir.
    */
    averageOfEnteredNumbers(pAllNumbersWithNumber) {   
        let total = pAllNumbersWithNumber.reduce(function(total, item){
            return total + item;
        });
        let average = total / pAllNumbersWithNumber.length;  
        dom.getElementById("average").innerHTML = average;
    }
    
    /**
    * Bu fonksiyon, girilen sayilarin carpimini ekrana yazdirir.
    */
    multiplicationOfEnteredNumbers(pAllNumbersWithNumber) {    
        let multiplication = 1;    
        pAllNumbersWithNumber.forEach(item => {
            multiplication = multiplication * parseInt(item);
        }); 
        dom.getElementById("multiplication").innerHTML = multiplication;   
    }
    
    /**
    * Bu fonksiyon, girilen sayilarin en buyugunu ekrana yazdirir.
    */
    theLargestOfTheNumbersEntered(pAllNumbersWithNumber) {    
        let biggestNumber = Math.max.apply(null, pAllNumbersWithNumber);    
        dom.getElementById("biggest").innerHTML = biggestNumber;
    }
    
    /**
    * Bu fonksiyon, girilen sayilarin en kucugunu ekrana yazdirir.
    */
    theSmallestOfTheNumbersEntered(pAllNumbersWithNumber) {    
        let smallestNumber = Math.min.apply(null, pAllNumbersWithNumber);    
        dom.getElementById("smallest").innerHTML = smallestNumber;
    }
}

class Manager {

    start() {
        let numberOfEnteredNumbers = aysecik.getNumberOfEnteredNumbers();
        aysecik.allNumbersWithText = aysecik.getNumbersToEnter(numberOfEnteredNumbers, aysecik.numbersArray);
        aysecik.allNumbersWithNumber = aysecik.convertToNumberFromText(aysecik.allNumbersWithText, aysecik.numbersArray);
        aysecik.setNumberOfEnteredNumbers(numberOfEnteredNumbers);
        aysecik.listOfEnteredNumbers(aysecik.allNumbersWithNumber);
        aysecik.sumOfEnteredNumbers(aysecik.allNumbersWithNumber);
        aysecik.averageOfEnteredNumbers(aysecik.allNumbersWithNumber);
        aysecik.multiplicationOfEnteredNumbers(aysecik.allNumbersWithNumber);
        aysecik.theLargestOfTheNumbersEntered(aysecik.allNumbersWithNumber);
        aysecik.theSmallestOfTheNumbersEntered(aysecik.allNumbersWithNumber);
    }
}
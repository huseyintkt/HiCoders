
let sortFirstNameStatus = true;
let sortLastNameStatus = true;
let sortCantonStatus = true;

class Canton {
    constructor(){
        this.cantons = [
            { name : "Vaud" },
            { name : "Bern" },
            { name : "Luzern" },
            { name : "Uri" },
            { name : "Schwyz" },
            { name : "Obwalden" },
            { name : "Nidwalden" },
            { name : "Glarus" },
            { name : "Zug" },
            { name : "Basel" },
            { name : "Appenzell" },
            { name : "Ticino" },
            { name : "Zurih" },
            { name : "Cenevre" } 
        ]
    }

    /**
    * 
    * Bu fonksiyon, dropdownlist'e tum kanton isimlerini render eder.
    */
    renderCantons(){        
        let container = dom.getElementById("canton");
        let cantonItems = this.cantons.map(item =>{
            return `<option value="${item.name}">${item.name}</option>`
        }).join();
        container.innerHTML = cantonItems;
    }
}

class Person {
    constructor (firstName, lastName, canton){
        this.firstName = firstName;
        this.lastName = lastName;
        this.canton = canton;
        this.persons = [];
    };

    /**
     * Bu fonksiyon, Kaydet butonuna tiklandiginda formdaki bilgileri alir. Bu bilgilere sahip kisiyi kaydeder. Kayit sonrasi formu temizler ve kayitli kisileri tabloda listeler. 
     */
    addNewPerson(){
        let saveButton = dom.getElementById("submit");
        saveButton.addEventListener("click", function() {
            let firstName = dom.getElementById("firstName").value;
            let lastName = dom.getElementById("lastName").value;
            let canton = dom.getElementById("canton").value;
            let newPerson = new Person(firstName, lastName, canton);
            this.persons.push(newPerson);    
            this.clearForm();
            this.renderPersons(this.persons);
        }.bind(this));
    }

    /**
    * 
    * Bu fonksiyon, formdaki bilgiler kayit edildikten sonra formu temizler.
    */
    clearForm() {
        dom.getElementById("firstName").value = "";
        dom.getElementById("lastName").value = "";
        dom.getElementById("canton").value = "Vaud";
    } 

    /**
    * 
    * Bu fonksiyon, sagdaki tabloya tum kayitli kisileri render eder.
    */
    renderPersons(pPersons){
        let container = dom.getElementById("tbody");
        let personItems = pPersons.map(item =>{
            return `<tr><td>${item.firstName}</td><td>${item.lastName}</td><td>${item.canton}</td></tr>`
        }).join("");
        container.innerHTML = personItems;
    }
}

class Sort {

    /**
    * Bu fonksiyon, tiklanan Html ogesine gore;
    *    - isme, soyisme, kantona gore a'dan z'ye veya z'den a'ya siralama yapan fonksiyonu cagirir.
    */
    sortTable(){
        let table = dom.getElementById("table");
        table.addEventListener("click", function (e) {
            if(e.target.id === "sortFirstName"){
                sortFirstNameStatus ? this.sortByFirstNameAZ() : this.sortByFirstNameZA();
                sortFirstNameStatus = !sortFirstNameStatus;
            }
            if(e.target.id === "sortLastName"){
                sortLastNameStatus ? this.sortByLastNameAZ() : this.sortByLastNameZA();
                sortLastNameStatus = !sortLastNameStatus;
            }
            if(e.target.id === "sortCanton"){
                sortCantonStatus ? this.sortByCantonAZ() : this.sortByCantonZA();
                sortCantonStatus = !sortCantonStatus;
            }
        }.bind(this));
    }

    /**
    * 
    * Bu fonksiyon, tablodaki kisilerin isimlerini A'dan Z'ye sıralar.
    */
    sortByFirstNameAZ() {
        person.persons = person.persons.sort(function(a, b){
            var x = a.firstName.toLowerCase();
            var y = b.firstName.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        });
        person.renderPersons(person.persons);
    }

    /**
    * 
    * Bu fonksiyon, tablodaki kisilerin isimlerini Z'den A'ya sıralar.
    */
    sortByFirstNameZA() {
        person.persons = person.persons.sort(function(a, b){
            var x = b.firstName.toLowerCase();
            var y = a.firstName.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        });
        person.renderPersons(person.persons);
    }

    /**
    * 
    * Bu fonksiyon, tablodaki kisilerin soyisimlerini A'dan Z'ye sıralar.
    */
    sortByLastNameAZ() {
        person.persons = person.persons.sort(function(a, b){
            var x = a.lastName.toLowerCase();
            var y = b.lastName.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        });
        person.renderPersons(person.persons);
    }

    /**
    * 
    * Bu fonksiyon, tablodaki kisilerin soyisimlerini Z'den A'ya sıralar.
    */
    sortByLastNameZA() {
        person.persons = person.persons.sort(function(a, b){
            var x = b.lastName.toLowerCase();
            var y = a.lastName.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        });
        person.renderPersons(person.persons);
    }

    /**
    * 
    * Bu fonksiyon, tablodaki kanton isimlerini A'dan Z'ye sıralar.
    */
    sortByCantonAZ() {
        person.persons = person.persons.sort(function(a, b){
            var x = a.canton.toLowerCase();
            var y = b.canton.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        });
        person.renderPersons(person.persons);
    }

    /**
    * 
    * Bu fonksiyon, tablodaki kanton isimlerini Z'den A'ya sıralar.
    */
    sortByCantonZA() {
        person.persons = person.persons.sort(function(a, b){
            var x = b.canton.toLowerCase();
            var y = a.canton.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        });
        person.renderPersons(person.persons);
    }
}

class Filter {

    /**
     * Bu fonksiyon, arama kutusuna girilen karakter veya kelimelere gore isim ve soyisim sütunlarında filtreleme yapar. 
     */
    filterTable(){
        let searchIcon = dom.getElementById("tt-right");

        searchIcon.addEventListener("click", function (e) {
            if(e.target.className === "fas fa-search"){
                let filterText = dom.getElementById("filterText").value.toLowerCase();      
                let filterPersons = person.persons.filter(item => {
                    let firstName = item.firstName.toLowerCase();
                    let lastName = item.lastName.toLowerCase();      
                    return firstName.includes(filterText) || lastName.includes(filterText);         
                });
                person.renderPersons(filterPersons);           
            }
        });
    }
}

class DOM {
    
    /**
     * 
     * Bu fonksiyon, parametre olarak gonderilen id'ye gore ilgili Html nesnesini secer. 
     */
    getElementById(pId) {
        return document.querySelector(`#${pId}`);
    }
}

class Manager {
    start(){        
        canton.renderCantons();
        person.addNewPerson();
        sort.sortTable();
        filter.filterTable();
    }
}
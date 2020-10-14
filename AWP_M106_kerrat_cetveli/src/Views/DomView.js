
class DomView {    
    /**
     * 
     * Bu metod, parametre olarak gonderilen id'ye gore ilgili Html nesnesini secer. 
     */
    getElementById(pId) {
        return document.querySelector(`#${pId}`);
    }
}

let domView = new DomView();

let nameHtmlInput = domView.getElementById("nameValue");
let peopleListContainer = domView.getElementById("people");
let activePersonNameContainer = domView.getElementById("activePerson");
let number1Container = domView.getElementById("number1");
let number2Container = domView.getElementById("number2");
let resultHtmlInput = domView.getElementById("result");
let addNewPersonBtn = domView.getElementById("addBtn");
let getNextAskBtn = domView.getElementById("nextAsk");
let finishSessionBtn = domView.getElementById("finishSession");
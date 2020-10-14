
class PersonController{
    
    /**
     * Bu metod, yeni bir cocuk ekler. Her cocugun bir id'si vardir ve benzersizdir. Eklenen cocuk ayni zamanda localStorage'a da kaydedilir.
     */
    addPerson(){
        let name = nameHtmlInput.value;
        if(name.trim() !== ""){
            let id = faker.random.uuid();
            let score = 0;
            let newPerson = new Person(id, name, score);
            people.push(newPerson);
            localStorage.setItem(id, JSON.stringify(newPerson));
            personController.renderPeople();      
            nameHtmlInput.value = "";
        }
    }

    /**
     * Bu metod, kayitli cocuklari render eder. Eger applikasyon yeni baslatildiysa localStorage'de kayitli cocuklar varsa ilk olarak onlari render eder.
     */
    renderPeople(){      
        if(localStorage.length !== 0){
            if(people.length === 0){
                for(let i = 0; i < localStorage.length; i++){    
                    let item = JSON.parse(localStorage.getItem(localStorage.key(i)));    
                    people.push(item);            
                }
            }            
            peopleListContainer.innerHTML = people.map(item => {
                return `<div class="mb-3"><div class="card"><div class="card-header text-white bg-info">${item.name}</div><div class="card-body"><p class="card-text">Puan : <span class="badge badge-warning">${item.score}</span><a id="${item.id}" href="#" class="startWorking btn btn-primary btn-sm">Çalışmaya Başla</a></p></div></div></div>`
            }).join("");  
        }
    }

    /**
     * Bu metod, parametre olarak aldigi id'ye gore ilgili Person nesnesini dondurur.
     */
    getPerson(pId){
        let activePerson;
        people.forEach(item => {
            if(item.id == pId){
                activePerson = item;
            }
        });
        return activePerson;
    }
}
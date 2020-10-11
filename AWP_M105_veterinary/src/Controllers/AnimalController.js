"use strict";

class AnimalController{   

    /**
     * Bu metod, random olarak "config.ANIMAL_COUNT" kadar hayvan olusturur ve olusturulan her hayvani diziye push eder.
     */
    createAnimalList(){     
        let animals = [];  
        for (let i = 0; i < config.ANIMAL_COUNT; i++) {            
            /* 1 (dahil) ile 20 (dahil) arasinda rastgele sayi uretir */
            let age = faker.random.number(19) + 1;
            let ownerName = faker.name.firstName();
            /* 0 (dahil) ile 2 (dahil) arasinda rastgele sayi uretir */
            let randomType = faker.random.number(2);
            if(randomType === 0){ 
                animals.push(new Cat(age, ownerName)); 
            }
            if(randomType === 1){ 
                animals.push(new Crow(age, ownerName)); 
            }
            if(randomType === 2){ 
                animals.push(new Anchovy(age, ownerName));  
            }           
        }
        return animals;    
    }
}
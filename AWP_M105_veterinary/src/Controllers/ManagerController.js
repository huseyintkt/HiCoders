"use strict";

class ManagerController{
    /**
     * Bu metod, Niyazi'nin uzmanlik alanina gore animals dizisinden uygun hayvani almasini saglar. Bakimi yapilan hayvan animals dizisinden cikarilir ve Niyazi'nin gunluk yaptigi islere eklenir.
     */
    getAnimalForNiyazi(niyazi, animals){
        let currentAnimal = animals.find(item => {
            return item.type === "Cat" || item.type === "Anchovy";
        });

        let currentAnimalType = currentAnimal.type;    
        niyazi.jobs.push(currentAnimal);
        animals.splice(animals.indexOf(currentAnimal),1);

        if(currentAnimalType === "Cat"){
            setTimeout(function () {
                this.getAnimalForNiyazi(niyazi, animals);
            }.bind(this),8000);            
        }
        if(currentAnimalType === "Anchovy"){
            setTimeout(function () {
                this.getAnimalForNiyazi(niyazi, animals);                
            }.bind(this),3000);   
        }           
    }

    /**
     * Bu metod, Yasemin'in uzmanlik alanina gore animals dizisinden uygun hayvani almasini saglar. Bakimi yapilan hayvan animals dizisinden cikarilir ve Yasemin'in gunluk yaptigi islere eklenir.
     */
    getAnimalForYasemin(yasemin, animals){
        setInterval(function () {
            let currentAnimal = animals.find(item => {
                return item.type === "Crow";
            });
            yasemin.jobs.push(currentAnimal);
            animals.splice(animals.indexOf(currentAnimal),1);    
        },5000);  
    }

    /**
     * Bu metod, Cabbar'in uzmanlik alanina gore animals dizisinden uygun hayvani almasini saglar. Bakimi yapilan hayvan animals dizisinden cikarilir ve Cabbar'in gunluk yaptigi islere eklenir.
     */
    getAnimalForCabbar(cabbar, animals){
        setInterval(function () {
            let currentAnimal = animals.find(item => {
                return item.type === "Cat";
            });
            cabbar.jobs.push(currentAnimal);
            animals.splice(animals.indexOf(currentAnimal),1);   
        },8000);          
    }

    /**
     * Bu metod, Eleni'nin uzmanlik alanina gore animals dizisinden uygun hayvani almasini saglar. Bakimi yapilan hayvan animals dizisinden cikarilir ve Eleni'nin gunluk yaptigi islere eklenir.
     */
    getAnimalForEleni(eleni, animals){
        setInterval(function () {
            let currentAnimal = animals.find(item => {
                return item.type === "Anchovy";
            });
            eleni.jobs.push(currentAnimal);
            animals.splice(animals.indexOf(currentAnimal),1);     
        },3000);  
    }
}
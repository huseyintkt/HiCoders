
class WorkerController{

    /**
     * Bu metod, "calismaya basla" butonuna tiklandiginde calisir. Ekran fullScreen moda getirilir ve arkaplanda muzik calmaya baslar.
     */
    startWorking(e){
        if(e.target.className.includes("startWorking")){
            document.documentElement.requestFullscreen();           
            workerController.startMusic();
            let id = e.target.id;
            activePersonNameContainer.innerHTML = personController.getPerson(id).name;
            activePersonNameContainer.setAttribute("data-id",id);     
            workerController.getNewQuestion();    
        }
    }

    /**
     * Bu metod, yeni soruyu 10 defa random olarak getirir. 
     */
    getNewQuestion(){
        if(counter < 10){
            number1Container.innerHTML = workerController.getRandomNumber();
            number2Container.innerHTML= workerController.getRandomNumber();
            resultHtmlInput.value = "";
            counter ++;
        } else{
            workerController.finishWorking();
        }
    }

    /**
     * Bu metod, oturumdaki devam butonuna her tiklandiginda calisir. Cocugun girdigi deger dogruysa puanini 10 arttirir ve guncel puani localStorage'da da gunceller.
     */
    calculate(){
        let number1 = parseInt(number1Container.innerHTML);
        let number2 = parseInt(number2Container.innerHTML);
        let result = parseInt(resultHtmlInput.value);
        if((number1 * number2) === result){
           let id = activePersonNameContainer.getAttribute("data-id");   
           let activePerson = personController.getPerson(id);
           activePerson.score += parseInt(10);
           localStorage.setItem(id, JSON.stringify(activePerson));
           personController.renderPeople();     
        }
        workerController.getNewQuestion();     
    }

    /**
     * Bu metod, 0 (dahil) ile 10 (dahil değil) arasinda rastgele bir sayi dondurur.
     */
    getRandomNumber(){
        return Math.floor(Math.random() * 10);
    }

    /**
     * Bu metod, arkaplanda calacak muzigi baslatir.
     */
    startMusic(){       
        audi.src = "../../music/music.mp3";  
        audi.loop = true;  
        audi.play();   
    };

    /**
     * Bu metod, "calismayi bitir" butonuna tiklandiginda calisir. Ekran fullScreen moddan cikar ve arkaplandaki muzik durur.
     */
    finishWorking(){
        document.exitFullscreen();
        audi.pause();
        number1Container.innerHTML = "_";
        number2Container.innerHTML = "_";
        resultHtmlInput.value = "";
        counter = 0;
    }
}
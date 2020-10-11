"use strict";

class TimerView{

    /**
     * Bu metod, kalan saniyeleri ekrana yazdirir.
     */
    writeTheTimeOnTheScreen(pTime){
        document.querySelector("#timer span").innerHTML = pTime;
    }

    /**
     * Bu metod, timer ilk basladiginda ekrana "Start" yazdirir.
     */
    writeStartOnTheScreen(){
        document.querySelector("#timer span").innerHTML = "Start";
    }

    /**
     * Bu metod, timer sona erdiginde ekrana "End" yazdirir.
     */
    writeEndOnTheScreen(pTime){
        document.querySelector("#timer span").innerHTML = "End";
    }
}
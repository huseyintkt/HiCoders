"use strict";

class VeterinaryController{

    /**
     * Bu metod, 4 veteriner olusturup hepsini diziye push eder ve bu diziyi geriye dondurur.
     */
    createVeterinaryList(){
        let niyazi = new Veterinary("Niyazi", ["Anchovy", "Cat"]);
        let yasemin = new Veterinary("Yasemin", ["Crow"]);
        let cabbar = new Veterinary("Cabbar", ["Cat"]);
        let eleni = new Veterinary("Eleni", ["Anchovy"]);
        let veterinaries = [];
        veterinaries.push(niyazi);
        veterinaries.push(yasemin);
        veterinaries.push(cabbar);
        veterinaries.push(eleni);
        return veterinaries;
    }
}
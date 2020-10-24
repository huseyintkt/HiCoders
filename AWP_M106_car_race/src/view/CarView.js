/**
 * 
 */
class CarView{
    #car = null;                    // sadece bu nesnenin görebilecegi, disaridan erisilemeyen bir degisken

    constructor(pCar){
        this.#car = pCar;
    }

    /**
     * toString methodu JS tarafindan bilinen özel metoddur. Bu nesne bir string ile toplandiginda veya Template literal icinde kullanildiginda.
     * JS otomatik olarak toString methôdunu kullanir.
     * Bu nesnenin toString metodu bu arabayi html'e cevirerek geri dönderir.
     */
    toString(){
        return `<car id="${this.#car.getId()}" 
                     class="race-car"
                     style="background-color: ${this.#car.getColor()}; left: ${this.#car.getDriveDistance()}px">
                     ${this.#car.getName()}
                     <img src="${this.#car.getImage()}"/>
                </car>`;
    }
}
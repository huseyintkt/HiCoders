class RaceTrackView{
    #raceTrack = null;                      // sadece bu nesnenin görebilecegi bir degisken
    
    constructor(pRaceTrack){
        this.#raceTrack = pRaceTrack;
    }

    /**
     * toString methodu JS tarafindan bilinen özel metoddur. Bu nesne bir string ile toplandiginda veya Template literal icinde kullanildiginda.
     * JS otomatik olarak toString methôdunu kullanir.
     * Bu nesnenin toString metodu yaris pistindi ve icindeki arabalari html'e cevirerek geri dönderir.
     */
    toString(){
        let cars = this.#raceTrack.getCars().map(car => `${new CarView(car)}`).join("");

        return `<main class="race-track"
                       style="width:${this.#raceTrack.getTrackDistance()}px">
                    ${cars}
                </main>`;
    }
}
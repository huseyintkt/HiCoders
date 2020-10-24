/**
 * Bu class arabalari üzerinde tutan pisti temsil eder.
 * Yaristaki arabalarin akmasini ve durmasini saglar, bir sonraki yollarini hespalattirir.
 */
class RaceTrack{

    #totalDistance = 0;
    #carList = null;
    #distruptionSystem = null;

    constructor(pTotalDistance){
        this.#totalDistance = pTotalDistance;
        this.#distruptionSystem = new DistruptionSystem();
    }

    /**
     * Arabalar sifir noktasina konuclandirilir.
     * @param {List<Car>} pCarList 
     */
    makeCarsReady(pCarList){
        this.#carList = pCarList
        pCarList.forEach(car => car.moveToStartLine());   
    }

    /**
     * Pist her birim zamanda arabalarin yeni lokasyonlarinin hesaplanmasi icin istekte bulunur.
     */
    observe(){
        this.#carList.forEach(car => {
            car.move(this.#distruptionSystem.isActive());
        });

        return this.#carList.some(car => car.isWinner(this.#totalDistance))
    }

    /**
     * Toplam uzunlugu katetmis olan arabalarin listesini geri verir, yani kazananlari
     */
    getWinner(){
        return this.#carList.filter(car => car.isWinner(this.#totalDistance))
    }

    /**
     * Pissteki arabalar listesini nesne disina geri verir
     */
    getCars(){
        return this.#carList;
    }

    /**
     * Pistin uzunlugunu bilgisini nesne disina geri verir
     */
    getTrackDistance(){
        return this.#totalDistance;
    }
}
/**
 * Yaris pistini icerir ve setTimeout fonksiyonunu yönetir.
 * Arabalarin verilen sayiya göre üretilmesini saglar ve yarisin icinden disariya haberler verir (callbak fonksiyonlari)
 * Yani yarisi hazir hale getirir, baslatir ve bitirir.
 */
class RaceManager{

    #raceTrack = null;                      // RM'in bir pisti vardir.
    #carList = [];                          // RM yarisa katilacak arabalari olusturur ve piste verir.
    #timerHandle = null;                    // Timerin tekrar durdurulmasi icin lk cagrildiginda durdurmak icin gerekli bilgiyi tutar.
    #raceFinishedHandler = null;            // Bitisi ne olacagini iceren fonksiyonu tutar.
    #raceProgressHandler = null;            // her lokasyon güncelleme de ne olacagini bilen fonksiyonu tutar.

    constructor(pNumberOfCars = 10, pTotalRaceDistance = 2000, pProgressCallback, pRaceFinishedCallback){
        this.populateCars(pNumberOfCars);
        this.#raceTrack = new RaceTrack(pTotalRaceDistance);
        this.#raceFinishedHandler = pRaceFinishedCallback;
        this.#raceProgressHandler = pProgressCallback;
    }

    /**
     * Yarisi baslatir
     */
    start(){
        this.#raceTrack.makeCarsReady(this.#carList);
        this.#timerHandle = setInterval(() => this.run(), 250);
    }

    /********************************** 
     * PRIVATE METHODS
    **********************************/

    /**
     * Güncelleme fonksiyonu, main game loop
     */
    run(){
        let isRaceFinished = this.#raceTrack.observe();
        if(isRaceFinished){
            clearInterval(this.#timerHandle);
            this.#raceFinishedHandler(this.#raceTrack);
        }
        else{
            this.#raceProgressHandler(this.#raceTrack);
        }
    }

    /**
     * Arabalarin rasgele üretilmesini saglar.
     * @param {Integer} pNumberOfCars 
     */
    populateCars(pNumberOfCars){
        for (let index = 0; index < pNumberOfCars; index++) {
            this.#carList.push(Car.generator());
        }
    }

    /**
     *Pistin nesne disina cikarilmasini saglar
     */
    getRaceTrack(){
        return this.#raceTrack;
    }
}
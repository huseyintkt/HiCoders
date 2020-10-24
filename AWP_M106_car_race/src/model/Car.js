/**
 * Yaristaki arabalari temsil eder
 * Su özellikleri vardir: ps, tekerlek büyüklügü, agirligi, pitstop
 */
class Car{

    #drivenDistance = 0;                        // Arabanin yaris icinde toplam katettigi yol
    #id = Utility.generateUniqueId();           // Arabaya ait evrensel tekil id
    #name = Utility.generatePersonName();       // rasagele bir isim üretilir.
    #color = Utility.generateColor();           // rastgele bir renk üretilir
    #image = Utility.generateImage();           // rastgele bir sürücü resmi üretir.

    constructor(pPs, pTekerlekGenisligi, pAgirlik, pPitStopSayisi = 0){
        this.ps = pPs;
        this.tireWidth = pTekerlekGenisligi;
        this.weight = pAgirlik;
        this.numberPitStops = pPitStopSayisi;
    }

    /**
     * Arabanin rastgele degerler ile üretilmesini saglayan bir static metoddur.
     */
    static generator(){
        let ps = Utility.generateRandomNumber(150, 90);
        let tireWidth = Utility.generateRandomNumber(50, 20);
        let weight = Utility.generateRandomNumber(4000, 1500); 
        let pitstop = Utility.generateRandomNumber(3, 1); 

        return new Car(ps, tireWidth, weight, pitstop);
    }

    /**
     * Arabayi baslangic cizgisine konuslandirir
     */
    moveToStartLine(){
        this.#drivenDistance = 0;
    }

    /**
     * Oyun döngüsü icinde bir sonraki adimi hesaplar.
     */
    move(pStateFactor){
        let nextDistance = this.ps * 1/this.tireWidth * 1/(this.weight/1000) * ((1/this.numberPitStops) * 0.2) * 100;
        this.#drivenDistance += pStateFactor * (nextDistance + Utility.generateRandomNumber(30, 100));

        return this.#drivenDistance;
    }

    /**
     * Verilen uzunluk ile (pistin uzunlugu) arabanin katettigi yolu karsilastirir
     * ¨Katedilen yol büyük ise araba yarisi bitirmistir.
     * @param {Long} pTotalDistance 
     */
    isWinner(pTotalDistance){
        return this.#drivenDistance >= pTotalDistance;
    }

    /**
     * Kartedeilen yolu nmesne disina verir
     */
    getDriveDistance(){
        return this.#drivenDistance;
    }

    /**
     * ID bilgisini nesne disina verir.
     */
    getId(){
        return this.#id;
    }

    /**
     * Sürücü ismini nesne disina verir.
     */
    getName(){
        return this.#name;
    }

    /**
     * Arabanin rengi bilgisini nesne disina ulasilabilir yapar.
     */
    getColor(){  
        return this.#color;
    }

    /**
     * Sürücü resmini disaridan ulasilabilir yapar
     */
    getImage(){
        return this.#image;
    }
}
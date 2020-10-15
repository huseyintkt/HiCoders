
/**
 * Bu applikasyon, Ferruh emminin dukkaninda daha hizli ve kaliteli hizmet vermesi icin yapilmistir.
 * 
 * User Interaction
 *     - Musteri, satin almak istedigi sekerlerin sayisini belirler.
 *     - Musteri "Toplam fiyati hesapla" butonuna tiklar.
 *     - Toplam fiyat (sekerlerin fiyati ile posetlerin fiyatinin toplami) musteriye gosterilir. 
 *     - Musteri "Odemeyi tamamla" butonuna tiklayarak alis verisini tamamlar.
 * 
 * Technical Details
 *      - Sekerler icin "Candy.js" modelini olustur.
 *      - Posetler icin "Box.js" modelini olustur.
 *      - input spinner icin "SpinnerView.js" olustur.
 *      - Arkaplanda calisacak kodlar icin "ManagerView.js" olustur.
 *          - calculate() => Toplam fiyati hesaplar.
 *          - getTotalPriceOfProducts() => Sadece urunlerin toplam fiyatini hesaplar.
 *          - getTotalVolumeOfProducts() => Urunlerin toplam hacmini hesaplar.
 *          - getTotalPriceOfBoxes() => Sadece posetlerin toplam fiyatini hesaplar.
 *          - convertFrankToRappen() => Rappen'i frank'a cevirir.
 *          - completePayment() => Odemeyi tamamlar.
 */

/**
 * Sekerleri olusturur.
 */
const yuvarlakCandy = new Candy("Yuvarlak", 50, 3);
const burguluCandy = new Candy("Burgulu", 20, 2.5);
const jelibonCandy = new Candy("Jelibon", 45, 2.75);
const akideCandy = new Candy("Akide", 26, 5);
const lokumCandy = new Candy("Lokum", 8, 1.5);

/**
 * Posetleri olusturur.
 */
const largeBox = new Box("Large", 750, 70);
const mediumBox = new Box("Medium", 400, 35);
const smallBox = new Box("Small", 250, 20);

const managerView = new ManagerView();

const calculateTotalBtn = document.querySelector("#calculate-btn");
const completePaymentBtn = document.querySelector("#complete-payment-btn");

calculateTotalBtn.addEventListener("click", function () {
    managerView.calculate();
});

completePaymentBtn.addEventListener("click", function () {
    managerView.completePayment();
});
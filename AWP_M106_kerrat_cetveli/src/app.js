/**
 *  
 * Bu applikasyon, Selami bey'in cocuklarinin carpim tablosunu eglenceli bir sekilde ogrenmeleri icin yapilmistir.
 * 
 * User Interaction
 *     - Selami bey programi baslattiginda cocuklari kayitli degildir. 
 *     - Bu yuzden ilk olarak cocuklarini tek tek kayit etmelidir.
 *     - Kayit isleminden sonra her cocuk solda bulunan panelinden calismasini baslatabilir.
 *     - Cocuk calismaya basladiginda sayfa fullScreen moda gecer ve arkaplanda muzik calmaya baslar.
 *     - Bu asamadan sonra cocuga random olarak carpim tablosundan sorular gelmeye baslar.
 *     - Cocuk cevabini ilgili kutucuga yazar ve cevapla butonuna tiklar.
 *     - Eger cevabi dogruysa soldaki panelinde bulunan puani 10 artar.
 *     - Eger cevabi yanlis ise puanında herhangi bir degisiklik olmaz.
 *     - Bu sekilde bir oturumda toplam 10 soru sorulur. 
 *     - 10 soru soruldugunda oturum sonlandirilir, fullScreen moddan cikilir ve calan muzik durdurulur.
 *     - Cocuk 10 soru sorulmadan "calismayi bitir" butonuna tiklayarak oturumu sonlandirabilir.
 *     - Bu durumda yine fullScreen moddan cikilir ve calan muzik durdurulur.
 *     - Program kapansa bile Selami bey aksam cocuklarin puan durumlarini gorebilir ve gunun birincisine hediyesini verebilir.
 * 
 * Technical Details
 *      - DOM islemleri icin DomView.js olustur.
 *      - Her cocuk bilgisi icin Person.js olustur.
 *      - Gerekli metodlari icerisinde barindiracak PersonController.js olustur.
 *              - addPerson() => Yeni cocuk ekler.
 *              - renderPeople() => Kayitli cocuklari listeler.
 *              - getPerson() => Parametre olarak gonderilen id'ye gore ilgili cocugun bilgilerini      dondurur.
 *      - Gerekli metodlari icerisinde barindiracak WorkerController.js olustur.
 *              - startMusic() => Arkaplanda calacak muzigi baslatir.
 *              - finishWorking() => Calismayi sonlandirir. 
 *              - startWorking() => Calismak icin oturum baslatir.
 *              - getNewQuestion() => Random olarak yeni soruyu getirir.
 *              - calculate() => Cocuk dogru cevap verdiginde puanini gunceller.
 *              - getRandomNumber() => 0 ile 10 arasinda random sayi dondurur.
 */

let people = [];
let counter = 0;
let audi = new Audio();

let personController = new PersonController();
let workerController = new WorkerController();

personController.renderPeople();
addNewPersonBtn.addEventListener("click", personController.addPerson);
peopleListContainer.addEventListener("click", workerController.startWorking);
getNextAskBtn.addEventListener("click", workerController.calculate);
finishSessionBtn.addEventListener("click", workerController.finishWorking);
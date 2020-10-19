
/**
 * Bu applikasyon, bilgileri girilen bir kisiyi kayit eder. Kayitli kisileri tabloda listeler. Ayni zamanda tablo uzerinde siralama ve filtreleme imkani sunar.
 * 
 * Applikasyon akisi
 *   - Kullanici solda bulunan formdan isim, soyisim bilgilerini girer ve kanton bilgisini secer.
 *   - Bilgileri girdikten sonra Kaydet butonuna tiklar.
 *   - Tiklama isleminden sonra bu bilgiler kayit edilir.
 *   - Tiklama isleminden sonra form alanlari temizlenir.
 *   - Her kayit isleminden sonra tüm kisiler sagdaki tabloda listelenir.
 *   - Listelenen tabloda isim, soyisim ve kantona gore siralama yapilabilir. (Hem a'dan z'ye hem de z'den a'ya)
 *   - Tablonun ustunde bulunan arama kutusuna yazılan isim veya soyisime gore filtreleme islemi yapilabilir.
 */

let person = new Person();
let canton = new Canton();
let sort = new Sort();
let filter = new Filter();
let dom = new DOM();
let manager = new Manager();

/**
 * Applikasyonu baslat
 */
manager.start();
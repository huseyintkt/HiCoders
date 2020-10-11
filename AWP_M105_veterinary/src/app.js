
/**
 * Bu applikasyon, Niyazi bey'in is yerindeki gunluk istatistiklerini net bir sekilde gorebilmesi icin yapilmistir.
 * 
 * User Interaction
 *  
 *     - Uygulama basladiginda, sure "config.js" dosyasinda belirtilen saniyeden geriye saymaya baslar. Kalan sure, surekli ekranda gosterilir.
 *     - Uygulama basladiginda, 4 veteriner olusturulur.
 *     - Uygulama basladiginda, random olarak "config.js" dosyasinda belirtilen sayi kadar hayvan olusturulur.
 *     - Musait olan veteriner uzmanlik alanina gore siradaki hayvanlardan alir ve muayene eder.
 *     - Veterinerin muayenesi bitince 1 saniye dinlenir ve tekrar kuyruktan uzmanlik alanina gore hayvan alir.
 *     - 4 veteriner de asenkron bir sekilde boyle calismaya devam eder.
 *     - Sure tamamlandiginda hem veterinerlerin gunluk istatistiksel bilgileri hem de tum gunun istatistiksel bilgileri ekrana yazdirilir. 
 *     - Boylece Niyazi bey bu istatistiklere bakarak is yeri ile ilgili daha isabetli kararlar alabilecektir.
 */

"use strict";

let veterinaryController = new VeterinaryController();
let animalController = new AnimalController();
let timeView = new TimerView();
let reportView = new ReportView();
let managerController = new ManagerController();

/* 4 veterineri icerisinde tutan dizi */
let veterinaries = veterinaryController.createVeterinaryList();
let niyazi = veterinaries[0];
let yasemin = veterinaries[1];
let cabbar = veterinaries[2];
let eleni = veterinaries[3];

/* Random olarak olusturulan 300 hayvani icerisinde tutan dizi */
let animals = animalController.createAnimalList();

/**
 * ontick : Her saniyede ekrana kalan sureyi yazdirir.
 * onstart : Uygulama baslatildiginda arka planda calisacak metodlari baslatir.
 * onend : 180 saniye sona erdiginde gunun tum istatistiksel bilgilerini ekrana yazdiran metodlari baslatir.
 */
var timer = new Timer({
    tick : 1,
    ontick : function(ms) {         
        timeView.writeTheTimeOnTheScreen(Math.ceil(ms/1000));       
    },
    onstart : function() { 
        timeView.writeStartOnTheScreen();
        managerController.getAnimalForNiyazi(niyazi, animals);
        managerController.getAnimalForYasemin(yasemin, animals);
        managerController.getAnimalForCabbar(cabbar, animals);
        managerController.getAnimalForEleni(eleni, animals);
    },
    onend : function() { 
        timeView.writeEndOnTheScreen();
        reportView.writeNiyaziReportsOnTheScreen(niyazi,animals);
        reportView.writeYaseminReportsOnTheScreen(yasemin,animals);
        reportView.writeCabbarReportsOnTheScreen(cabbar,animals);
        reportView.writeEleniReportsOnTheScreen(eleni,animals);
        reportView.writeAllReportsOnTheScreen(veterinaries, animals);
    }
});

/* Timer'i "config.DURATION" degerinden geriye dogru baslatir */
timer.start(config.DURATION);
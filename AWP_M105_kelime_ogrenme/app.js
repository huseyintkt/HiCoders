/**
 * Bu applikasyon, ingilizce kelime ogrenimini daha zevkli bir hale getirmek icin yapilmistir.
 * 
 * Applikasyon akisi
 * - Kullanici applikasyonu actiginda ona ingilizce bir kelime gosterilecek.
 * - Gosterilen kelimenin altinda turkce olarak 4 secenek bulunacak. 
 * - Bu seceneklerden sadece 1 tanesi dogru diger 3'u yanlis olacak.
 * - Ekranin ust tarafinda dogru sayisi ve yanlis sayisi en basta 0 olarak gorunecek.
 * - Kullanici seceneklerden bir tanesine tikladiginda,
 *      - Dogru cevabin arka plan rengi yesil olacak.
 *      - Diger 3 yanlis cevabin arka plan rengi kirmizi olacak.
 * - Kullanicinin dogru veya yanlis cevaplamasina gore ekranin yukarisindaki dogru ve yanlis alanlari guncellenecek.
 * - Her tiklamadan 2 saniye sonra yeni kelime ve yeni secenekler gosterilecek.
 * - Bir oturumda toplam 8 kelime gosterilecek. Oturum tamamlandiginda ise kullaniciya almis oldugu puan gosterilecek.
 * - Kullanici, bilgilendirme ekraninda gosterilen "Yeni Test" butonuna tiklayarak yeni bir oturum baslatabilir.
 */

renderWordAndAnswers(words, remainingWords);

addEventListenerAnswers();

addEventListenerNewTest();



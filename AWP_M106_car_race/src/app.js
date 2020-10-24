
/**
 * Car race
 * Pistin baslangic cizgisinde x kadar farkli renkte araba olur.
 * Yaris baslatildiginda arabalar ps, tekerlek büyüklügü, agirligi, pitstop degerlerine göre hizlanmaya baslarlar ve finish cizgisne dogru ilerler.
 * Finish cizgisine ilk ulasan araba yarisi kazanir.
 * 
 * Yaris icinde ilgili noktalarda secilen arabalarinhizlarini bir anda 0'a düsüren sistemler vardir.
 * 
 * 
 * Analysis
 * - Model OBJELERI: RaceManager, RaceTrack, DistruptionSystem, Car, PitStop
 * - View OBJELERI: ViewController, CarView, RaceTrackView
 * Programi M;odel ve View objeleri olarak ikiye ayirdim ki DOM manipulasyonlari minimuma insin ve kendine has bir yerde yapilsin.
 * 
 * RaceManager evvela Pist nesnesini olusturur ve o pistin uzunlugunu belirler.
 * Yine RM rastgele bir sekilde x kadar arabayi olusturur ve Pist'e ekler.
 * RM yarisi baslatir.
 * 
 * Yaris bir setInterval timer yardimi ile calisacak.
 * Her güncelleme araliginda arabalar bir sonraki kendi adimlarini hesaplayacak ve geri verecekler.
 * her güncelleme de Pist hangi arabanin finish cizigini gecitigne kontrol eder.
 * Pist RM'a yarisin bittigini ve hangi arabanin kazandigini iletir.
 * RM'da bu bilgiyi seyircilerle (View) paylasir ve sonuc ekrar basilir.
 */

 const viewController = new ViewController();
 new RaceManager(
                    Utility.generateRandomNumber(4, 10), 
                    1000, 
                    viewController.progressHandler, 
                    viewController.raceFinishedHandler
                 ).start();

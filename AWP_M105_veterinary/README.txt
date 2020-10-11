PROJECT DETAILS

Niyazi gül bey veterinerlik kariyerinin zirvesinde kendine ait büyük bir PRAXIS acmistir. Praxis bünyesinde sadece su hayvanlara hizmet verilmektedir: 
    - Kedi
    - Karga 
    - Hamsi
Bu praxisin genis bir müsteri kitlesi vardir ve Niyazi Gül bey sisteminin ne kadar müsteriyi ne kadar zamanda kac veteriner ile sürdürebilecegini bilememektedir. Bu yüzden kendisi bize basvurmustur. Istegi müsteri yogunluguna göre kac veterinerin paralel calismasi veya hangi yüzdelikle calismasi gerektigini ölcebilecek bir simülasyon programi yaptirmaktir.

Asagidaki parameterler bilinmektedir:
    - Hamsilerin herbirinin tedavi süresi 2 saniye, kargalarin 4 saniye, kedilerin ise 6 saniye sürmektedir.
    - Is yerinin bir günü 180 saniyedir.
    - Doktrolar tedaviler arasinda 1sn dinlenmektedir
    - Her hayvanin yasi ve sahibinin ismi alinmalidir.
    - Hamsi tedavisi 40.-, kedi 100.- ve karga 150.- Franktir.

Praxisde su anda asagidaki veterinerler calismaktadir:
    - Niyazi Gül, hamsi ve kedi uzmani
    - Yasemin hanim, karga uzmani
    - Cabbar bey, kedi uzmani
    - Eleni hanim, hamsi uzmani

Opsiyonel:
    - Her hayvan taburcu oldugunda Web Audio API kullanilarak seslendirme yapilir.
    - Web Speech API (SpeechSynthesis) kullanilarak sonularin okutulmasi.
    - Tüm bu islemlerin web sayfasi üzerinde resmedilmesi.

Program akisi:
==============
Sistem, rastgele olarak hayvanlar üretir. Her doktora, bekleyen ve kendisinin uzmanlik alaninda olan hayvan, eger müsait ise verilir ve doktor tedavisini görür ve taburcu eder. Gün bittiginde ekrana
    - Toplamda kac hayvanin tedavi icin kaydoldugu
    - Hangi doktorun gün icinde kac hayvana baktigi
    - Her bir doktorun ne kadar kazandirdigi
    - Türlerine göre Islemi yapilamayan hayvan sayisi
    - Tedavisi yapilanlarin yüzdelik sayilari
gibi Niyazi Gül beye yardimci olabilecek istatistiksel bilgilerin gosterimi yapilmasi gerekiyor.
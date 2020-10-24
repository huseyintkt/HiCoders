/**
 * Bu nesne pist tarafindan kullanilir ve pistin degisik yerlerinde arabalarin ariza yapmasi, pitstop girmesi gibi durumlari simule esip zaman kaybettirir
 * Diger bir deyisle yarisa heyecan katar.
 */
class DistruptionSystem{
    isActive(){
        return Math.random() < 0.5 ? 0 : 1;
    }
}
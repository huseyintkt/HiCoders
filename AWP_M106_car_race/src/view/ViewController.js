/**
 * Bu class bütün DOM manipluationlari icerir ve CarView ve RaceTrackView objelerini kullarak ekrani olusturu.
 */
class ViewController{

    constructor(){}

    /**
     * Progress Callback
     * Bu metod RaceManagerin kullanmasi icin ödünc verilir. RaceManager metodu her güncelleme de kullanir.
     * Her cagrim da tüm ekran DOM'da güncellenir.
     * @param {RaceTrack} pRaceTrack 
     */
    progressHandler(pRaceTrack){
        let raceContainer = document.querySelector("race");
        raceContainer.innerHTML = `${new RaceTrackView(pRaceTrack)}`; 
    }

    /**
     * Bitis Callback'i
     * Bu metod ise yarisin ilk kazanini gerceklesitiginde RaceManager tarafindan cagrilir.
     * Cagrim sonucunda kazana kisi(ler) ekranda gösterilir.
     * @param {RaceTrack} pRaceTrack 
     */
    raceFinishedHandler(pRaceTrack){
       let winners = pRaceTrack.getWinner().map(car => `${car.getName()}`).join("<br/>>")

       Swal.fire(
        'The race is over!',
        'The winner is <br/>' + winners,
        'success'
      )
    }
}
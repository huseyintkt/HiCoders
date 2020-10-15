
class ManagerView{

    /**
     * Bu fonksiyon, parametre olarak gonderilen id'ye gore ilgili Html nesnesini secer. 
     */
    getElementById(pId) {
        return document.querySelector(`#${pId}`);
    }

    /**
     * Bu metod, toplam fiyati hesaplar ve ekrana yazdirir.
     */
    calculate(){    
        let totalPriceOfProducts = this.getTotalPriceOfProducts();
        let totalVolumeOfProducts = this.getTotalVolumeOfProducts();
        let totalPriceOfBoxes = this.getTotalPriceOfBoxes(totalVolumeOfProducts);
        let totalPrice = totalPriceOfProducts + totalPriceOfBoxes;  
        this.getElementById("total-price").innerHTML = totalPrice;
        this.getElementById("complete-payment-btn").classList.remove("hide");
    }

    /**
     * Bu metod, urunlerin toplam fiyatini hesaplar.
     */
    getTotalPriceOfProducts(){
        let priceYuvarlak = this.getElementById("spinner-yuvarlak").value * yuvarlakCandy.price;
        let priceBurgulu = this.getElementById("spinner-burgulu").value * burguluCandy.price;
        let priceJelibon = this.getElementById("spinner-jelibon").value * jelibonCandy.price;
        let priceAkide = this.getElementById("spinner-akide").value * akideCandy.price;
        let priceLokum = this.getElementById("spinner-lokum").value * lokumCandy.price;
        let totalPriceOfProducts = priceYuvarlak + priceBurgulu + priceJelibon + priceAkide + priceLokum;
        return totalPriceOfProducts;
    }
    
    /**
     * Bu metod, urunlerin toplam hacmini hesaplar.
     */
    getTotalVolumeOfProducts(){
        let volumeYuvarlak = this.getElementById("spinner-yuvarlak").value * yuvarlakCandy.size;
        let volumeBurgulu = this.getElementById("spinner-burgulu").value * burguluCandy.size;
        let volumeJelibon = this.getElementById("spinner-jelibon").value * jelibonCandy.size;
        let volumeAkide = this.getElementById("spinner-akide").value * akideCandy.size;
        let volumeLokum = this.getElementById("spinner-lokum").value * lokumCandy.size;
        let totalVolumeOfProducts = volumeYuvarlak + volumeBurgulu + volumeJelibon + volumeAkide + volumeLokum;
        return totalVolumeOfProducts;
    }

    /**
     * Bu metod, kucuk orta ve buyuk posetlerden kacar tane lazim oldugunu hesaplar. Ortaya cikan poset ihtiyacina gore masrafi rappen olarak hesaplar ama geriye frank olarak dondurur. 
     */
    getTotalPriceOfBoxes(totalVolumeOfProducts){
        let largeBoxCount = 0;
        let mediumBoxCount = 0;
        let smallBoxCount = 0;
        let remainingVolume = totalVolumeOfProducts;
        let totalRappenOfBoxes = 0;

        if(totalVolumeOfProducts >= largeBox.size){             
            largeBoxCount = Math.floor(totalVolumeOfProducts / largeBox.size);
            remainingVolume = totalVolumeOfProducts % largeBox.size;  
        } 

        if(remainingVolume > mediumBox.size && remainingVolume < largeBox.size){            
            largeBoxCount ++;
            remainingVolume = 0;
        }

        if(remainingVolume >= mediumBox.size){
            mediumBoxCount = Math.floor(remainingVolume / mediumBox.size);
            remainingVolume = remainingVolume % mediumBox.size;
        }

        if(remainingVolume > smallBox.size && remainingVolume < mediumBox.size){            
            mediumBoxCount ++;
            remainingVolume = 0;
        }

        if(remainingVolume >= smallBox.size){
            smallBoxCount = Math.floor(remainingVolume / smallBox.size);
            remainingVolume = remainingVolume % smallBox.size;
        }

        if(remainingVolume != 0 && remainingVolume <smallBox.size){
            smallBoxCount = smallBoxCount + 1;
        } 

        totalRappenOfBoxes = (largeBoxCount * largeBox.price) + (mediumBoxCount * mediumBox.price) + (smallBoxCount * smallBox.price);
        return this.convertFrankToRappen(totalRappenOfBoxes);
    }

    /**
     * Bu metod, parametre olarak gonderilen rappen degerini frank'a cevirir.
     */
    convertFrankToRappen(totalRappenOfBoxes){
        let totalFrankOfBoxes = totalRappenOfBoxes / 100;
        return totalFrankOfBoxes;
    }

    /**
     * Bu metod, odemeyi tamamla butonuna tiklandiginde alert ile kullaniciya bilgi verir.
     */
    completePayment(){
        Swal.fire({
            icon: 'success',
            title: 'Afiyet bal seker olsun :)',
            showConfirmButton: false,
            timer: 3000
        });
    }
}
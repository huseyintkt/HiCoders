/**
 * Bu fonksiyon, parametre olarak gonderilen balik listesindeki balik isimlerini console'a yazdirir.
 */
function printFishNames(pArray, pText){
    console.log(pText)
    pArray.map(item => {
        console.log(item.fishType)
    })
}

/**
 * Bu fonksiyon, parametre olarak gonderilen balik listesindeki ulke isimlerini console'a yazdirir.
 */
function printCountries(pArray, pText){
    console.log(pText)
    pArray.map(item => {
        console.log(item.originCountry)
    })
}

/**
 * Bu fonksiyon, parametre olarak gonderilen degeri console'a yazdirir.
 */
function printValue(pValue, pText){
    console.log(pText)
    console.log(pValue)
}

/**
 * Bu fonksiyon, AB den gelen balikleri filtreler.
 */
function getFishesFromEurope(pArray){
    return pArray.filter(item => 
        item.originCountry == "Norway" ||
        item.originCountry == "United Kingdom" ||
        item.originCountry == "Poland" ||
        item.originCountry == "France" ||
        item.originCountry == "Italy" ||
        item.originCountry == "GREECE" ||
        item.originCountry == "Spain"
    )
}

/**
 * Bu fonksiyon, AB disindan gelen balikleri filtreler.
 */
function getFishesFromOutsideEurope(pArray){
    return pArray.filter(item => 
        item.originCountry == "Japan" ||
        item.originCountry == "Egypt" ||
        item.originCountry == "Vietnam"
    )
}

/**
 * Bu fonksiyon, parametre olarak gonderilen balik listesinde parametre olarak gonderilen stok miktari uzerinde olanlari filtreler.
 */
function getFishesLargerThanStock(pArray, pStock){
    return pArray.filter(item => item.stockVolumeInKg > pStock)
}

/**
 * Bu fonksiyon, parametre olarak gonderilen balik listesinde fiyat araligi 9Fr. ile 12 Fr. arasindaki baliklari filtreler.
 */
function getFishInPriceRange(pArray, pLowerPrice, pUpperPrice){
    return pArray.filter(item => item.price > pLowerPrice && item.price < pUpperPrice)
}

/**
 * Bu fonksiyon, parametre olarak gonderilen balik listesinde sadece Bern'de ve kis sezonu satilan baliklari filtreler.
 */
function getFishesBySeasonAndLocation(pArray, pLocation, pSeason){
    return pArray.filter(item => (item.saleLocations.indexOf(pLocation) !== -1) && item.season == pSeason)
}

/**
 * Bu fonksiyon, fiyati 10 chf den kucuk olan baliklari filtreler ve sonra alfabetik siralar.
 */
function getFishesLessThanPrice(pArray, pUpperPrice){
    const listOfFishesLessThanPrice = pArray.filter(item => item.price < pUpperPrice)
    return listOfFishesLessThanPrice.sort(function(a, b){
        var x = a.fishType.toLowerCase();
        var y = b.fishType.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
    });
}

/**
 * Bu fonksiyon, toplam balik stogunu hesaplar.
 */
function calculateTotalFishStock(pArray){
    return pArray.reduce(( total, item) => total + item.stockVolumeInKg, 0)
}

/**
 * Bu fonksiyon, en pahalı olan baligi geri dondurur.
 */
function getTheMostExpensiveFish(pArray){
    return pArray.sort(function(prevItem, currentItem){
        return prevItem.price - currentItem.price}
    )[pArray.length-1];
}

/**
 * 
 */
function getFishesLongestStanding(pArray){
    const maxDurationInDays = pArray
                            .sort(function(a, b){return b.durationInDays - a.durationInDays})[0]
                            .durationInDays;
    return pArray.filter(item => item.durationInDays == maxDurationInDays)
}

/**
 * Bu fonksiyon, kis ve sonbahar sezonu icin swiss romande region'da satilan baliklarin ortalama fiyatini geri dondurur.
 */
function getAveragePriceForSRRWinterAutumn(pArray){
    const filteredFishList = pArray.filter(item => 
        ((
            item.saleLocations.indexOf("GE") !== -1) || 
            item.saleLocations.indexOf("VD") !== -1 || 
            item.saleLocations.indexOf("NE") !== -1
            ) 
        && 
        ((item.season == "Winter") || (item.season == "Autumn"))
    )
    const total = filteredFishList.reduce(( total, item) => total + item.price, 0)
    return total/filteredFishList.length;
}

/**
 * Bu fonksiyon, ticino kantonu icin stoktaki toplam balik miktarini geri dondurur.
 */
function getTotalStockForTicino(pArray){
    const filteredFishList = pArray.filter(item => item.saleLocations.indexOf("TI") !== -1)
    return filteredFishList.reduce(( total, item) => total + item.stockVolumeInKg, 0)
}

/**
 * Bu fonksiyon, yazın zurih de satilan balik listesini filtreler ve ortalama gramajini dondurur.
 */
function getFishesZurihInSummer(pArray){
    const fishListZurihInSummer = pArray.filter(item => (item.saleLocations.indexOf("ZH") !== -1) && item.season == "Summer")
    const total = fishListZurihInSummer.reduce(( total, item) => total + item.itemWeightInGrams, 0)
    return total/fishListZurihInSummer.length;
}
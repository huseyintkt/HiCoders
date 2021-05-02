const AMOUNT_OF_STOCK = 500;
const LOWER_PRICE = 9;
const UPPER_PRICE = 12;
const LOCATION_BE = "BE"
const SEASON_WINTER = "Winter"
const UPPER_PRICE_FOR_EUROPE = 10
const EUROPE_COUNTRIES = ["Norway","United Kingdom","Poland","France","Italy","GREECE","Spain"]

/**
 * 1) Stok miktari 500 kg uzerinde olan baliklarin isimleri nelerdir?
 */
const listOfFishLargerThanStock = getFishesLargerThanStock(fishFarm, AMOUNT_OF_STOCK)
printFishNames(listOfFishLargerThanStock, "Stok miktari 500 kg uzerinde olan baliklarin listesi :")

/**
 * 2) Fiyat araligi 9Fr. ile 12 Fr. arasindaki baliklar hangileridir?
 */
const listOfFishInPriceRange = getFishInPriceRange(fishFarm, LOWER_PRICE, UPPER_PRICE)
printFishNames(listOfFishInPriceRange, "Fiyat araligi 9Fr. ile 12 Fr. arasinda olan baliklarin listesi :")

/**
 * 3) Sadece Bern'de ve kis sezonu satilan baliklar hangileridir?
 */
const listOfFishBySeasonAndLocation = getFishesBySeasonAndLocation(fishFarm, LOCATION_BE, SEASON_WINTER)
printFishNames(listOfFishBySeasonAndLocation, "Sadece Bern'de ve kis sezonu satilan baliklarin listesi :")

/**
 * 5) Avrupa Birligi'nden (AB) gelen ve fiyati 10Fr dan dusuk olan baliklari alfabetik siraya gore siralayiniz.
 */
const listOfFishFromEurope = getFishesFromEurope(fishFarm, EUROPE_COUNTRIES)
const listOfFishesLessThanPrice = getFishesLessThanPrice(listOfFishFromEurope, UPPER_PRICE_FOR_EUROPE)
printFishNames(listOfFishesLessThanPrice, "Avrupa Birligi'nden (AB) gelen ve fiyati 10Fr dan dusuk olan baliklarin alfabetik listesi :")

/**
 * 6) Toplam balik stoku ne kadardir?
 */
const totalFishStock = calculateTotalFishStock(fishFarm)
printValue(totalFishStock, "Toplam balik stok miktari :")

/**
 * 7) En pahali olan balik hangisidir? 
 */
const theMostExpensiveFish = getTheMostExpensiveFish(fishFarm)
printValue(theMostExpensiveFish.fishType, "En pahalı olan balik :")

/**
 * 8) En uzun sureli durabilen baliklar hangi ulkeden gelmektedir?
 */
const listOfFishLongestStanding = getFishesLongestStanding(fishFarm)
printCountries(listOfFishLongestStanding, "En uzun sureli durabilen baliklarin ulkesinin listesi :")

/**
 * 9) Kis ve sonbahar sezonu icin swiss romande region'da satilan baliklarin ortalama fiyati nedir?
 */
const averagePriceForSRRWinterAutumn = getAveragePriceForSRRWinterAutumn(fishFarm)
printValue(averagePriceForSRRWinterAutumn, "Kis ve sonbahar sezonu icin swiss romande region'da satilan baliklarin ortalama fiyati :")

/**
 * 10) Ticino Kantonu icin stokta toplam ne kadar balik mevcuttur?
 */
const totalStockForTicino = getTotalStockForTicino(fishFarm)
printValue(totalStockForTicino, "Ticino Kantonu icin stoktaki toplam balik miktari :")

/**
 * 11) Yazlik sezonda cikan ve AB disindan gelen ve de ZH'de satilan baliklarin ortalama gramajini bulunuz?
 */
const listOfFishFromOutsideEurope = getFishesFromOutsideEurope(fishFarm)
const averageFishListZurihInSummer = getFishesZurihInSummer(listOfFishFromOutsideEurope)
printValue(averageFishListZurihInSummer, "Yazlik sezonda cikan ve AB disindan gelen ve de ZH'de satilan baliklarin ortalama gramaji :")
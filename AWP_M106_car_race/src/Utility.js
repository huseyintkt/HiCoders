/**
 * 
 */
class Utility{
  
   /**
     * ...
     * @param {Long} pMax 
     * @param {Long} pMin 
     */
    static generateRandomNumber(pMax, pMin){
        return Math.floor(Math.random() * (pMax - pMin + 1) + pMin);
    }

    /**
     * 
     */
    static generateColor(){
        return faker.internet.color();
    }

    /**
     * 
     */
    static generatePersonName(){
        return faker.name.findName();
    }

    /**
     * 
     */
    static generateUniqueId(){
        return faker.random.uuid();
    }

    /**
     * 
     */
    static generateImage(){
        return faker.image.avatar();
    }
}
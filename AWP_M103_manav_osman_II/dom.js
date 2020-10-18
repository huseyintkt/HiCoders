
class DOM {
    
    /**
     * 
     * Bu fonksiyon, parametre olarak gonderilen id'ye gore ilgili Html nesnesini secer. 
     */
    getElementById(pId) {
        return document.querySelector(`#${pId}`);
    }

    /**
    * 
    * Bu fonksiyon, parametre olarak gonderilen Css secicisine gore ilgili Html nesnesini secer. 
    */
    getElementBySelector(pSelector) {
        return document.querySelector(`${pSelector}`);
    }
}

class DBController{

    /**
     * Bu metod, parametre olarak gonderilen musterileri localStorage'e kayit eder.
     */
    static setDB(pCustomers){
        pCustomers.forEach(customer => {
            localStorage.setItem(customer.id, JSON.stringify(customer));
        });
    }

    /**
     * Bu metod, localStorage'de kayitli musterileri bir diziye atar ve bu diziyi geri dondurur.
     */
    static getDB(){
        let customers = [];
        for (let i = 0; i < localStorage.length; i++) {   
            let customer = JSON.parse(localStorage.getItem(localStorage.key(i)));    
            customers.push(customer);            
        }
        return customers;
    }
}
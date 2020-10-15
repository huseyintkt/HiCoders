
class InitializerController{
    
    /**
     * Bu metod, applikasyon ilk baslatildiginda 1 defalik random olarak musterileri, musterilerin siparislerini ve siparislerin adreslerini uretip dondurur.
     */
    static generateData(){
        let customers = [];
        let customerCount = faker.random.number(3) + 1;

        for (let i = 0; i <customerCount; i++ ){
            let customerId = faker.random.uuid();
            let customerName = faker.name.firstName() + " " +faker.name.lastName();

            let orders = [];
            let orderCount = faker.random.number(4) + 1;

            for (let j = 0; j < orderCount; j++) {
                let orderId = faker.random.uuid();
                let orderName = faker.name.firstName() + " " +faker.name.lastName();
                let adress = [];
                let adressCount = faker.random.number(2) + 1;

                for(let k = 0; k < adressCount; k++){
                    let adressItem= faker.address.streetAddress();
                    adress.push(adressItem);
                }     
                let order = new Order(orderId, orderName, adress, false);
                orders.push(order);
            }
            let customer = new Customer(customerId, customerName, orders);
            customers.push(customer);            
        }       
        return customers;
    }
}
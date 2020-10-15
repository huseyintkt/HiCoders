
class CustomerController{

    /**
     * Bu metod, parametre olarak gonderilen id'ye sahip musteriyi geriye dondurur.
     */
    static getCustomerById(pId){
        let clickedCustomer;
        customers.forEach(customer => {
            if(customer.id == pId ){               
                clickedCustomer = customer;
            }
        });
        return clickedCustomer;
    }
}
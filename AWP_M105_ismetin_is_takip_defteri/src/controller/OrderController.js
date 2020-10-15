
class OrderController{

    /**
     * Bu metod, parametre olarak gonderilen id'ye sahip siparisi geriye dondurur.
     */
    static getOrderById(pId){
        let clickedOrder;
        customers.forEach(customer => {
            customer.orders.forEach(order => {
                if(order.id == pId ){               
                    clickedOrder = order;
                }
            })         
        });   
        return clickedOrder;
    }
}
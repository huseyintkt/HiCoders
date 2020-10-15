
class OrderView{
    
    /**
     * Bu metod, parametre olarak gonderilen musterinin siparislerini ekrana yazdirir.
     */
    static renderOrder(pCustomer){
        let orderContainer = document.querySelector("#orders");
        orderContainer.innerHTML = pCustomer.orders.map(order =>{
            return `${order.status ? '<li class="list-group-item delivered-order">' : '<li class="list-group-item">'}${order.name}<button id="${order.id}" class="btn btn-info float-right delivered">Teslim Edildi</button><button id="${order.id}" class="btn btn-info float-right mr-3 address">Adres</button></li>`
       }).join("");
    }
}
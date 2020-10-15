
class CustomerView{

    /**
     * Bu metod, parametre olarak gonderilen musterileri ekrana yazdirir.
     */
    static renderCustomer(pCustomers){
        let customerContainer = document.querySelector("#customers");
        customerContainer.innerHTML = pCustomers.map(customer =>{
            return `<li class="list-group-item">${customer.name}<button id="${customer.id}" class="btn btn-info float-right">Siparis Detay</button></li>`;
        }).join("");
    }
}
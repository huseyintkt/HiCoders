
class AddressView{
    
    /**
     * Bu metod, parametre olarak gonderilen siparisin adreslerini ekrana yazdirir.
     */
    static renderAddress(pOrder){
        let addressContainer = document.querySelector("#addresses");
        addressContainer.innerHTML = pOrder.addresses.map(address =>{
            return `<li class="list-group-item">${address}</li>`;
        }).join("");
    }
}
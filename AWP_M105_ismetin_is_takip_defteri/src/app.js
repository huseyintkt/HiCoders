/**
 * Bu applikasyon, Ismet Bey'in musterileri ile ilgili bilgileri daha kolay bir sekilde takip edebilmesi icin yapilmistir. 
 * 
 * User Interaction
 *      - Applikasyon ilk calistirildiginda bir defalik musteriler, musterilerin siparisleri ve siparislerin adresleri random olarak olusturulur ve localStorage'e kayit edilir.
 *      - Ismet sisteme girdiginde ilk olarak musterilerinin listesini gorur.
 *      - Bir musterinin siparislerini gormek icin "Siparis Detay" butonuna tiklar.
 *      - Tiklanan musterinin tum siparisleri ekranda gosterilir.
 *      - Herhangi bir siparisin adreslerini gormek icin "Adres" butonuna tiklar.
 *      - Tiklanan siparisin tum adresleri ekranda gosterilir.
 *      - Siparis ile ilgili "Teslim Edildi" butonuna tiklanirsa ilgili siparisin teslim edildigini belirtmek icin ustu cizili hale getirilir.
 *      - Bilgiler localStorage'a kayit edilecegi icin Ismet sistemden cikip tekrar giris yaptiginda tum bilgiler son haliyle ekrana getirilir.
 * 
 * 
 * Technical Details
 *      - Models
 *          - Musteri bilgileri icin Customer.js olustur.
 *          - Siparis bilgileri icin Order.js olustur.
 * 
 *      - Views
 *          - Musteri bilgilerini ekrana yazdirmak icin _CustomerView.js olustur.
 *              - renderCustomer()
 *          - Siparis bilgilerini ekrana yazdirmak icin _OrderView.js olustur.
 *              - renderOrder()
 *          - Adres bilgilerini ekrana yazdirmak icin _AddressView.js olustur.
 *              - renderAddress()
 * 
 *      - Controllers
 *          - Fake data uretmek icin InitializerController.js olustur.
 *              - generateData() => Fake data uretir.
 * 
 *          - localStorage islemleri icin DBController.js olustur.
 *              - setDB() => Olusturulan fake datayı localStorage'e kaydeder.
 *              - getDB() => localStorage'de kayitli bilgileri getirir.
 * 
 *          - Musteriler ile ilgili islemler icin CustomerController.js olustur.
 *              - getCustomerById() => Gonderilen id'ye sahip musteriyi getirir.
 * 
 *          - Siparisler ile ilgili islemler icin OrderController.js olustur.
 *              - getOrderById() => Gonderilen id'ye sahip siparisi getirir.
 */

 /**
  * localStorage bos ise fake data uretip localStorage'e kaydeder.
  */
if(localStorage.length === 0){
    const customers = InitializerController.generateData();
    DBController.setDB(customers);
}
/** localStorage'den kayitli musterileri getirir. */
let customers = DBController.getDB();

/** Musterileri ekrana yazdirir. */
CustomerView.renderCustomer(customers);

/**
 * "Siparis Detay" butonuna tiklandiginda o musteriye ait siparisleri ekrana yazdirir.
 */
document.querySelector("#customers").addEventListener("click", function (e) {
    let customerId = e.target.id;
    let currentCustomer = CustomerController.getCustomerById(customerId);
    document.querySelector("#orders").setAttribute("data-customerId",customerId);
    OrderView.renderOrder(currentCustomer);
    document.querySelector("#addresses").innerHTML = "";
});

/**
 * "Adres" butonuna tiklandiginda o siparise ait adresleri ekrana yazdirir.
 */
document.querySelector("#orders").addEventListener("click", function (e) {
    let orderId = e.target.id;
    let currentOrder = OrderController.getOrderById(orderId);
    if(e.target.className.includes("address")){        
        AddressView.renderAddress(currentOrder);
    }    
});

/**
 * "Teslim Edildi" butonuna tiklandiginda o siparis ile ilgili gerekli islemleri yapar ve siparislerin guncellenmis halini tekrar ekrana yazdirir.
 */
document.querySelector("#orders").addEventListener("click", function (e) {
    let orderId = e.target.id;
    let currentOrder = OrderController.getOrderById(orderId);
    if(e.target.className.includes("delivered")){              
       let customerId = document.querySelector("#orders").getAttribute("data-customerId");
       currentOrder.status = true;
       localStorage.setItem(customerId, JSON.stringify(CustomerController.getCustomerById(customerId)));
       OrderView.renderOrder(CustomerController.getCustomerById(customerId));
    }   
});
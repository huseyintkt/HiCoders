
class SpinnerView{

    /**
     * Bu metod, parametre olarak gonderilen id'ye sahip input'a spinner input ozelligi kazandirir.
     */
    static inputSpinner(id){
        let spinner = document.querySelector(`#${id}`);
        let spinnerVal = parseInt(spinner.value);

        spinner.previousElementSibling.addEventListener("click", function () {
            if (spinnerVal > 0) {
                spinnerVal--;
                spinner.setAttribute("value",spinnerVal);
            }
        }); 
          
        spinner.nextElementSibling.addEventListener("click", function () {
            if (spinnerVal < 100) {
                spinnerVal++;
                spinner.setAttribute("value",spinnerVal);       
            }
        });
    }
}

SpinnerView.inputSpinner("spinner-yuvarlak");
SpinnerView.inputSpinner("spinner-burgulu");
SpinnerView.inputSpinner("spinner-jelibon");
SpinnerView.inputSpinner("spinner-akide");
SpinnerView.inputSpinner("spinner-lokum");
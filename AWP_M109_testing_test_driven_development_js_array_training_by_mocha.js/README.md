Merhaba Arkadaslar,

- Ekli .zip dosyasini bilgisayarimiza kaydedip, sag click - extract all secenegi ile bir klasore aciyoruz.  
- app.js dosyasinda test caselerimiz bulunuyor. 
- 'Test case'lerde array tanimlama satiri ve sonda bulunan assertionlari degistirmeden, array metodlari ile asagida ornekte oldugu gibi arrayi manipule ediyoruz. 
- Boylece, index.html'de "Failed" olarak bulunan testleri "Passed" durumuna getirip, yesil renkli olmalarini sagliyoruz. 
- app.js'de Array bolumunu tamamladiktan sonra,  ana klasorde sag click - send to - compress zip folder secenegi ile tekrar zip dosyasi formatinda classroom'a yukleyebiliriz. 

Ornek: 
it('should result the right number', function () {
            var c = [3, 4, 9, 12]; // Array tanim satirini degistirmiyoruz.
            c.shift() //  Ilk tanimlanan arrayi array metodlari kullanarak beklenen sonuca gore degistiriyoruz. 
            c[0].should.equal(4); // 'Assertion'i degistirmiyoruz. 
        });

Happy coding!
-----------------------------------

# JS-Training
## Arrays

You find here some simple examples and edge cases to learn the js-basics better.
Feel free to give feedback for extending this training.

### Please fix all problems in the javascript files
Firstly, open your console.
In your console, you see all the examples are failing. You are expected to correct all the problems in the folder "js/app.js"
    

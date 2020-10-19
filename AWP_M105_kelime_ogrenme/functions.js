/**
 * 
 * Bu fonksiyon, parametre olarak gonderilen id'ye gore ilgili Html nesnesini secer. 
 */
function getElementById(pId) {
    return document.querySelector(`#${pId}`);
}

/**
 * 
 * Bu fonksiyon, parametre olarak gonderilen class'a gore ilgili Node List'i secer. 
 */
function getElementByClassName(pClass) {
    return document.querySelectorAll(`.${pClass}`);
}

/**
 * 
 * Bu fonksiyon, 0 (dahil) ile parametre olarak gonderilen dizinin uzunlugu (dahil degil) arasinda bir tamsayi geriye dondurur. 
 */
function getRandomNumber(pArray) {
    return Math.floor(Math.random() * pArray.length);
}

/**
 * 
 * Bu fonksiyon, 0'dan (dahil) 4'e (dahil degil) kadar bir tamsayi geriye dondurur. 
 */
function getRandomNumberForAnswer() {
    return Math.floor(Math.random() * 4);
}

/**
 * 
 * Bu fonksiyon, kelimelerin tutuldugu diziden rastgele bir kelimeyi secer ve ekrana yazdirir. Ayni zamanda secilen kelimenin dogru cevabini rastgele bir secenege (A,B,C,D gibi..) yazdirir. Diger yanlis olan 3 cevap ise yine rastgele olarak secilir ve yazdirilir.
 */
function renderWordAndAnswers(words, remainingWords) {

    let randomForWordShown = getRandomNumber(words);
    let wordShown = words[randomForWordShown].word;
    let trueMeaning = words[randomForWordShown].meaning;
    getElementById("word").innerHTML = wordShown;

    remainingWords[randomForWordShown].isActive = false;

    remainingWords = remainingWords.filter(item => {
        return item.isActive === true;
    });

    let randomNumberForTrueAnswer = getRandomNumberForAnswer();
    let answers = getElementByClassName("answers");

    for (i = 0; i < 4; i++) {
        if (i === randomNumberForTrueAnswer) {
            answers[randomNumberForTrueAnswer].innerHTML = trueMeaning;
        } else{            
            let randomNumberForFalseAnswer = getRandomNumber(remainingWords);

            answers[i].innerHTML = remainingWords[randomNumberForFalseAnswer].meaning;

            remainingWords[randomNumberForFalseAnswer].isActive = false;

            remainingWords = remainingWords.filter(item => {
                return item.isActive === true;
            });
        }                
    } 
}

/**
 * Bu fonksiyon, seceneklerden herhangi bir tanesine tiklandiginda sayaci 1 arttirir. Sayac 8 olana kadar tiklama oldugunda buradaki kodlar calistirilir. Kullanicinin dogru veya yanlis secenegi secme durumuna gore puan guncellenir. Dogru secenegin arkaplan rengi yesil, yanlis seceneklerin arkaplan rengi kirmizi yapilir. 2 saniye sonra yeni kelime gosterilir.
 */
function addEventListenerAnswers() {
    getElementById("answers-container").addEventListener("click", function(e) {
        counter ++;
        if(counter < 9){
            let clickedAnswer = e.target.innerText;
            let wordShown = getElementById("word").innerText;    
            let trueMeaning = words.find((item => {
                return item.word == wordShown;
            })).meaning;    
            if (clickedAnswer === trueMeaning) {
                updateScore(true);
            } else {
                updateScore(false);
            }    

            remainingWords.forEach(item =>{
                item.isActive = true;
            });

            makeGreenAndRedBackgroundColor("add", trueMeaning);
            
            setTimeout(function() { 
                makeGreenAndRedBackgroundColor("remove", trueMeaning);
                renderWordAndAnswers(words, remainingWords);
            }, 2000);
        }           
    });       
}

/**
 * Bu fonksiyon, seceneklerin arkaplan rengini durumuna gore kirmizi veya yesil yapar.
 */
function makeGreenAndRedBackgroundColor(pStatus, pTrueMeaning) {    
    if(pStatus === "add"){
        getElementByClassName("answers").forEach(item => {
            if(item.innerText == pTrueMeaning){
                item.classList.add("green");
            }else{
                item.classList.add("red");
            }               
        });
    }
    if(pStatus === "remove"){
        getElementByClassName("answers").forEach(item => {
            if(item.innerText == pTrueMeaning){
                item.classList.remove("green");
            }else{
                item.classList.remove("red");
            }               
        });
    }
}

/**
 * Bu fonksiyon, dogru ve yanlis sayilarini gunceller ve ekrana yazdirir.
 */
function updateScore(pStatus) {
    let trueAnswerCount = parseInt(getElementById("tb-info-true").innerText);
    let falseAnswerCount = parseInt(getElementById("tb-info-false").innerText);    
    if (pStatus) {
        trueAnswerCount ++;
    } else {
        falseAnswerCount ++;
    }
    getElementById("tb-info-true").innerHTML = trueAnswerCount;
    getElementById("tb-info-false").innerHTML = falseAnswerCount;
    calculateScore(trueAnswerCount, falseAnswerCount);
}

/**
 * Bu fonksiyon, toplam puani hesaplar. Eger oturum tamamlandiysa sonucu kullaniciya gosterir.
 */
function calculateScore(pTrueAnswerCount, pFalseAnswerCount) {
    let total = pTrueAnswerCount + pFalseAnswerCount;
    if(total === 8){
        let score = pTrueAnswerCount * 12.5;
        getElementById("tr-score").innerHTML = score;
        getElementById("test-result").classList = "";
    }
}

/**
 * Bu fonksiyon, kullanici eger yeniden bir oturum baslatmak isterse sayfayi yeniler. 
 */
function addEventListenerNewTest() {
    getElementById("start-test").addEventListener("click", function(e) {                
        window.location.reload(false);
    });       
}
"use strict";

class ReportView{

    /**
     * Bu metod, Niyazi ile ilgili gunluk istatistikleri ekrana yazdirir.
     */
    writeNiyaziReportsOnTheScreen(niyazi, animals){
        let dailyCatCount = 0;
        let dailyAnchovyCount = 0;
        let dailyEarnedMoney = 0;
        niyazi.jobs.forEach(item => {
            if(item.type === "Cat" ){
                dailyCatCount ++;
                dailyEarnedMoney = dailyEarnedMoney + 100;
            }
            if(item.type === "Anchovy" ){
                dailyAnchovyCount ++;
                dailyEarnedMoney = dailyEarnedMoney + 40;
            }
        });

        document.querySelector("#niyazi-cat").innerHTML = dailyCatCount;
        document.querySelector("#niyazi-anchovy").innerHTML = dailyAnchovyCount;
        document.querySelector("#niyazi-earned-money").innerHTML = dailyEarnedMoney;
    }

    /**
     * Bu metod, Yasemin ile ilgili gunluk istatistikleri ekrana yazdirir.
     */
    writeYaseminReportsOnTheScreen(yasemin, animals){
        let dailyCrowCount = 0;
        let dailyEarnedMoney = 0;
        yasemin.jobs.forEach(item => {
            if(item.type === "Crow" ){
                dailyCrowCount ++;
                dailyEarnedMoney = dailyEarnedMoney + 150;
            }
        });

        document.querySelector("#yasemin-crow").innerHTML = dailyCrowCount;
        document.querySelector("#yasemin-earned-money").innerHTML = dailyEarnedMoney;
    }

    /**
     * Bu metod, Cabbar ile ilgili gunluk istatistikleri ekrana yazdirir.
     */
    writeCabbarReportsOnTheScreen(cabbar, animals){
        let dailyCatCount = 0;
        let dailyEarnedMoney = 0;
        cabbar.jobs.forEach(item => {
            if(item.type === "Cat" ){
                dailyCatCount ++;
                dailyEarnedMoney = dailyEarnedMoney + 100;
            }
        });

        document.querySelector("#cabbar-cat").innerHTML = dailyCatCount;
        document.querySelector("#cabbar-earned-money").innerHTML = dailyEarnedMoney;
    }

    /**
     * Bu metod, Eleni ile ilgili gunluk istatistikleri ekrana yazdirir.
     */
    writeEleniReportsOnTheScreen(eleni, animals){
        let dailyAnchovyCount = 0;
        let dailyEarnedMoney = 0;
        eleni.jobs.forEach(item => {
            if(item.type === "Anchovy" ){
                dailyAnchovyCount ++;
                dailyEarnedMoney = dailyEarnedMoney + 40;
            }
        });

        document.querySelector("#eleni-anchovy").innerHTML = dailyAnchovyCount;
        document.querySelector("#eleni-earned-money").innerHTML = dailyEarnedMoney;
    }

    /**
     * Bu metod, tum gunluk istatistikleri ekrana yazdirir.
     */
    writeAllReportsOnTheScreen(veterinaries, animals){
        let totalEarnedMoney = 0;

        let NumberOfCatsExamined = 0;
        let NumberOfCrowsExamined = 0;
        let NumberOfAnchovysExamined = 0;

        let NumberOfCatsNotExamined = 0;
        let NumberOfCrowsNotExamined = 0;
        let NumberOfAnchovysNotExamined = 0;

        veterinaries.forEach(veterinary => {
            veterinary.jobs.forEach(job =>{
                totalEarnedMoney = totalEarnedMoney + job.cost;
                if(job.type === "Cat" ){ NumberOfCatsExamined ++; }
                if(job.type === "Crow" ){ NumberOfCrowsExamined ++; }
                if(job.type === "Anchovy" ){ NumberOfAnchovysExamined ++; }
            })
        });

        animals.forEach(animal =>{
            if(animal.type === "Cat" ){ NumberOfCatsNotExamined ++; }
            if(animal.type === "Crow" ){ NumberOfCrowsNotExamined ++; }
            if(animal.type === "Anchovy" ){ NumberOfAnchovysNotExamined ++; }
        });

        document.querySelector("#totalEarnedMoney").innerHTML = totalEarnedMoney;
        document.querySelector("#NumberOfAnimalsExamined").innerHTML = NumberOfCatsExamined + NumberOfCrowsExamined + NumberOfAnchovysExamined;
        document.querySelector("#NumberOfCatsExamined").innerHTML = NumberOfCatsExamined;
        document.querySelector("#NumberOfCrowsExamined").innerHTML = NumberOfCrowsExamined;
        document.querySelector("#NumberOfAnchovysExamined").innerHTML = NumberOfAnchovysExamined;
        document.querySelector("#NumberOfAnimalsNotExamined").innerHTML = NumberOfCatsNotExamined + NumberOfCrowsNotExamined + NumberOfAnchovysNotExamined;
        document.querySelector("#NumberOfCatsNotExamined").innerHTML = NumberOfCatsNotExamined;
        document.querySelector("#NumberOfCrowsNotExamined").innerHTML = NumberOfCrowsNotExamined;
        document.querySelector("#NumberOfAnchovysNotExamined").innerHTML = NumberOfAnchovysNotExamined;
    }
}
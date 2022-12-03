// ==UserScript==
// @name         Takipçi Kontrol
// @namespace    https://eksisozluk.com/
// @version      0.1
// @description  Ekşi Sözlük'te yeni gelen takipçileri ve takipten çıkanları gösteriyor.
// @author       You
// @match        https://eksisozluk.com/takipci/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=eksisozluk.com
// @grant        none
// @license MIT
// ==/UserScript==
 
 
 
window.addEventListener('load', function() {
    var x = document.querySelectorAll("#follows-nick");
    var i;
    const takipciler = [];
    for (i = 0; i < x.length; i++) {
        takipciler.push(x[i].innerHTML);
    }
    const storedTakipciler = JSON.parse(localStorage.getItem('takipciler'));
    let gelenler = takipciler.filter(x => !storedTakipciler.includes(x));
    let gidenler = storedTakipciler.filter(x => !takipciler.includes(x));
    if(gelenler.length>0){
        window.alert("Yeni gelen takipçiler: " + gelenler.join(", "));
    }
    if(gidenler.length>0){
        window.alert("Takipten çıkan takipçiler: " + gidenler.join(", "));
    }
    localStorage.setItem('takipciler', JSON.stringify(takipciler));
    //console.log(takipciler)
}, false);

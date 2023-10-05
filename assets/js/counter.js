var countEl = document.querySelector(".count");
var incrementBtn = document.querySelector(".increment");
var resetBtn = document.querySelector(".reset");

var count = '00';

function updateCount() {
    countEl.innerText = count;
}

incrementBtn.addEventListener("click", () => {
    count++;
    updateCount();
});


resetBtn.addEventListener("click", () => {
    count = "00";
    updateCount();
});


var countElone = document.querySelector(".counone");
var incrementBtnone = document.querySelector(".incrementone");
var resetBtnone = document.querySelector(".resetone");

var counter = '00';

function updateCountone() {
    countElone.innerText = counter;
}

incrementBtnone.addEventListener("click", () => {
    counter++;
    updateCountone();
});


resetBtnone.addEventListener("click", () => {
    counter = "00";
    updateCountone();
});

var countEltwo = document.querySelector(".countEltwo");
var incrementBtntwo = document.querySelector(".incrementBtntwo");
var resetBtntwo = document.querySelector(".resetBtntwo");

var countertwo = '00';

function updateCounttwo() {
    countEltwo.innerText = countertwo;
}

incrementBtntwo.addEventListener("click", () => {
    countertwo++;
    updateCounttwo();
});


resetBtntwo.addEventListener("click", () => {
    countertwo = "00";
    updateCounttwo();
});

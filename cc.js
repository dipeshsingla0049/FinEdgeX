
document.addEventListener("DOMContentLoaded", function () {
    const rates = {
        USD: 1,
        EUR: 0.92,
        GBP: 0.79,
        INR: 83,
        JPY: 151,
        AUD: 1.52
    };
    const from = document.getElementById("fromCurrency");
    const to = document.getElementById("toCurrency");
    const inputs = document.querySelectorAll(".input-group input");
    const amount = inputs[0];
    const result = inputs[1];
    const btn = document.querySelector(".btn-primary");
    btn.addEventListener("click", function () {
        let fromCur = from.value;
        let toCur = to.value;
        let amt = Number(amount.value);

        if (!amt || amt <= 0) {
            result.value = "Invalid";
            return;
        }

        let usd = amt / rates[fromCur];
        let converted = usd * rates[toCur];

        result.value = converted.toFixed(2);
    });
});



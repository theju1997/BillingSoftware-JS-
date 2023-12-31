var Smosa = 10,
    Kachori = 12,
    Vadapav = 60,
    Maggi = 50;
var smosa_q = 0,
    kachori_q = 0,
    vadapav_q = 0,
    maggi_q = 0;
var name = "",
    email = "";
var smosaBill = "",
    kachoriBill = "",
    vadapavBill = "",
    maggiBill = "";
var total_amount = 0;
document.getElementById("name").addEventListener("keyup", function() {
    document.getElementById("name2").innerHTML = this.value;
});

document.getElementById("email").addEventListener("keyup", function() {
    document.getElementById("email2").innerHTML = this.value;
});
document.getElementById("mobile").addEventListener("keyup", function() {
    document.getElementById("mobile2").innerHTML = this.value;
});

// For billing

document.getElementById("smosa").addEventListener("input", function () {
    smosa_q = parseInt(this.value) || 0;
    document.getElementById("bill-smosa").innerHTML = smosa_q + "x" + Smosa + " = " + smosa_q * Smosa;
    updateTotalAmount();
});

document.getElementById("kachori").addEventListener("input", function () {
    kachori_q = parseInt(this.value) || 0;
    document.getElementById("bill-kachori").innerHTML = kachori_q + "x" + Kachori + " = " + kachori_q * Kachori;
    updateTotalAmount();
});

document.getElementById("vadapav").addEventListener("input", function () {
    vadapav_q = parseInt(this.value) || 0;
    document.getElementById("bill-vadapav").innerHTML = vadapav_q + "x" + Vadapav + " = " + vadapav_q * Vadapav;
    updateTotalAmount();
});

document.getElementById("maggi").addEventListener("input", function () {
    maggi_q = parseInt(this.value) || 0;
    document.getElementById("bill-maggi").innerHTML = maggi_q + "x" + Maggi + " = " + maggi_q * Maggi;
    updateTotalAmount();
});

function updateTotalAmount() {
    total_amount = smosa_q * Smosa + kachori_q * Kachori + vadapav_q * Vadapav + maggi_q * Maggi;
    document.getElementById("amount").innerHTML = total_amount;
}

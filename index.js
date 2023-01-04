function zapremina() {
    var precnik = document.getElementById("precnik").value;
    var visina = document.getElementById("visina").value;
    const PI = 3.14;

    var rez = precnik * precnik * PI * visina;
    var c = document.getElementById("rez").innerHTML = `Zapremina valjka je: ${rez} cm2`;
};

var input = document.getElementById("visina");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("dugme").click();
}
});
function prikaz() {
  var pr = document.getElementById("wrapper").style.visibility = "hidden";
}

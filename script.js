const button = document.getElementById("button-afisare");
const output = document.getElementById("numar-telefon");

output.style.display = "none";

button.addEventListener("click", function() {
output.innerHTML = "+40774644304";
output.style.display = "block";
});
document.querySelector("#color").addEventListener("click", function() {
    console.log("change color!")
    bd = document.querySelector("body")
    bd.classList.toggle("scheme2")
});
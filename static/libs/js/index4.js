let latoInput = document.querySelector("[name=lato]")

latoInput.addEventListener("input", function (e) {
    
    l = parseInt(latoInput.value);
    console.log(`lato cambiato a --> ${l}`)
    pulizia()
})
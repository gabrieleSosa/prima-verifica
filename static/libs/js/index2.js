let latoInput = document.querySelector("[name=lato]")

latoInput.addEventListener("input", function (e) {
    
    lato = parseInt(latoInput.value);
    console.log(`lato cambiato a --> ${lato}`)
    pulizia()
})
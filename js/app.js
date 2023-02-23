let elForm = document.querySelector(".form")
let elInput = document.querySelector(".input")
let elBtn = document.querySelector(".Btn")
let elLIst = document.querySelector(".list")
let elOlma = document.querySelector(".olma")
let elgilos = document.querySelector(".gilos")
let elanor = document.querySelector(".anor")
let elkartoshka = document.querySelector(".kartoshka")
let elpiyoz = document.querySelector(".piyoz")
let elsabzi = document.querySelector(".sabzi")

elBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    // const inputVal = Number(elInput.value)
    const inputValue = elInput.value.toLowerCase()  
   if(inputValue === 'olma'){
    elOlma.textContent = elInput.value
  }else if(inputValue === 'gilos'){
    elgilos.textContent = elInput.value
  }else if(inputValue === 'anor'){
    elanor.textContent = elInput.value
  }else if(inputValue === "kartoshka"){
    elkartoshka.textContent = elInput.value
  }else if(inputValue === "piyoz" ){
    elpiyoz.textContent = elInput.value
  }else if(inputValue === "sabzi"){
    elsabzi.textContent = elInput.value
  }
  elInput.value = ""
})

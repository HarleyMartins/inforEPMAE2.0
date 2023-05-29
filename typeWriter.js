function typeWrite(elemento) {
  const textoArray = elemento.innerHTML.split("")
  elemento.innerHTML = " "
  textoArray.forEach(function (letra, i) {
    setTimeout(function () {
      elemento.innerHTML += letra
    }, 38 * i)
  })
}

const titulo = document.querySelector(".header-text_subtitle")
typeWrite(titulo)

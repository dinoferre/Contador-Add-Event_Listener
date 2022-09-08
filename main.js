// const botonAumentar = document.querySelector(".btn-info")
// const span = document.getElementById("span")
// let contador = 0

// botonAumentar.addEventListener("click", () => {
//   console.log("Diste Click en Aumentar")
//   contador++
//   span.textContent = contador
// })

// const botonDisminuir = document.querySelector(".btn-danger")

// botonDisminuir.addEventListener("click", () => {
//   console.log("Diste Click en Dosminuir")
//   contador--
//   span.textContent = contador
// })


const container = document.querySelector(".container")
const span = document.getElementById("span")
let contador = 0

container.addEventListener("click", (e) => {

  if(e.target.classList.contains("btn-info")){
    contador ++
    span.textContent = contador
  }

  if(e.target.classList.contains("btn-danger")){
    contador --
    span.textContent = contador
  }

  e.stopPropagation()
})



const corpo = document.getElementById("corpo")
const modoDark = document.querySelector(".estrela-dark")
const modoLight = document.querySelector(".light")
const modo = document.getElementById("div-modo-tela")

modoDark.addEventListener("click", () => {
    modoDark.style.display = "none";
    modoLight.style.display ="block";
    corpo.classList.add("dark");
})

modoLight.addEventListener("click", () => {
    modoLight.style.display = "none";
    modoDark.style.display = "block";
    corpo.classList.remove("dark");
})
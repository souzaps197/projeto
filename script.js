function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a img
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a img light
    img.setAttribute("src", "./assets/perfil-1.jpg")
  } else {
    //se tiver sem light mode, manter a img normal
    img.setAttribute("src", "./assets/perfil-1.jpg")
  }
}

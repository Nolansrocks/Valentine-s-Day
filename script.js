function checkPassword(){
  const pass = document.getElementById("password").value;

  if(pass === "13-04-2025"){
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("main-content").classList.remove("hidden");

    const music = document.getElementById("music");
    music.play();
  }else{
    document.getElementById("error").innerText = "Fecha incorrecta 😢";
  }
}

function checkPassword(){
  const pass = document.getElementById("password").value;

  if(pass === "13-04-2025"){
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("main-content").classList.remove("hidden");

    iniciarMusica();
    crearCorazones();
    escribirTexto();
  }else{
    document.getElementById("error").innerText = "Fecha incorrecta 😢";
  }
}

/* música fade */
function iniciarMusica(){
  const music = document.getElementById("music");
  music.volume = 0;
  music.play().catch(()=>{});

  let vol = 0;
  const fade = setInterval(()=>{
    if(vol < 1){
      vol += 0.05;
      music.volume = vol;
    }else{
      clearInterval(fade);
    }
  },200);
}

/* corazones */
function crearCorazones(){
  const cont = document.querySelector(".floating-hearts");

  setInterval(()=>{
    const heart = document.createElement("span");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random()*100 + "vw";
    heart.style.fontSize = (Math.random()*20+15)+"px";
    heart.style.animationDuration = (Math.random()*5+5)+"s";
    cont.appendChild(heart);

    setTimeout(()=>{heart.remove();},8000);
  },300);
}

/* texto maquina escribir */
const texto = `Lo siento por los inicios malos, las malas mañanas o las peleas por estupideces, 
pero te prometo que en cada momento de la vida, en cada latido de mi corazon hay una parte tuya que siempre resuena en mi, 
puede que no sea el mas listo, ni el mas apto, ni el mas fuerte, pero te prometo que por vos aprendo libros de memoria, 
me preparo para cualquier situacion y muevo montañas enteras porque sos esa chispa que enciende mis metas 
y nunca nadie te podra igualar...`;

function escribirTexto(){
  let i=0;
  const velocidad = 35;
  const cont = document.getElementById("mensaje");

  function escribir(){
    if(i < texto.length){
      cont.innerHTML += texto.charAt(i);
      i++;
      setTimeout(escribir, velocidad);
    }
  }
  escribir();
}

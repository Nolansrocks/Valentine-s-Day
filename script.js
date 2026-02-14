function checkPassword(){
  const pass = document.getElementById("password").value;

  if(pass === "13-04-2025"){
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("main-content").classList.remove("hidden");

    iniciarMusica();
    crearCorazones();
    escribirMensaje1();
  }else{
    document.getElementById("error").innerText = "Fecha incorrecta 😢";
  }
}

/* 🎵 MUSICA LOOP CON FADE */
function iniciarMusica(){
  const music = document.getElementById("music");
  music.loop = true;
  music.volume = 0;
  music.play().catch(()=>{});

  let vol = 0;
  const fade = setInterval(()=>{
    if(vol < 1){
      vol += 0.03;
      music.volume = vol;
    }else{
      clearInterval(fade);
    }
  },200);
}

/* ❤️ CORAZONES */
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

/* ✍️ TEXTOS */
const texto1 = `Lo siento por los inicios malos, las malas mañanas o las peleas por estupideces, 
pero te prometo que en cada momento de la vida, en cada latido de mi corazon hay una parte tuya que siempre resuena en mi, 
puede que no sea el mas listo, ni el mas apto, ni el mas fuerte, pero te prometo que por vos aprendo libros de memoria, 
me preparo para cualquier situacion y muevo montañas enteras porque sos esa chispa que enciende mis metas 
y nunca nadie te podra igualar...`;

const textoFinal = `Entre problemas y mundos destruidos voy a extender mi mano para que puedas alzarte y ver que el mundo entero es tuyo, que los buenos momentos los armamos juntos, que la historia que armamos nosotros prevalecerá y al final estaremos los dos brillando como nunca lo hicimos antes, para que mires atras y veas que yo voy a estar para vos en todo momento y que cuando mires hacia adelante tambien voy a estar yo esperandote para siempre dar el siguiente paso juntos, te amo con el alma candu, siempre para vos dylan <3`;

let escribiendo = false;

/* maquina escribir */
function escribirTexto(texto, callback){
  const cont = document.getElementById("mensaje");
  cont.innerHTML = "";
  let i = 0;
  escribiendo = true;

  function escribir(){
    if(i < texto.length){
      cont.innerHTML += texto.charAt(i);
      i++;
      setTimeout(escribir, 35);
    }else{
      escribiendo = false;
      if(callback) callback();
    }
  }
  escribir();
}

/* primer texto */
function escribirMensaje1(){
  escribirTexto(texto1, ()=>{
    document.getElementById("siguienteBtn").style.display="inline-block";
  });
}

/* boton siguiente */
function siguienteTexto(){
  if(escribiendo) return;

  document.getElementById("siguienteBtn").style.display="none";

  escribirTexto(textoFinal, ()=>{
    document.querySelector(".firma").style.opacity="1";
  });
}


var botonDos = document.querySelector("#btn2");
var mensaje = document.querySelector("#txt-input").value



function desencriptar(){
    document.getElementById("inicial").style.display = "none";
    var msjDesencriptado = "";
    var mensaje = document.querySelector("#txt-input").value;
    var mayus = /[A-Z]/g;
    var caracteres = /[~áéíóúàèìòùÁÉÍÓÚ']/g;

    if(mensaje == ""||mensaje.match(mayus)!= mensaje.match(mayus)||mensaje.match(caracteres) != mensaje.match(caracteres)){
        resultado(no)
        document.getElementById("inicial").style.display = "";
    }
    else{
        msjDesencriptado = mensaje.replace(/ai/g, "a").replace(/enter/g,"e").replace(/imes/g,"i").replace(/ober/g,"o").replace(/ufat/g,"u"); 
        document.getElementById("resultado").innerHTML=msjDesencriptado;
        resultado(si)
        document.getElementById("txt-input").value = "";
    }
    
}

  botonDos.onclick = desencriptar;
  
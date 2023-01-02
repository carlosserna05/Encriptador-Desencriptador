const copiar = document.querySelector("#btn_copiar");
const texto = document.querySelector("#resultado");
const zonaEncriptar = document.querySelector("#txt-input");

copiar.addEventListener("click",() => {      
  navigator.clipboard.writeText(texto.innerHTML);
  document.getElementById("txt-input").focus();
  zonaEncriptar.focus();

  });

  
  
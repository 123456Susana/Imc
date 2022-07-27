function calcularIMC(){
    var peso;
    var estatura;
    var resultadoIMC;
    var comentario;
  
    nombre=document.getElementById("nombre").value;
    peso = document.getElementById("peso").value;
    estatura = document.getElementById("estatura").value;

    
    if(estatura != "" && peso != "") {
      estatura = parseInt(estatura) / 100;
      resultadoIMC = peso / Math.pow(estatura,2);
      document.getElementById("imc").innerHTML = resultadoIMC.toFixed(2);
    }
  
    if(resultadoIMC <= 15) {
      comentario = nombre + ", Tu IMC es " + resultadoIMC.toFixed(2) + " - Severamente bajo peso";
    
    } else if(resultadoIMC > 15 && resultadoIMC <= 16) {
      comentario = nombre + ", Tu IMC es " + resultadoIMC.toFixed(2) + " - Muy bajo peso";
  
    } else if(resultadoIMC > 16 && resultadoIMC <= 18.5) {
      comentario = nombre + ", Tu IMC es " + resultadoIMC.toFixed(2) + " - Bajo peso";
  
    } else if(resultadoIMC > 18.5 && resultadoIMC <= 25) {
      comentario = nombre + ", Tu IMC es " + resultadoIMC.toFixed(2) + " - Peso saludable";
    
    } else if(resultadoIMC > 25 && resultadoIMC <= 30) {
      comentario = nombre + ", Tu IMC es " + resultadoIMC.toFixed(2) + " - Sobrepeso";
  
    } else if(resultadoIMC > 30 && resultadoIMC <= 35) {
      comentario = nombre + ", Tu IMC es " + resultadoIMC.toFixed(2) + " - Moderadamente obeso";
  
    } else if(resultadoIMC > 35 && resultadoIMC <= 40) {
      comentario = nombre + ", Tu IMC es " + resultadoIMC.toFixed(2) + " - Severamente obeso";
  
    } else if(resultadoIMC > 40 && resultadoIMC <= 45) {
      comentario = nombre + ", Tu IMC es " + resultadoIMC.toFixed(2) + " - Muy severamente obeso";
  
    } else if(resultadoIMC > 45 && resultadoIMC <= 50) {
      comentario = nombre + ", Tu IMC es " + resultadoIMC.toFixed(2) + " - Mórbidamente obeso";
  
    } else if(resultadoIMC > 50 && resultadoIMC <= 60) {
      comentario = nombre + ", Tu IMC es " + resultadoIMC.toFixed(2) + " - Super obeso";
  
    } else if(resultadoIMC > 60) {
      comentario = nombre + ", Tu IMC es " + resultadoIMC.toFixed(2) + " - Hiper obeso";
    }
  
    document.getElementById("comentario").innerHTML = comentario;
    
  }
  
  function limpiarInput(){
    document.getElementById("nombre").value="";
    document.getElementById("peso").value = "";
    document.getElementById("estatura").value = "";
    document.getElementById("imc").innerHTML = "";
    document.getElementById("comentario").innerHTML = "";
  
  }
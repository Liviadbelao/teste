function dobro(){
    let num1 = document.getElementById("num1").value;
    let resultado = num1 * 2 ;
    let result = document.getElementById("resultado").innerHTML = `o dobro de ${num1} é ${resultado}`;
}

function par(){
    let num2 = document.getElementById("num2").value;
    let resultado = num2 % 2 ;
  if(num2 % 2){
    document.getElementById("resultado2").innerHTML = "é um numero impar"
  } else {
    document.getElementById("resultado2").innerHTML = "é um numero par"
  }
}

function crescente(){
    let lista  = []
    let ordenado = []
    lista[0] = document.getElementById("num3").value;
    lista[1] = document.getElementById("num4").value;
    lista[2] = document.getElementById("num5").value;
   


    document.getElementById("resultado").innerHTML = lista.sort();


     if (lista[0] <= lista[1] && lista[0] <= lista[2]) {
      // lista[0] é o maior
      ordenado[0] = lista[0];
      if (lista[1] <= lista[2]) {
        // lista[1] é o segundo maior
        // lista[2] é o menor
        ordenado[1] = lista[1];
        ordenado[2] = lista[2];
      } else {
        // lista[2] é o segundo maior
        // lista[1] é o menor
        ordenado[1] = lista[2];
        ordenado[2] = lista[1];
      }

      if (lista[1] <= lista[0] && lista[1] <= lista[2]) {
        // lista[1] é o maior
        ordenado[0] = lista[1];
        if (lista[0] <= lista[2]) {
          // lista[0] é o segundo maior
          // lista[2] é o menor
          ordenado[1] = lista[0];
          ordenado[2] = lista[2];
        } else {
          // lista[2] é o segundo maior
          // lista[0] é o menor
          ordenado[1] = lista[2];
          ordenado[2] = lista[0];
        }
      }
    
      if (lista[2] <= lista[0] && lista[2] <= lista[1]) {
        // lista[2] é o maior
        ordenado[0] = lista[2];
        if (lista[0] <= lista[1]) {
          // lista[0] é o segundo maior
          // lista[1] é o menor
          ordenado[1] = lista[0];
          ordenado[2] = lista[1];
        } else {
          // lista[1] é o segundo maior
          // lista[0] é o menor
          ordenado[1] = lista[1];
          ordenado[2] = lista[0];
        }
      }
    
      document.getElementById("resultado3").innerHTML = ordenado;
    
    }
  
  }

  function texto(){
    let texto = document.getElementById("texto1").value;
    let lenght =  texto.length;
     
    if( lenght <= 10){
  document.getElementById("resultado4").innerHTML = `seu texto tem ${lenght} caracteres`
    } else if( lenght > 10){
    document.getElementById("resultado4").innerHTML = "seu texto é muito grande"} 
  }


function salario(){
  let salario = Number(document.getElementById("salário").value);
  let conta = salario * 0.2;
  let conta2 = salario * 0.15;
  let conta3 = salario * 0.1;
  let conta4 = salario * 0.05;

  if(salario <= 6280){
       document.getElementById("result").innerHTML = `salario inicial é: ${salario}`;
       document.getElementById("result2").innerHTML = "aumento de 20%";
       document.getElementById("result3").innerHTML = `diferença é: ${conta}`;
       document.getElementById("result4").innerHTML = `resultado final: ${salario + conta} `;
       
  }
}

function romance(){
  let sim = document.getElementById("a").checked;
  let sim2 = document.getElementById("c").checked;
  let sim3 = document.getElementById("e").checked;
  let sim4 = document.getElementById("g").checked;
  let contador = 0;

  if(sim == 1){
    contador == sim
  }
  if(sim2 == 1){
    contador == sim2
  }
  if(sim3 == 1){
    contador == sim3
  }
  if(sim4 == 1){
    contador == sim4
  }

  if(contador == 2){
    document.getElementById("p1").innerHTML = "melhore";
  } else if(contador == 3){
    document.getElementById("p1").innerHTML = "vc é um bom marido";
  } else if (contador == 4){
    document.getElementById("p1").innerHTML = "vc é o melhor";
  } else if (contador == 0) {
    document.getElementById("p1").innerHTML = "vc é um bosta";
  }

}


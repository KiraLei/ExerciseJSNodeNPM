
function ejercicio1(){
    let num1,num2,total;  
    num1 = document.getElementById("num1").value;  
    num2 = document.getElementById("num2").value;  
    if (isNaN(num1) || isNaN(num2)) {  
        total = "Es necesarios introducir dos números válidos";  
    } else {  
        total="El total de la suma es : "+ (parseFloat(num1)+parseFloat(num2));  
    }  
    document.getElementById("sumando").innerHTML = total;  
}

function ejercicio2(){
    let nota1,nota2,nota3,nota4,total;  
    nota1 = document.getElementById("nota1").value;  
    nota2 = document.getElementById("nota2").value;  
    nota3 = document.getElementById("nota3").value;  
    nota4 = document.getElementById("nota4").value; 
    if (isNaN(nota1) || isNaN(nota2)|| isNaN(nota3) || isNaN(nota4)) {  
        total = "Es necesarios introducir números válidos";  
    } else {  
        total="El promedio de las 4 notas es : "+ ((parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3)+parseFloat(nota4))/4);  
    }  
    document.getElementById("ejercicio2").innerHTML = total;  
}

function ejercicio3(){
    let lado1,lado2,total;  
    lado1 = document.getElementById("lado1").value;  
    lado2 = document.getElementById("lado2").value;  
   
    if (isNaN(lado1) || isNaN(lado2)) {  
        total = "Es necesarios introducir números válidos";  
    } else {  
        total="El area del Rectangulo es : "+ (parseFloat(lado1)*parseFloat(lado2));  
    }  
    document.getElementById("ejercicio3").innerHTML = total;  
}

function ejercicio4(){
    let altura,base,total;  
    altura = document.getElementById("altura").value;  
    base = document.getElementById("base").value;  
   
    if (isNaN(altura) || isNaN(base)) {  
        total = "Es necesarios introducir números válidos";  
    } else {  
        total="El area total del triangulo es : "+ ((parseFloat(altura)*parseFloat(base))/2);  
    }  
    document.getElementById("ejercicio4").innerHTML = total;  
}

function ejercicio5(){
    let radio,total;  
    radio = document.getElementById("radio").value;     
    if (isNaN(radio)) {  
        total = "Es necesarios introducir números válidos";  
    } else {  
        total="El area del circulo es : "+ Math.trunc(((Math.PI)*(Math.pow(parseFloat(radio),2))));  
    }  
    document.getElementById("ejercicio5").innerHTML = total;  
}

function ejercicio7(){
    let metro,total;  
    metro = document.getElementById("metro").value; 
    if (isNaN(metro)) {  
        total = "Es necesarios introducir números válidos";  
    } else {  
        total="Debe pedir  : "+ ((parseFloat(metro)*39.3701)) + " pulgadas de tela"; 
    }  
    document.getElementById("ejercicio7").innerHTML = total;  
}

function ejercicio8(){
    let soles,total;  
    soles = document.getElementById("soles").value; 
    if (isNaN(soles)) {  
        total = "Es necesarios introducir números válidos";  
    } else {  
        total="Obtendra  : "+ Math.trunc((parseFloat(soles)/3.5)) + " dolares"; 
    }  
    document.getElementById("ejercicio8").innerHTML = total;  
}


function ejercicio9(){
    let anio_nacimiento,anio_actual,total;  
    anio_nacimiento = document.getElementById("anio_nacimiento").value; 
    anio_actual = document.getElementById("anio_actual").value; 

    if (isNaN(anio_nacimiento) || isNaN(anio_actual)) {  
        total = "Es necesarios introducir números válidos";  
    } else {  
        total="Tiene : "+ ((parseFloat(anio_actual)-(parseFloat(anio_nacimiento)))) + " años" ;
    }  
    document.getElementById("ejercicio9").innerHTML = total;  
}

function ejercicio11(){
    let antiguedad, total;  
    antiguedad = document.getElementById("antiguedad").value; 
        switch (antiguedad){
            case "0":
                total="No recibira ningun bono";
                document.getElementById("ejercicio11").innerHTML = total;  
                break;
            case "1":
                total="Recibira : $100 de bono";
                document.getElementById("ejercicio11").innerHTML = total;  
                break;
            case "2":
                total="Recibira : $200 de bono";
                document.getElementById("ejercicio11").innerHTML = total;
                break; 
            case "3":
                total="Recibira : $300 de bono";
                document.getElementById("ejercicio11").innerHTML = total;
                break; 
            case "4":
                total="Recibira : $400 de bono";
                document.getElementById("ejercicio11").innerHTML = total;
                break; 
            case "5":
                total="Recibira : $500 de bono";
                document.getElementById("ejercicio11").innerHTML = total;
                break; 
                default:
                    total="Recibira $1000 de bono";
                document.getElementById("ejercicio11").innerHTML = total;
        }
}

function ejercicio12(){
    let sueldo, total;  
    let i;
  sueldo=parseInt(1500);
  total='';

    for(i=0; i<6; i++){

        total=total+'<br/>'+"* En el año "+ i + " recibira " +sueldo+ " de Salario";
        sueldo=Math.trunc(sueldo*1.1) ;
        //console.log(total)
        document.getElementById("ejercicio12").innerHTML = total;
    }    
}

function ejercicio13(){
    let nota,total; 
    let a
    let aprobados, desaprobados 
    let i;

    let cantidad=[a];
    for (let i = 0; i < a; i++) {
        cantAlumnos[i] = prompt("Nota numero ".concat(i + 1));
      }



   // cantidad = document.getElementById("cantidad").value; 
  //  nota = document.getElementById("nota").value; 

  // total='';

   // while(i<=cantidad){

  //      total=total+'<br/>' +"Obtendra  : "+(parseFloat(cantidad)) + " dolares"; 
       /* if(parseInt(nota)>10 && parseInt(nota)<20 ){
            total=total+'<br/>'+" En el año "+ i + " recibira " +sueldo+ " de Salario";
            console.log(total)
            document.getElementById("ejercicio13").innerHTML = total;
            
        }*/

   // }    
}

function ejercicio14(){
    let cantidad, nota,total;  
    let i;
    cantidad = document.getElementById("cantidad").value; 
    nota = document.getElementById("nota").value; 

   total='';

   // while(i<=cantidad){

        total=total+'<br/>' +"Obtendra  : "+(parseFloat(cantidad)) + " dolares"; 
       /* if(parseInt(nota)>10 && parseInt(nota)<20 ){
            total=total+'<br/>'+" En el año "+ i + " recibira " +sueldo+ " de Salario";
            console.log(total)
            document.getElementById("ejercicio13").innerHTML = total;
            
        }*/

   // }    
}

function ejercicio15(){
    let agePeople,total;  
    agePeople = document.getElementById("agePeople").value;  
    if (parseFloat(agePeople)>=18) {  
        total="Puedes votar en las proximas elecciones"; 
    } else {  
        total="Aun no puedes votar en las proximas elecciones";  
    }  
    document.getElementById("ejercicio15").innerHTML = total;     
}
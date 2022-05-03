alert ('Esta funcionando')

//1. Ciclos 
//Revisar si puedo optar por una cedula

//1.1 --mientras--> while yo sea menor a 18 años, no puedo tener una cedula
//1.2 por cada año -->for

/*
Ejemplo con while:

var edad = 0;

while (edad < 18){
    console.log ('aun soy menor de edad, edad actual: ' + edad);
    console.log ('esperando otro año para volver a revisar si puedo optar por una cedula')
    edad+=1; //edad=edad+1
}

if (edad>=18) {
    console.log ('felicidades has cumplido 18 años, aqui esta tu cedula')
}


2.Ejemplo con for

for (var edad = 0; edad < 18; edad++ ){
    console.log ('aun soy menor de edad, edad actual: ' + edad);
    console.log ('esperando otro año para volver a revisar si puedo optar por una cedula')
}

console.log ('felicidades has cumplido 18 años, aqui esta tu cedula')

*/

//1. hacer una alarma para tomar cafe
//4 pm en hora militar 4+12 == 16 horas
//cultura general -> westerns 
/*
var hora_del_dia = 8;

while (hora_del_dia<16){
    console.log ('aun no es hora de tomar cafe')
    hora_del_dia+=1; //hora_del_dia = hora_del_dia+1;
    
}

if (hora_del_dia == 16){
    console.log ('Rindanse ya, que es la hora del cafe!!')
}
*/

//1.3 A las 4 pm tomo cafe, pero a las 10 am, tambien tomo cafe
/*
var hora_del_dia = 8;

while (hora_del_dia<16){
    
    if (hora_del_dia==10){
        console.log ('Rindanse ya, que es la hora del cafe!!');
        break;
    }
    console.log ('aun no es hora de tomar cafe')
    hora_del_dia+=1;
}
*/

//While que sea de Dr.Strange
/*
var hora_inicial = 8;

while (hora_inicial<13){
    console.log('aun no aparece Dr.Strange')
    if (hora_inicial==12){
        //dr Strange va a enseñarnos que pasa en el futuro
        hora_inicial = 20;
        break;
    }
    hora_inicial+=1;
}

if (hora_inicial == 20){
    // dr Strange dice el futuro
    console.log ('Solo hay una forma de ganar de mil escenarios y Iron Man muere')
}
*/
/*
for (var hora_inicial=8; hora_inicial<13;hora_inicial++){
    
    if (hora_inicial==12){
        console.log('acaba de aparecer Dr.Strange');
        hora_inicial = 20;
        break;
    }
    console.log('aun no aparece Dr.Strange')
}

if (hora_inicial==20){
    console.log ('Solo hay una forma de ganar de mil escenarios y Iron Man muere')
}
*/

//operadores logicos
//En mi cumpleaños solo me compran un queque color azul cuando cumpla entre 18 años y 20 años
// y = and 

//Caso AND
/*
var edad =17;

if ((edad>=18)&&(edad<=20)){
    console.log('ehhh me compraron un queque azul')
}else{
    console.log('no me compraron un queque azul')
}

//if aninados

if (edad>=18){ 
    if (edad<=20){
        console.log('ehhh me compraron un queque azul')
    }
}
*/

//Caso Or -> o
//En mi cumpleaños solo me compran un queque color azul cuando cumpla menos o 18 años o 40 años o más
/*
var edad = 25;

if ((edad<=18)||(edad>=40)){
    console.log('ehhh me compraron un queque azul')
}else{
    console.log('no hay queque')
}
*/

//Como utilizo un loop dentro de una funcion
/*
function logaritmo_escalera (number){
    
    while (number <50){
        console.log ('El logaritmo base diez del numero: ' + number+'es: ' + Math.log10(number))
        number+=1;
    }
}

logaritmo_escalera(25)

*/








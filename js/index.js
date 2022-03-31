let anio = parseInt(prompt("¡Bienvenido! 😃 \n¿Cual es tu año de nacimiento? 🤔"));
let nombre = prompt("¿Cual es tu nombre? 🤔");
let edad = 2022 - anio;

while (anio >= 2004){
    alert (`¡Hola ${nombre}! tienes ${edad} años, No puedes ingresar 🍼👶🏽`);
    anio = parseInt(prompt("¡Bienvenido! 😃 \n¿Cual es tu año de nacimiento? 🤔"));
    edad = 2022 - anio;
    nombre = prompt("¿Cual es tu nombre? 🤔");
}
alert (`¡Hola ${nombre}! tienes ${edad} años ¡Bienvenid@! 🥴🍷🍾`)

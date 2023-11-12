var time = prompt('¿Que hora es? (Aproximadamente)',' ')

var nombre= prompt('¿Cual es tu nombre?', ' ');

var saludo
if (time < 12){
    saludo = 'Buenos Días';
} else if (time < 20){
    saludo = 'Buenas Tardes';
} else {
    saludo = 'Buenas Noches'
}
console.log(saludo);
document.write('<h2>' + saludo + ' ' + nombre + '</h2>')

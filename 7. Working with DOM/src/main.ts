// ╔══════════════╗

// 7 WORKING WITH DOM

// ╚══════════════╝

// 7.1 OBTENIENDO ELEMENTOS DEL DOM Y CAMBIAR EL TIPO
// ---------------------------------------
// Por lo general los elementos seleccionados con querySelector nos devuelven un tipo Element, podemos hacer varias cosas, en este caso podemos transformarlo a algun otro tipo element HTML, usando Type Asertions (as) y asi transformarlo a otro tipo de elementoHTML, asi obteniendo value y otras propiedades.

// En este caso lo convertimos a HTMLInputElement para obtener la propiedad value

/*const someElement = document.querySelector('.foo') as HTMLInputElement;

console.log('someElement', someElement.value);*/

// 7.2 EVENT LISTENER
// ---------------------------------------
// Para los events listener hay que transformar los eventos tambien a algun elemento HTML que necesitemos para obtener las propiedades y funciones correctas.

// const someElement = document.querySelector('.foo');

// someElement.addEventListener('click', (e) => {
// 	// En este caso se transforma e.target a un tipo HTMLInputElement y asi obtener el value
// 	const target = e.target as HTMLInputElement;
// 	console.log('event', target.value);
// });

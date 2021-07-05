// ╔══════════════╗

// 9 GENERICS

// ╚══════════════╝

// 9.1 Generics in TypeScript
// ---------------------------------------
// Los generics son escritos con <> y dentro se pone el nombre del Generic, por default se pone T, es decir: <T> y se pone despues del signo = y antes de los parametros

/*const addID = <T>(obj: T) => {
	const id: string = Math.random().toString(16);
	return {
		...obj,
		id,
	};
};

const user = {
	name: 'Jack',
};

const result = addID(user);
console.log('result', result);
*/

// 9.2 Interfaces con Generics
// ---------------------------------------

// Aqui se pone extends object ya que sin esto, podemos pasar cualquier tipo de dato y nos lo va a permitir, asi que indicandole de esta manera, podemos indicarle que solo queremos objetos

/*const addID = <T extends object>(obj: T) => {
	const id: string = Math.random().toString(16);
	return {
		...obj,
		id,
	};
};

interface UserInterface {
	name: string;
}

const user: UserInterface = {
	name: 'Jack',
};

// Aqui en este caso se puede poner la interface como un  generic, esto no es obligatorio pero para mejor lectura es bueno ponerlo de manera explicita.
const result = addID<UserInterface>(user);
console.log('result', result);*/

// 9.3 Generics con Interfaces
// ---------------------------------------
// WTF!

/*const addID = <T extends object>(obj: T) => {
	const id: string = Math.random().toString(16);
	return {
		...obj,
		id,
	};
};

// Tecnicamente nos permite dar mas flexibilidad una variable con tipo generic. Esto permite que este tipo de datos sea flexible, pero debemos indicar que tipo de datos especifico despues.
interface UserInterface<T> {
	name: string;
	data: T;
}

// Por ejemplo aqui colocamos los <> para que podamos colocar la propiedad data, y en este caso indicamos que sera un objeto que tendra la propiedad meta.
const user: UserInterface<{ meta: string }> = {
	name: 'Jack',
	data: {
		meta: 'Hola',
	},
};

// Y aqui indicamos que data sera un array
const user2: UserInterface<string[]> = {
	name: 'foo',
	data: ['foo', 'bar', 'bus'],
};

const result = addID<UserInterface>(user);
console.log('result', result);*/

// 9.4 Passing several data types
// ---------------------------------------
const addID = <T extends object>(obj: T) => {
	const id: string = Math.random().toString(16);
	return {
		...obj,
		id,
	};
};

// Podemos pasar varios generics, para tener varias propiedades con tipos de datos flexibles
interface UserInterface<T, V> {
	name: string;
	data: T;
	meta: V;
}

const user: UserInterface<{ meta: string }, string> = {
	name: 'Jack',
	data: {
		meta: 'Hola',
	},
	meta: 'Hola',
};

const user2: UserInterface<string[], number> = {
	name: 'foo',
	data: ['foo', 'bar', 'bus'],
	meta: 0,
};

const result = addID<UserInterface>(user);
console.log('result', result);

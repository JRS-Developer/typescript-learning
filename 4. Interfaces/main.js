// ╔══════════════╗
// 4. INTERFACES
// ╚══════════════╝
// Las interfaces son como funciones que vienen de TipeScrypt y permite crear tipos ya indicamos por nosotros para evitar estar repitiendo cosas.
// 4.1 EJEMEPLO SIN INTERFACES
// ---------------------------------------
// En este caso tambien para mencionar, en los objetos se hace de esta manera para indicar los tipos.
// const user: {name:string, age:number} = {
// 	name: 'Jose',
// 	age: 18
// }
// const user2: {name:string, age:number} = {
// 	name: 'Jack',
// }
// 4.2 EJEMPLO CON INTERFACES
// ---------------------------------------
// En vez de pasarle los tipos a cada uno, solo le pasamos el interfaz y asi evitamos hacer cambios en varias partes del codigo.
// Para nombrar las interfaces es recomendable nombrarlas ya sea con una I al inicio indicando que es una interfaz, o con Interface al final para evitar chocar con variables o clases con el mismo nombre. EJ: IUser o UserInterface
// interface IUser {
// 	name: string;
// 	// ? al lado de age indica que age no es una variable obligatoria
// 	age?: number;
// 	// Asi se declaran las funciones dentro de las interfaces, y al lado se coloca que tipo de dato va a retornar
// 	getMessage(): string;
// }
// const user: IUser = {
// 	name: 'Jose',
// 	age: 18,
// 	getMessage() {
// 		return `Hello ${this.name}`;
// 	},
// };
// const user2: IUser = {
// 	name: 'Jack',
// 	getMessage() {
// 		return `Hello ${this.name}`;
// 	},
// };
// console.log(user.getMessage());

// ╔══════════════╗

// 8 CLASSESS

// ╚══════════════╝

// 8.1 Creando clases con TypeScript
// ---------------------------------------
// En typeScript tenemos la posibilidad de usar terminos como private, public, protected y readonly para las clases.
// Al pasar a JavaScript esto desaparece
/*
class User {
	// protected y private son similares, evitan que podamos acceder directamente a ellos, solo podemos acceder a ellos haciendo funciones independientes donde retornen estos valores
	protected firstName: string;
	private lastName: string;
	// readonly es una variable que no puede ser cambiada, solo puede ser leida. Es decir no podemos hacer una funcion set para esto
	readonly unchangableName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	changeUnchangableName() {
		// No podemos cambiarlo porque es readonly
		this.unchangableName = 'XD';
		// Miestras que firstName si porque no es readonly
		this.firstName = 'Jose';
	}

	getFullName(): string {
		return `${this.firstName} ${this.lastName}`;
	}
}

const user = new User('Jose', 'Sanchez');
console.log(user.getFullName());
*/

// 8.2 Implementando interfaces a clases
// ---------------------------------------
// Para implementarlo, se usa el keyword implements y la interfaz que queremos usar.

/*interface UserInterface {
	getFullName(): string;
}

// Lanza error a User porque getFullName esta comentado
class User implements UserInterface {
	protected firstName: string;
	private lastName: string;
	readonly unchangableName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	// getFullName(): string {
	// 	return `${this.firstName} ${this.lastName}`;
	// }
}
*/

// 8.3 Static Properties
// ---------------------------------------
// Stactic properties son propiedades que se les coloca el keyword static y esto indica que dicha variable solo es accedible llamando a la clase en si y no a las instancias de la clase.
/*
class User {
	protected firstName: string;
	private lastName: string;
	readonly unchangableName: string;

	static maxAge = 50
	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
}

const user = new User('Jose', 'Sanchez')

// La constante user no puede acceder a maxAge ya que es una propiedad estatic y ya que user es una instancia, es imposible acceder a ella
console.log(user.maxAge)
// Miestras si accedemos directamente a clase si podemos acceder a esta propiedad
console.log(User.maxAge)*/

// 8.3 Inheritance - Herencia
// ---------------------------------------
// Para ederar las variables y metodos de otra clase se usa (extends) y el nombre de la clase que queremos ederar.
// EJ: class Admin extends User

class User {
	protected firstName: string;
	private lastName: string;
	readonly unchangableName: string;

	static maxAge = 50;
	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
}

class Admin extends User {
	private editor: string;

	setEditor(editor: string) {
		this.editor = editor;
	}

	getEditor() {
		return this.editor;
	}
}

const admin = new Admin('Jesus', 'Sanchez');

console.log(admin.setEditor('Jose Eduardo'));
console.log(admin.getEditor());
// console.log(admin.editor);

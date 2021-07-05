// ╔══════════════╗

// 6 ANY / VOID / NEVER / UNKNOWN

// ╚══════════════╝

// 6.1 VOID
// ---------------------------------------
// Es cuando una funcion no retorna nada, por ejemplo solo hace un console.log

/*const doSomething = (): void => {
	console.log('do something');
};
*/

// 6.2 ANY
// ---------------------------------------
// !Es el peor tipo de TypeScript porque pierde todo sentido del uso de TypeScript, indica que el tipo de dato puede ser cualquiera, y es mejor evitarlo a toda costa.

// let foo: any = 'foo';

// // Con any no me indica que bar no esta definido, perdiendo muchas ventajas de TypeScript
// console.log(foo.bar());

// 6.3 NEVER
// ---------------------------------------
// Indica que una funcion nunca termina, no es muy usado pero igual es bueno saber.
// Por ejemplo se puede colocar throw y es valido, pero console.log y return no son validos, es mejor leer la documentacion para entender mejor.

// const doSomething = (): never => {
// 	throw 'never'
// };

// 6.4 UNKNOWN
// ---------------------------------------
// Similar a Any pero mejor

// let vAny : any = 10
// let vUnknown: unknown = 10

// let s1: string = vAny
// let s2: string = vUnknown

// // Con any no me marca errores pero con unkwnown si
// console.log(vAny.foo())
// console.log(vUnknown.foo())

// 6.5 Type Asertions
// ---------------------------------------
// Con Unknown podemos hacer TypeAsertions, o cambiar el tipo a nuestro gusto, en este caso podemos pasar unkwnown a number, string o lo que queramos. Solo funciona con variables unkwnown, ya si es de otro tipo pues no funcionara.
// Para esto se usa 'as'
// EJ: vUnknown as string

// let vAny: any = 10;
// let vUnknown: unknown = 10;

// let s1: string = vAny;
// // Aqui si funciona porque vUnkwnown lo declaramos como unkwnow, y podemos cambiar el tipo como deseemos.
// let s2: string = vUnknown as string;

// let pageNumber: string = '1';
// // Lanza error pageNumber as number, porque la declaramos inicialmente como un string
// // let numericPageNumber: number = pageNumber as number

// // De este forma si funciona, se pasa a unkwnown y despues a number, todo un beta.
// let numericPageNumber: number = pageNumber as unknown as number;

// // console.log(vAny.foo())
// // console.log(vUnknown.foo())

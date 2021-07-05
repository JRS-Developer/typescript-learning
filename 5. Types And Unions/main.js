// ╔══════════════╗
// 5 TYPES Y UNIONS
// ╚══════════════╝
// 5.1 Union Operator
// ---------------------------------------
// Se usa el signo | entre los tipos, esto indica que puede ser un tipo u otro, EJ: userName: string | number = dato
// Tambien se puede hacer uso de interfaces
// interface UserInterface {
// 	name: string,
// 	surname: string
// }
// let username: string = 'Jose'
// let pageName: string | number = '1'
// // Tambien se puede hacer uso de colocar null
// let errorMessage: string | null = null
// // Aqui un ejemplo usando interfaces
// let user: UserInterface | null = null
// // Tambien se puede poner varios, no solo dos
// // Lo mejor es no usar mas de 2
// let someProp: string | number | null | object | string[]
// 5.2 Type Aliases
// ---------------------------------------
// Los type Aliases se crean usando la palabra type junto al nombre, es como las interfaces, EJ: type Data = string
// type ID = string;
// type PopularTag = string;
// interface UserInterface {
// 	// En vez de colocar id: string, podemos colocar el Type que creamos anteriormente
// 	id: ID;
// 	name: string;
// 	surname: string;
// }
// // Podemos colocar el arrays, usando [] al lado, porque en este caso el type lo declaramos como un string
// const popularTags: PopularTag[] = ['dragon', 'coffee'];
// let username: string = 'Jose';
// let pageName: string | number = '1';
// let errorMessage: string | null = null;
// let user: UserInterface | null = null;
// let someProp: string | number | null | object | string[];
// 5.3 Unions + Type Aliases
// ---------------------------------------
// Una practica usando los dos en combinacion
// type ID = string;
// type PopularTag = string;
// // En este caso el MaybePopularTag hace uso de los Unions para en caso de que no exista el otro type llamado PopularTag pues, se transforme a null
// type MaybePopularTag = PopularTag | null;
// interface UserInterface {
// 	id: ID;
// 	name: string;
// 	surname: string;
// }
// const popularTags: PopularTag[] = ['dragon', 'coffee'];
// const dragonsTags: MaybePopularTag = 'dragon';
// let username: string = 'Jose';
// let pageName: string | number = '1';
// let errorMessage: string | null = null;
// let user: UserInterface | null = null;
// let someProp: string | number | null | object | string[];

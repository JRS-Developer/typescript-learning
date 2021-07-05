// ╔══════════════╗

// 10 ENUMS

// ╚══════════════╝

// 10.1 Usando Enums
// ---------------------------------------
// Son como objetos pero solo se usan numeros
// La ventaja es que podemos usar los Enums como tipos de datos
/*
const statues = {
	notStarted: 0,
	inProgress: 1,
	done: 2,
};

console.log(statues.notStarted);

// Es recomendable iniciar el nombre de las variables en mayusculas
// Y si queremos darle algun dato, se usa con = , y no con :
enum Status {
	NotStarted = 'notStarted',
	InProgress = 'InProgress',
	Done = 'Done',
}

let notStartedStatus: Status = Status.NotStarted;

// No podemos cambiar el tipo.
// notStartedStatus = 'foo'
notStartedStatus = Status.Done;

console.log(Status.InProgress); // 1

*/

// 10.2 Enums dentro de interfaces
// ---------------------------------------
// Si, tambien se puede hacer eso........

const statues = {
	notStarted: 0,
	inProgress: 1,
	done: 2,
};

console.log(statues.notStarted);

// Es recomendable usarlo igual que las interfaces, colocando un nombre como: StatusEnum
enum StatusEnum {
	NotStarted = 'notStarted',
	InProgress = 'InProgress',
	Done = 'Done',
}

interface TaskInterface {
	id: string;
	// Aqui se coloca StatusEnum como un tipo
	status: StatusEnum;
}

let notStartedStatus: StatusEnum = StatusEnum.NotStarted;

// No podemos cambiar el tipo.
// notStartedStatus = 'foo'
notStartedStatus = StatusEnum.Done;

console.log(StatusEnum.InProgress);

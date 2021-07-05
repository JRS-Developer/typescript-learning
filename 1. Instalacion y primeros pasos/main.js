// ╔══════════════╗
// 1. INSTALACION Y PRIMEROS PASOS
// ╚══════════════╝
// 1.1 Instalacion
// ---------------------------------------
// Para instalar typescript se usa: npm install -g typescript
// 1.2 Configuracion
// ---------------------------------------
// Para configurar typescript se crea en nuestro proyecto un archivo tsconfig.json donde indicamos donde estan nuestros archivos typescript, por ejemplo en la carpeta src, y donde queremos que los transpile, por ejemplo en una carpeta dist.
// 1.3 Traspilar TypeScript a JavaScript
// ---------------------------------------
// Se usa la linea de comandos y se coloca tsc nombre_de_archivo -w.
// -w es para que compile cada vez que guardemos.
// Si usamos el archivo tsconfig.json, no necesitamos indicar el nombre del archivo, solo usariamos: tsc -w

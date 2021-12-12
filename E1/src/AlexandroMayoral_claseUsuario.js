
class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    /* Retorna el nombre completo */
    getFullName() {
        return `${this.nombre} ${this.apellido}`
    }

    /* Recibe un nombre de mascota y lo agrega al
       array de mastcotas */
    addMascota(newMascota) {
        this.mascotas.push(newMascota)
    }

    /* Retorna el numero de mascotas que tiene el
       usuario */
    countMascotas() {
        return this.mascotas.length
    }

    /* Recibe un string 'nombre' y un string 'autor'
       y debe agregar un objeto {nombre: string, autor: string}
       al array de libros */
    addBook(newName, newAutor) {
        this.libros.push({
            nombre: newName,
            autor: newAutor
        });
    }

    /* Retorna una array con solo los nombres del array de 
       libros de usuario */
    getBookNames() {
        return this.libros.map(obj => obj.nombre);
    }
};

// Creamos al usuario
let usuario = new Usuario("Lex", "May", [], []);
// Agregamos datos
usuario.addMascota("Perro"); 
usuario.addMascota("Gato");
usuario.addBook("El juego de Ender", "Orson Scott");
usuario.addBook("La Fundacion", "Isaac Asimov");

// Consultas
console.log(usuario);
console.log(`El número de mascotas de ${usuario.getFullName()}: ${usuario.countMascotas()}`);
console.log(`Los libros son: ${usuario.getBookNames()}`);

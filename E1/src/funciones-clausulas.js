// 1
function mostrarLista(lst) {
    if (lst.length === 0) {
        console.log('Lista vacía');
    } else {
        console.log(lst);
    }
}

// mostrarLista([1, 2, 3, 4, 5, 6, 7]);
// mostrarLista([]);

// 2
// IIFE
(function (lst) {
    if (lst.length === 0) {
        console.log('Lista vacía');
    } else {
        console.log(lst);
    }
})([]);

// 3
function crearMultiplicador(num1) {
    return function (num2) {
        return num1 * num2;
    };
}

const duplicar = crearMultiplicador(2);
const triplicar = crearMultiplicador(3);

console.log(duplicar(4));
console.log(triplicar(3));




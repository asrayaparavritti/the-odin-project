
/*
function camelize(str) {
    let a = str.split("-");

    for(let i = 1; i < a.length; i++) {
        a[i] = a[i][0].toUpperCase() + a[i].slice(1);
    }

    let b = a.join("");

    return b;
}

console.log(camelize("background-color")); */

function camelize(str) {
    let a = str.split("-");

    let nova = a.map(function (palavra, indice) {
        if (indice === 0) {
            return palavra;
        } else {
            return palavra[0].toUpperCase() + palavra.slice(1);
        }
    });

        let b = nova.join("");

        return b;
}

console.log(camelize("background-color"));
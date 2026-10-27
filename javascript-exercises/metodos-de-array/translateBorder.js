function camelize(str) {

    let split = str.split("-");

    for (let i = 1; i < split.length; i++) {
        split[i] = split[i][0].toUpperCase() + split[i].slice(1);
    }

    let join = split.join("");
   
    return join;
}

console.log(camelize("background-color"));

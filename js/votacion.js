const usuarios = [];
localStorage.usuarios ? 
    JSON.parse(localStorage.usuarios).forEach(element => {
    usuarios.push(element);
    }) 
    : NULL;
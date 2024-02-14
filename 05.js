//A  função ".split" não funcionou

// function separarFraseHTML() {
//     let fraseHTML = document.getElementById('frase-html');
//     // let fraseHTMLDividida1 = fraseHTML.split(';')[0];
//     // let fraseHTMLDividida2 = fraseHTML.split(';')[1];

//     // console.log(fraseHTML);
//     // console.log(fraseHTMLDividida1);
//     // console.log(fraseHTMLDividida2);
    
//     fraseHTML.innerHTML = fraseHTML;
// }

function separarFraseUsuario() {
    let fraseUsuario = document.getElementById('frase-usuario').value;
    console.log(fraseUsuario);
    let fraseUsuarioDividida1 = fraseUsuario.split(';')[0];
    let fraseUsuarioDividida2 = fraseUsuario.split(';')[1];

    let resultadoUsuario = document.getElementById('resultado-usuario');
    resultadoUsuario.innerHTML = `${fraseUsuarioDividida1} - ${fraseUsuarioDividida2}`;
}
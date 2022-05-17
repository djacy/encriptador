const inputTexto =  document.querySelector(".entrada");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value)
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage="none"
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0;i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(inputTexto.value)
    mensagem.value = textoDesencriptado
    mensagem.style.backgroundImage="none"

    function desencriptar(stringDesencriptada){
        let natrizCodigo = [["ai","a"], ["enter","e"], ["imes","i"], ["ober","o"], ["ufat","u"]];
        stringDesencriptada = stringDesencriptada.toLowerCase();

        for(let i=0; i < natrizCodigo.length; i++){
            if(stringDesencriptada.includes(natrizCodigo[i][0])){
                stringDesencriptada = stringDesencriptada.replaceAll(natrizCodigo[i][0], natrizCodigo[i][1])
            }
        }
        return stringDesencriptada
    }
}
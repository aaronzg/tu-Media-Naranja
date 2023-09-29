// Data container items

const userName = document.querySelector('#user_name');
const inputName = document.querySelector('#input_user_name');
const boton = document.querySelector('#start_match');
const loadingSvg = document.querySelector('#loading');
const result = document.querySelector('#result');

const grados = ["1A","1B",'1C','1D'];
const inicial = ['a','b','c','d','e','f','g','h','i','j','k','l', 'ñ','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const distancia = ["menos de 5 metros", "5 metros", "10 metros", "20 metros", "+30 metros"];
const genero = ["hombre", "mujer","Parra","Uriel","Gael","jsCuber","SokiGod","Juan Carlos","Jesus"];


const elementsNumber = 3;

function getRandom(max) {
    let maximus = max + 1;
    return Math.floor(Math.random() * maximus);
}

function cambiarTexto (element, text) {
    element.textContent = text;
};

let userData = '';

function guardarNombre() {
     userData = inputName.value;
}



function startMatch () {
    cambiarTexto(result, "...")
    let num = getRandom(elementsNumber);
    guardarNombre();
    if(userData == '' & userData == ' ') {
        cambiarTexto(userName,"Ingresa un nombre valido")
    }else {
        
        switch (num) {
            case 0: ejecutarCasoG();
                break;
            case 1: ejecutarCasoI();
                break;
            case 2: ejecutarCasoD();
                break;
            case 3: ejecutarCasoGen();
                break;
        };

    }
    
}

function hacerVisible (element) {
    element.classList.add('visible');
}
function hacerInvisible (element) {
    element.classList.remove('visible');
}

function delay (time) {
    return new Promise(resolve => setTimeout(resolve,time));
}

function elegirAleatorio (arr) {
    return arr[getRandom(arr.length - 1)];
}

async function ejecutarCasoG() {
    hacerVisible(loadingSvg);
    await delay(2000);
    hacerInvisible(loadingSvg);
    cambiarTexto(boton,"Saber mas");
    guardarNombre();
    if(userData != '' & userData != ' ') {
        cambiarTexto(userName,userData.toUpperCase())
    } 
    cambiarTexto(result,`De ${elegirAleatorio(grados)}`)
}

async function ejecutarCasoI() {
    hacerVisible(loadingSvg);
    await delay(2000);
    hacerInvisible(loadingSvg);
    cambiarTexto(boton,"Saber mas");
    guardarNombre();
    if(userData != '' & userData != ' ') {
        cambiarTexto(userName,userData.toUpperCase())
    } 
    cambiarTexto(result,`Empieza con la letra ${elegirAleatorio(inicial).toUpperCase()}`);
}

async function ejecutarCasoD() {
    hacerVisible(loadingSvg);
    await delay(2000);
    hacerInvisible(loadingSvg);
    cambiarTexto(boton,"Saber mas");
    guardarNombre();
    if(userData != '' & userData != ' ') {
        cambiarTexto(userName,userData.toUpperCase())
    } 
    cambiarTexto(result,`Estuviste a ${elegirAleatorio(distancia)} de tu media naranja`)
}

async function ejecutarCasoGen() {
    hacerVisible(loadingSvg);
    await delay(2000);
    hacerInvisible(loadingSvg);
    cambiarTexto(boton,"Saber mas");
    guardarNombre();
    if(userData != '' & userData != ' ') {
        cambiarTexto(userName,userData.toUpperCase())
    } 
    cambiarTexto(result,`${elegirAleatorio(genero)}`)
}

boton.addEventListener('click', startMatch)
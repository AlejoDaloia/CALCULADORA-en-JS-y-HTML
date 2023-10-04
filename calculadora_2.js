let valorDisplay= "";
let result= "";
let deshacer="";
let incluye= false;


function sumarDisplay(value){
        valorDisplay+=value;
        document.getElementById("display").value= valorDisplay;
        if (valorDisplay==="800815"){
                alert("tetas!!!!111");
        }
}

function parentesis(value){
        incluye= valorDisplay.includes('(');
        if (incluye===true){
                valorDisplay+=')';
                document.getElementById("display").value= valorDisplay;
        } else{
                valorDisplay+=value;
                document.getElementById("display").value= valorDisplay;
        }
}
function limpiarDisplay(){
        deshacer= valorDisplay;
        valorDisplay="";
        document.getElementById("display").value= "";
}

function del(){
        deshacer= valorDisplay;
        valorDisplay= valorDisplay.slice(0, valorDisplay.length - 1);
        document.getElementById("display").value= valorDisplay;
}

function mostrar_result(){
        valorDisplay= eval(valorDisplay).toString();
        result= valorDisplay
        document.getElementById("display").value= valorDisplay;
}

function undo(){
        valorDisplay= deshacer;
        document.getElementById("display").value= valorDisplay;
}

function ans(){
        document.getElementById("display").value= result;
        valorDisplay= result;
}

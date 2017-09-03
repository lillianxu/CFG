//checkbox

function choiceYes(){
    document.getElementsByName('no')[0].checked=false;
}

function choiceNo(){
    document.getElementsByName('yes')[0].checked=false;
}


//process bar

function processColor(){
       document.getElementById('account').style.backgroundColor="#f0a12e";
}

onload=function(){
    processColor();
}
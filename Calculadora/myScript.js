function sumar(){
    let num1=document.getElementById("numero1").value;
    let num2=document.getElementById("numero2").value;
    let res = parseInt(num1)+parseInt(num2);
    alert(res);
}
function restar(){
    let num1=document.getElementById("numero1").value;
    let num2=document.getElementById("numero2").value;
    let res = parseInt(num1)-parseInt(num2);
    alert(res);
}
function multiplicar(){
    let num1=document.getElementById("numero1").value;
    let num2=document.getElementById("numero2").value;
    let res = parseInt(num1)*parseInt(num2);
    alert(res);
}
function dividir(){
    let num1=document.getElementById("numero1").value;
    let num2=document.getElementById("numero2").value;
    let res = parseInt(num1)/parseInt(num2);
    alert(res);
}
function modulo(){
    let num1=document.getElementById("numero1").value;
    let num2=document.getElementById("numero2").value;
    let res = parseInt(num1)%parseInt(num2);
    alert(res);
}
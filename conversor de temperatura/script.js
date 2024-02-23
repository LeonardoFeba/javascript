var celsius = 0;     
var farenheit = 0;

function fahrenheit(){
    celsius = document.getElementById('celsius').value;
    if(celsius.length == 0){
        alert('favor inserir um numero valido');
    }
    else{
        farenheit = ((celsius * 9/5) + 32);
        document.getElementById("resultado").value = farenheit;
    }

}
































































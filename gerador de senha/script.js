function pswGenerate(){
    let characters = "abcdefghijklmnopqrstuvwxyz";
    let password = "";
    let passwordS = "";
    let length = document.getElementById("pswLength").value;
    let qtd = document.getElementById("pswQtd").value;
    let spc = document.getElementById("special").checked;
    let num = document.getElementById("number").checked;
    let upp = document.getElementById("upperCase").checked;

    if (spc == true){
        characters += "!@#$%&()";
    }
    if (num == true){
        characters += "1234567890";
    }
    if(upp == true){
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    
    for(let x=1; x <= qtd; x++){
        password = "";
        for(let y = 1; y <= length; y++){
            password = password + characters.charAt(Math.floor(Math.random() * characters.length)); 
        
        }
        passwordS = password + "\n" + passwordS;
    }
    document.getElementById("answer").value = passwordS;
}

function pswClean(){
    document.getElementById("answer").value = "";
}

















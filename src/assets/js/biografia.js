function agregarBiografia(){
    document.getElementById("outputBiografia").style.display = "block";   
    let text = document.getElementById("inputBiografia").innerText;

    function biografia(valor){
        document.getElementById("inputBiografia").innerText = valor;
    }
};
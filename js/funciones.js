
//CODIGO DEL SCANNER 
$( document ).ready(function(){
    let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
    scanner.addListener('scan', function(content) {
        window.location=content;
        sessionStorage.setItem(content,"visitado");
    });
    Instascan.Camera.getCameras().then(function(cameras) {
        if (cameras.length > 0) {
            scanner.start(cameras[0]);
        } else {
            console.error('No se encontro ninguna camara en el dispositivo!.');
        }
    }).catch(function(e) {
        console.error(e);
    });
});
/******************************/

//Listar Muestras
function listar(nombreObjeto){
    var encontrado = false;
    for(var i=0; i<sessionStorage.length; i++){
        if(nombreObjeto === sessionStorage.key(i).slice(0,-5)){
            encontrado = true;
        }   
    }
    if (encontrado) {
        var codigoHtml = "<p>&#10004 "+nombreObjeto+"</p>";
    } else {
        var codigoHtml = "<p>&#10006 "+nombreObjeto+"</p>";
    }
    document.getElementById(nombreObjeto).innerHTML = codigoHtml;
}
/*******************************/
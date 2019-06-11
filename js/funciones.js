
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


//Lista de visitados
function listado(){
    for(var i=0; i<sessionStorage.length; i++){
        var nombre = sessionStorage.key(i);
        console.log(nombre);
    }
}
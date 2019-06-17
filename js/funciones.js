
//CODIGO DEL SCANNER 
$( document ).ready(function escanear(){
    let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
    scanner.addListener('scan', function(content) {
        window.location=content;
        sessionStorage.setItem(content,"visitado");
    });
    if(document.getElementById('preview')!=null){
        Instascan.Camera.getCameras().then(function(cameras) {
            if (cameras.length > 0) {
                if (cameras[1]==null) {
                    scanner.start(cameras[0]);
                } else {
                    scanner.start(cameras[1]);
                }
            } else {
                console.error('No se encontro ninguna camara en el dispositivo!.');
            }
        }).catch(function(e) {
            console.error(e);
        });
    }
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
        //var codigoHtml = "<p>&#10004 "+nombreObjeto+"</p>";
        document.getElementById(nombreObjeto).className = 'visto';
    } else {
        //var codigoHtml = "<p>&#10006 "+nombreObjeto+"</p>";
        document.getElementById(nombreObjeto).className = 'noVisto';
    }
    //document.getElementById(nombreObjeto).innerHTML = codigoHtml;
}
/*******************************/
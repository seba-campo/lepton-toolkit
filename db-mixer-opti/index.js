const jsonfile = require('jsonfile');


function main(){
    // RAW DATA
    const arrayDeColores = ["Espiga","Alaska","Anahuac","Aserradero Nordico","Blanco Absoluto","Blanco Frosty","Cairo","Cendra Escandinavo","Cerezo","Chardonnay","Cocoa","Dakota","Durango","Ebano Indi","Encino Polar","Espresso","Fresni Bruma","Gris","Gris Claro","Jade","Laricina Siberia","Latte","Linosa Ceniza","Lombardia","Malta","Marmara","Metropolitan","Monarca","Moscato","Nativa","Nebraska","Negro","Niquel","Nocce Milano","Nogal Britanico","Nogal neo","Nogal Terracota","Nougat","Oporto","Oxford","Precompuesto Ceniza","Rioja","Riviera","Roble Americano","Roble Dakar","Roble Merida","Roble Provenza","Roble Santana","Seda Giorgo","Teka Artico","Terra","Toscana","Turmalina","Vison","Vizcaya","Wengue","Zafiro"];

    var arrayExport = [];
    
    // Textos personalizados.
    const textoPrevio = "Tapacanto ";
    
    const ceroCuarentaCinco = " 0.45mm.";
    const uno = " 1mm."
    const unoOcho = " 1.8mm.";
    const dos = " 2mm.";
    const tres = " 3mm.";
    
    
    
    // Logica de concadenación
    function agregarTemplate (arrayBase, textoPrevio, textoPost){
        for(let i = 0; i< arrayBase.length; i++){
            var element = arrayBase[i];
            var matFinal = textoPrevio + element + textoPost;
    
            arrayExport.push(matFinal);
        };   
    }
    
    // Procesar los siguientes colores con los diferentes textos
    agregarTemplate(arrayDeColores, textoPrevio, ceroCuarentaCinco);
    
    agregarTemplate(arrayDeColores, textoPrevio, uno);
    
    agregarTemplate(arrayDeColores, textoPrevio, unoOcho);
    
    agregarTemplate(arrayDeColores, textoPrevio, dos);
    
    agregarTemplate(arrayDeColores, textoPrevio, tres);
    
    // Se ordena el array antes de exportarlo alfabeticamente al JSON
    arrayExport.sort((a,b) => {
        if(a > b){
            return 1
        }
        if(a < b){
            return -1
        }else{
            return false
        }
    });
    
    // Objeto que va a ser adherido
    const materialObject = {};
    
    materialObject.materiales = arrayExport;
    
    // Escribir el JSON
    jsonfile.writeFileSync('./nombres.json', materialObject)
    
    // console.log(arrayExport);
}

main();
const fs = require('fs');

function parseaArgv(){
    const _ = process.argv;

    // console.log(_)

    const t = parseInt(_[2]);
    const i = parseInt(_[3]);
    const p = _[4];

    // console.log(p)
    main(t,i,p);
}

function main(qtyTab, qtyItem, fileName){
    const array = [];

    for(let n = 1; n<= qtyTab; n++){
        for ( let i = 1; i<= qtyItem; i++){
            // const tab = "   ";
            // var texto = "{"
    
            var result = "{pieza_obs_"+n+"_"+i+"};{pieza_mat_"+n+"_"+i+"};{pieza_c_arr_"+n+"_"+i+"};{pieza_c_aba_"+n+"_"+i+"};{pieza_c_der_"+n+"_"+i+"};{pieza_c_izq_"+n+"_"+i+"}\n";
    
            array.push(result);
    
        }
    }

    fileName = "./"+fileName+".txt";

    fs.writeFile(fileName, array.join(''), err => {
        if (err) {
            console.error(err);
        }else{
            console.log("Creado el archivo----");
            console.log("Creadas "+ qtyTab +" tablas, con "+ qtyItem + " valores por cada una. En el archivo: " + fileName);
        }
    });
};

parseaArgv();
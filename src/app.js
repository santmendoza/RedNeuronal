
var network = new brain.NeuralNetwork();

//Entrenar al darle ejemplos de cuando poner texto blanco o negro
network.train([
    //Fondo negro, entrada en 0s = texto blanco (salida=1)
    {input:{rojo:0, verde:0, azul:0}, output: {color:1}},
    //Fondo blanco, entrada en 1s = texto negro (salida=0)
    {input:{rojo:1, verde:1, azul:1}, output: {color:0}},
    //Fondo verde, texto negro
    {input:{rojo:0, verde:1, azul:0}, output: {color:0}},
    //Fondo azul, texto blanco
    {input:{rojo:0, verde:.43, azul:1}, output: {color:1}},
    //Fondo rojo, texto blanco
    {input:{rojo:1, verde:0, azul:0}, output: {color:1}}
])




function update(color) {
    var rgb = [color.channels.r,color.channels.g,color.channels.b];
    var div= document.getElementById("sitio");
    div.style.background = color.toHEXString();

    var entrada ={
        rojo: rgb[0]/255,
        verde: rgb[1]/255,
        azul: rgb[2]/255,
    };

    //obtener predicción de la red neuronal
    var resultado = network.run(entrada);
        console.log(resultado);
        if(resultado.color >.5){
            div.style.color ="white";
        } else{
            div.style.color ="black";
        }
}



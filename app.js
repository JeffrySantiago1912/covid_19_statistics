/*Ver un solo pais 
    const verDatos = async() =>{
    const respuesta = await fetch("https://api.covid19api.com/total/country/dominican-republic"); //Debemos convertir la informacion en Json
    const dominicanRepublic = await respuesta.json();

    //Variable donde estara la informacion para recorrerla//
    covid19 = dominicanRepublic;

    for(let i = 0; i < dominicanRepublic.length; i++){
                                                
                                                 //Construir el formato de las tablas//
        document.getElementById("tabla").innerHTML += "<tr>" +              //Pegamos las columnas "Date,Confirmed,Death" que esta en el link de la api , estas hacen referencia a Fecha,Casos y Muertes//
                                                       "<td>" + covid19[i]["Date"] + "</td>" +
                                                        "<td>" + covid19[i]["Confirmed"] + "</td>" + 
                                                          "<td>" + covid19[i]["Deaths"] + "</td>" +
                                                          "</tr>";
    }
};   */
       




//Buscar por Paises
function verPais(){

    let paises = document.getElementById("paises");

    //Pais que el usuario selecciono//
    let pais = paises.options[paises.selectedIndex].value;

    const verDatosPorPais = async() =>{
        const respuesta = await fetch("https://api.covid19api.com/total/country/"+pais); //Debemos convertir la informacion en Json
        const dominicanRepublic = await respuesta.json();
    
        //Variable donde estara la informacion para recorrerla//
        covid19 = dominicanRepublic;
    
        for(let i = 0; i < dominicanRepublic.length; i++){
                                                    
                                                     //Construir el formato de las tablas//
            document.getElementById("tabla").innerHTML += "<tr>" +              //Pegamos las columnas "Date,Confirmed,Death" que esta en el link de la api , estas hacen referencia a Fecha,Casos y Muertes//
                                                           "<td>" + covid19[i]["Date"] + "</td>" +
                                                            "<td>" + covid19[i]["Confirmed"] + "</td>" + 
                                                              "<td>" + covid19[i]["Deaths"] + "</td>" +
                                                              "</tr>";
        }
    };

    verDatosPorPais();

}
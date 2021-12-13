function populateSelectI() {
  var incantesimo = [
    {
      nome: "Bagliore Lunare",
      livello: 2,
      gittata: "36 metri",
      durata: "concentrazione, fino a 1 minuto",
      classi: ["druido"],
      effetto:
        "Un bagliore argentato di luce pallida forma un cilindro del raggio di 1,5 metri e alto 12 metri, centrato su un punto entro gittata. Creature che entrano subiscono TS, se fallito 2d10 di danno"
    }
  ];
  var elei = document.getElementById("in");
  for (var i = 0; i < incantesimo.length; i++) {
    // POPULATE SELECT ELEMENT WITH JSON.
    elei.innerHTML =
      elei.innerHTML +
      '<option value="' +
      "livello:" +
      incantesimo[i]["livello"] +
      +"<br>  " +
      "gittata:" +
      incantesimo[i]["gittata"] +
      "<br>  " +
      "durata:" +
      incantesimo[i]["durata"] +
      "<br>  " +
      "classi:" +
      incantesimo[i]["classi"] +
      "<br>  " +
      "effetto:" +
      incantesimo[i]["effetto"] +
      '"><br> ' +
      incantesimo[i]["nome"] +
      "</option>";
  }
}

function showi(elei) {
  // GET THE SELECTED VALUE FROM <select> ELEMENT AND SHOW IT.
  var msgi = document.getElementById("msgi");
  msgi.innerHTML =
    "incantesimo selezionata: <b>" +
    elei.options[elei.selectedIndex].text +
    "</b> </br>" +
    "descrizione: <b>" +
    elei.value +
    "</b></br>";
}

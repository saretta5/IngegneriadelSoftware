function populateSelectE() {
  var equipaggiamaneto = [
    {
      nome: "falcetto",
      valore: "1 mo",
      danni: "1d4",
      proprieta: "leggera",
      peso: "1 kg",
      descrizione: "-"
    }
  ];

  var elee = document.getElementById("eq");
  for (var i = 0; i < equipaggiamaneto.length; i++) {
    // POPULATE SELECT ELEMENT WITH JSON.
    elee.innerHTML =
      elee.innerHTML +
      '<option value="' +
      "valore:" +
      equipaggiamaneto[i]["valore"] +
      "<br> " +
      "danni:" +
      equipaggiamaneto[i]["danni"] +
      "<br>  " +
      "proprieta:" +
      equipaggiamaneto[i]["proprieta"] +
      "<br>  " +
      "peso:" +
      equipaggiamaneto[i]["peso"] +
      "<br>  " +
      "descrizione:" +
      equipaggiamaneto[i]["descrizione"] +
      '"><br> ' +
      equipaggiamaneto[i]["nome"] +
      "</option>";
  }
}

function showe(elee) {
  // GET THE SELECTED VALUE FROM <select> ELEMENT AND SHOW IT.
  var msge = document.getElementById("msge");
  msge.innerHTML =
    "<b>Equipaggiamaneto selezionato: </b>" +
    elee.options[elee.selectedIndex].text +
    " </br>" +
    elee.value;
}

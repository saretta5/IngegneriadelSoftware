function populateSelectA() {
  // THE JSON ARRAY.

  var msga = " ";

  var abilita = [
    {
      nome: "Druidico",
      livello: 1,
      classe: "druido",
      descrizione:
        "Un druido conosce il Druidico, il linguaggio segreto del suo ordine: può parlare in quel linguaggio e usarlo per lasciare messaggi segreti. Il druido e coloro che conoscono questo linguaggio sono in grado di avvistare questi messaggi automaticamente. Altri possono notare la presenza di un messaggio in Druidico superando la prova Saggezza (Percezione) con CD 15, ma non possono decifrarlo senza l'aiuto della magia."
    }
  ];

  var elea = document.getElementById("ab");
  var classe = document.getElementById("classe").value;
  var livello = document.getElementById("livello").value;

  for (var i = 0; i < abilita.length; i++) {
    // POPULATE SELECT ELEMENT WITH JSON.
    console.log(livello);
    console.log(classe);
    if (
      abilita[i]["livello"] <= parseInt(livello, 10) &&
      abilita[i]["classe"] == classe.toLowerCase()
    ) {
      elea.innerHTML =
        elea.innerHTML +
        '<option value="' +
        "livello:" +
        abilita[i]["livello"] +
        " " +
        "classe:" +
        abilita[i]["classe"] +
        " " +
        "descrizione:" +
        abilita[i]["descrizione"] +
        '">' +
        abilita[i]["nome"] +
        "</option>";
    }
  }
}

function show(elea) {
  // GET THE SELECTED VALUE FROM <select> ELEMENT AND SHOW IT.
  var msga = document.getElementById("msga");
  msga.innerHTML =
    "Abilità selezionata: <b>" +
    elea.options[elea.selectedIndex].text +
    "</b> </br>" +
    "descrizione: <b>" +
    elea.value +
    "</b></br>";
}

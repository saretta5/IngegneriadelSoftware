function populate() {
  // THE JSON ARRAY.

  var scheda = [
    {
      allineamento: "C/G",
      bonus: "2",
      ca: "19",
      car: "6",
      caster: "on",
      classe: "druido",
      cos: "4",
      des: "3",
      for: "23",
      hp: "30",
      iniziativa: "10",
      int: "5",
      livello: "3",
      nome: "Eldor",
      note: "prova",
      razza: "Elfo",
      sag: "5"
    }
  ];

  document.getElementById("allineamento").value = scheda[0]["allineamento"];
  document.getElementById("bonus").value = scheda[0]["bonus"];
  document.getElementById("ca").value = scheda[0]["ca"];
  document.getElementById("car").value = scheda[0]["car"];
  document.getElementById("classe").value = scheda[0]["classe"];
  document.getElementById("cos").value = scheda[0]["cos"];
  document.getElementById("des").value = scheda[0]["des"];
  document.getElementById("for").value = scheda[0]["for"];
  document.getElementById("hp").value = scheda[0]["hp"];
  document.getElementById("iniziativa").value = scheda[0]["iniziativa"];
  document.getElementById("int").value = scheda[0]["int"];
  document.getElementById("livello").value = scheda[0]["livello"];
  document.getElementById("nome").value = scheda[0]["nome"];
  document.getElementById("note").value = scheda[0]["note"];
  document.getElementById("razza").value = scheda[0]["razza"];
  document.getElementById("sag").value = scheda[0]["sag"];

  if (scheda[0]["caster"] == "on") {
    document.getElementById("caster").checked = true;
  }
}

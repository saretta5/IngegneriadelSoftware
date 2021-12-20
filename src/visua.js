function carica(x) {
  var schede = [
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

  var pagina = document.getElementById("page");

  if (x == true) {
    schede.forEach((scheda) => {
      pagina.innerHTML =
        pagina.innerHTML +
        '<div class="scheda" style="background-color:lightcyan; margin-left: 25%; margin-right: 25%; width: 50%; text-align: left; border-style:solid; border-color:black;">' +
        '<div class="scheda-body" style="margin:3%;">' +
        "<h2>" +
        scheda["nome"] +
        "</h2>" +
        '<h5 class="scheda-text">' +
        scheda["razza"] +
        " " +
        scheda["classe"] +
        " " +
        scheda["livello"] +
        "</h5>" +
        '<a href="visualizzazione_singola.html" class="btn btn-primary">Vai alla scheda</a>' +
        '<button class="btn btn-danger">Elimina</button>' +
        "</div>" +
        "</div>" +
        "<br>";
    });
  } else {
    schede.forEach((scheda) => {
      pagina.innerHTML =
        pagina.innerHTML +
        '<div class="scheda" style="background-color:lightcyan; margin-left: 25%; margin-right: 25%; width: 50%; text-align: left; border-style:solid; border-color:black;">' +
        '<div class="scheda-body" style="margin:3%;">' +
        "<h2>" +
        scheda["nome"] +
        "</h2>" +
        '<h5 class="scheda-text">' +
        scheda["razza"] +
        " " +
        scheda["classe"] +
        " " +
        scheda["livello"] +
        "</h5>" +
        '<a href="single_view.html" class="btn btn-primary">Go</a>' +
        '<button class="btn btn-danger">Delete</button>' +
        "</div>" +
        "</div>" +
        "<br>";
    });
  }
}

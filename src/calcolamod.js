function calcola() {
  var forz = document.getElementById("for").value;
  var dest = document.getElementById("des").value;
  var cost = document.getElementById("cos").value;
  var inte = document.getElementById("int").value;
  var sagg = document.getElementById("sag").value;
  var cari = document.getElementById("car").value;

  document.getElementById("mfor").value = Math.trunc(
    (parseInt(forz, 10) - 10) / 2
  );
  document.getElementById("mdes").value = Math.trunc(
    (parseInt(dest, 10) - 10) / 2
  );
  document.getElementById("mcos").value = Math.trunc(
    (parseInt(cost, 10) - 10) / 2
  );
  document.getElementById("mint").value = Math.trunc(
    (parseInt(inte, 10) - 10) / 2
  );
  document.getElementById("msag").value = Math.trunc(
    (parseInt(sagg, 10) - 10) / 2
  );
  document.getElementById("mcar").value = Math.trunc(
    (parseInt(cari, 10) - 10) / 2
  );
}

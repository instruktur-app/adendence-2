function male(she) {
  return "Mas. " + she[0].toUpperCase() + she.slice(1).toLowerCase();
}

function feMale(he) {
  return "Mba. " + he[0].toUpperCase() + he.slice(1).toLowerCase();
}

function saiHai(name, call) {
  if (call == "she") {
    return "Halo " + feMale(name);
  } else if (call == "he") {
    return "Hi " + male(name);
  }
}

console.log(saiHai("Dono", "he"));
// Hi Mas. Dono
console.log(saiHai("Dini", "she"));
// Halo Mba. Dini

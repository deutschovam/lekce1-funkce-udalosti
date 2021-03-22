// tady je místo pro náš program


//document.querySelector("#vysledek").innerHTML = secti(4, 5);
/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */
function secti(a, b) {
  let c = a + b;
  return c;
}

/**
 * Upozorní uživatele při spuštění.
 */



function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");
  console.log("Gratulace, právě jsi spustila tuto funkci!");
  
  let squareElement = document.getElementsByClassName("ctverecek")[0];
  squareElement.textContent = "Gratulace, právě jsi spustila tuto funkci!";
  squareElement.style.width = "400px";
}

function barva(){
  document.querySelector(".ctverecek").style.backgroundColor = "green";
}

function zobrazVysledek(){
  document.querySelector("#vysledek").innerHTML = secti(4, 5);
}

/*
netuším, jak před kliknutím na tlačítka nechat původní text čtverečku, prázdnou konzoli a skrýt výsledek. Nikde v materiálech jsem to nenašla a sama jsem na to nepřišla. Když dám příkazy přímo do funkce, nefungují vůbec. Když je dám mimo, spouští se hned, i když v HTML mám "onclick".
*/
let affichage = "";
let memoire = "";
let result = "0";
let a = "";
let r = "";
let c = "";
let d = "";
const ecran = document.querySelector(".result");
const memo = document.querySelector(".memoire");
const btn = document.querySelector("#histo");
const histo = document.querySelector(".historique");
const close = document.querySelector(".close");
const reshisto = document.querySelector(".reshisto");
let touches = document.querySelectorAll("input");
let tab = [];
for (let touche of touches) {
  touche.addEventListener("click", gerertouches);
}
document.addEventListener("keydown", gerertouches);

function gerertouches(event) {
  let touche = "";
  let l = affichage.length - 1;
  const listetouches = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "Backspace",
    "+",
    "-",
    "/",
    "*",
    "Delete",
    "Enter",
    "m",
  ];
  if (result != "0") {
    affichage = "";
    ecran.placeholder = affichage;
    result = "0";
  }
  if (event.type === "keydown") {
    if (listetouches.includes(event.key)) {
      touche = event.key;
    }
  } else {
    touche = this.value;
  }

  if (parseInt(touche) >= 0) {
    affichage = affichage + touche;
    ecran.placeholder = affichage;
    memo.placeholder = eval(affichage).toString();
  } else if (touche === ".") {
    if (affichage[l] != ".") {
      affichage = affichage + touche;
      ecran.placeholder = affichage;
      memo.placeholder = eval(affichage).toString();
    }
  } else if (touche === "+") {
    if (affichage != "") {
      affichage = affichage + "+";
      ecran.placeholder = affichage;
      memo.placeholder = eval(affichage).toString();
    }
  } else if (touche === "π") {
    affichage = affichage + "3.14";
    ecran.placeholder = affichage;
    memo.placeholder = eval(affichage).toString();
  } else if (touche === "-") {
    if (affichage != "") {
      affichage = affichage + "-";
      ecran.placeholder = affichage;
      memo.placeholder = eval(affichage).toString();
    }
  } else if (touche === "(") {
    affichage = affichage + "(";
    ecran.placeholder = affichage;
    memo.placeholder = eval(affichage).toString();
  } else if (touche === ")") {
    affichage = affichage + ")";
    ecran.placeholder = affichage;
    memo.placeholder = eval(affichage).toString();
  } else if (touche === "%") {
    affichage = affichage + "%";
    ecran.placeholder = affichage;
    memo.placeholder = eval(affichage).toString();
  } else if (touche === "*") {
    if (affichage != "") {
      affichage = affichage + "*";
      ecran.placeholder = affichage;
      memo.placeholder = eval(affichage).toString();
    }
  } else if (touche === "/") {
    if (affichage != "") {
      affichage = affichage + "/";
      ecran.placeholder = affichage;
      memo.placeholder = eval(affichage).toString();
    }
  } else if (touche === "CE" || touche === "Delete") {
    affichage = "";
    ecran.placeholder = affichage;
    memo.placeholder = eval(affichage).toString();
  } else if (touche === "C" || touche === "Backspace") {
    affichage = affichage.substr(0, l);
    ecran.placeholder = affichage;
    memo.placeholder = eval(affichage).toString();
  }
  if (
    (touche === "=" && affichage != undefined && affichage != "") ||
    (touche === "Enter" && affichage != undefined && affichage != "")
  ) {
    let temp = affichage;
    affichage = eval(affichage);
    affichage = affichage.toString();
    result = affichage;
    memoire = affichage;
    ecran.placeholder = affichage;
    console.log(result);
    memo.placeholder = affichage;
    c = r;
    memo1 = temp + " " + "=" + " " + affichage + "<br>";
    r = memo1;
    r = r + c;
    reshisto.innerHTML = r;
    memo.placeholder = eval(affichage).toString();
  }
  if (touche === "M" || touche === "m") {
    affichage = affichage + memoire;
    ecran.placeholder = affichage;
    memo.placeholder = eval(affichage).toString();
  }
}

btn.addEventListener("click", () => {
  histo.classList.toggle("show");
});

close.addEventListener("click", () => {
  histo.classList.toggle("show");
});

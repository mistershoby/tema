//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////                   CERINTA              /////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// -----------------------------------------------------------------------------------------------------------------------------------------------------//
// 1. Metode de proiectarea algoritmilor - Proiectarea modulara

// 1.1 Subprograme.
// Notiunea de subprogram.
// Tipuri de subprograme.
// Structura subprogramelor:
// Transmiterea parametrilor: parametri (actuali, formali, corespondenţa), transmitere prin valoare, transmitere prin referinţă/adresă.
// Apelul subprogramelor: utilizarea apelului în cadrul expresiilor, apel de tip instrucţiune, autoapelare (recursivitate).

// 1.2 Modularizarea programelor
// Variabile globale şi locale,
// Domeniul de vizibilitate,
// Integrarea subprogramelor în cadrul programului

// 2.  Metode de proiectarea algoritmilor - Programarea structurata. Principii.
// Instructiunile simple ale limbajului.
// Structuri de decizie/alternative: cu o singură ramură, cu două ramuri, selecţie multiplă (case / switch)
// Structuri repetitive: cu test iniţial, cu test final, cu număr cunoscut de paşi, scrierea de programe echivalente.

// Metode de proiectarea algoritmilor - Proiectarea modulara

// 1.1 Subprograme si parametri
// Definirea unei functii pentru afisarea unui text primit ca parametru
// Returnarea unui text din interiorul unei functii si afisarea acestuia.
// Transmiterea parametrilor conform numarului, pozitiei si a tipului  acestora.
// Identificarea domeniului de vizibilitate a variabilelor, declararea locala, globala a variabilelor
// Apelarea functiilor cu parametri, ca metode pentru obiecte, in mod recursiv, cu temporizare
// Aplicatii practice pentru apelarea functiilor din alte functii, returnarea rezultatelor in interiorul expresiilor, functii care returneaza rezultatul unor operatii simple ca adunarea, scaderea, impartirea etc.

// 2.  Metode de proiectarea algoritmilor - Programarea structurata

// Operatorii de atribuire, interschimbarea continutului a doua variabile

// Instructiunea if. Aplicatii: program arie triunghi, ecuatie de gradul 1, verificare numar par/impar, maximul a 3 numere

// Structuri repetitive: sintaxa instructiunilor for si while
// Aplicatii : Afisarea primelor n numere naturale, n numere pare/impare, divizori, numere prime, probleme cu cifre are unor numere,

// Doresc la aceasta tema sa definiti, sa dati exemple, si sa recititi pentru ca urmeaza un examen curand :)

// Tema trebuie postata pe github, iar pe chat sa dati link-ul de la tema

// Cu tema aceasta ne reluam activitatea, iar de saptamana viitoare intram in paine

// Tema valabila pana Duminica, cine poate mai devreme pana marti ( 13 feb )
// -----------------------------------------------------------------------------------------------------------------------------------------------------//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1. Metode de proiectarea algoritmilor - Proiectarea modulara

// 1.1 Subprograme ( functii ).

const prenume = "John";
const nume = "Doe";
const anDeNastere = 1888;
const anCurent = 2050;

const johnDoe = `Ma numesc ${prenume + nume} si varsta mea este ${
  anCurent - anDeNastere
} ani`;
console.log(johnDoe);

//  String and template literals

// 1.1.1)  Notiunea de subprogram.

// Un subprogram este un ansamblu ce poate conţine tipuri de date, variabile  şi instrucţiuni destinate unei anumite prelucrări (calcule, citiri, scrieri). Subprogramul poate fi executat doar dacă este apelat de către un program sau un alt subprogram.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1.1.2)  Tipuri de subprograme ( functii )

// ->  a)  function declaration  (  Functie care poate fi folosit inainte de a fi declarat )
console.log(`function declaration`);
function calcVarsta1(anulDeNastere) {
  return 2066 - anulDeNastere;
}

const Varsta1 = calcVarsta1(1995);
console.log(Varsta1);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ->  b)  function expression   (  o functie valoare stocata intr-o variabila )
console.log(`function expression`);
const calcVarsta2 = function (anulDeNastere) {
  return 2066 - anulDeNastere;
};

const Varsta2 = calcVarsta2(1995);
console.log(Varsta2);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ->  c)  arrow function        ( pentru o linie rapidă de rulare a functiei  )
console.log(`arrow function`);
const calcVarsta3 = (anulDeNastere) => 2066 - anulDeNastere;
const Varsta3 = calcVarsta3(1995);
console.log(Varsta3);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1.1.3)  Structura subprogramelor

function exempluStructuraFunctie(pretProdus, valoare) {
  const baniRamasi = 1000 - pretProdus;
  console.log(`Pe ${valoare} au mai ramas ${baniRamasi} euro`);
  return baniRamasi;
}

const baniRamasi = exempluStructuraFunctie(800, "Card");

// a)    exempluStructuraFunctie  -> numele functiei
// b)    pretProdus, valoare      -> parametrii  ( substituenti pentru a primi valorile de intrare )

//   --- returneaza declaratia pentru a scoate o valoare din functie si pentru termina executia --- //
// c)
// const baniRamasi = 1000 - pretProdus;
// console.log(`Pe ${valoare} au mai ramas ${baniRamasi} euro`);
// return baniRamasi;

// d)   const baniRamasi = exempluStructuraFunctie(800, "Card");  <---->   baniramasi    -> variabila pentru a salva valoarea returnata (function output)
// e)   const baniRamasi = exempluStructuraFunctie(800, "Card");  <---->   800 si "Card" -> Argumente: valori reale a parametrilor functiei, la date de intrare
// f)   const baniRamasi = exempluStructuraFunctie(800, "Card");  <---->   ( )           -> Apelarea, alergarea sau invocarea funcția, folosind parantezele < =>()

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1.1.4)  Transmiterea parametrilor  / Apelul subprogramelor

// a) Parametrii Impliciti  ( daca o functie este apelata cu argumente lipsa (mai putin decat cele declarate), valorile lipsa sunt setate la nedefinit. )

function Param1(v, f) {
  if (f === undefined) {
    f = 200;
  }
  return v + f;
}

const Parametrii = Param1(4);
console.log(Parametrii);

// b) Parametrii impliciti cu valoare

function Param2(r, h = 10) {
  return r + h;
}

// daca nu ii atribuim lui h o valoare, acesta va ramane la valoare implicita de 10

const Parametrii2 = Param2(50);
console.log(Parametrii2);

// c) The Spreat operator  (...)
// SPREAD - in dreapta semnului de =
const ParamMatrice1 = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const Parametrii3 = [1, 2, 3, ...ParamMatrice1];
console.log(Parametrii3);

// d) The Rest operator
// REST - in stanga semnului de =
const ParamMatrice2 = ([a1, a2, ...restul] = [
  11, 22, 33, 44, 55, 66, 77, 88, 99,
]);
console.log(a1, a2, restul);

// 1.1.5) Apelul subprogramelor - recursivitate

// function recursivitate(action) {
//     console.log(`Ma tot ${action}.`)
//     recursivitate(action)
//   }

//   recursivitate("repet")

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1.2 Modularizarea programelor

// 1.2.1 Variabile globale si locale

// VARIABILE GLOBALE ->  Acestea sunt variabile care sunt definite in domeniul global, adica in afara functiilor. Aceste variabile au un domeniu de aplicare global, astfel incat pot fi accesate direct de orice functie. In cazul variabilelor globale, cuvantul cheie cu care sunt declarate nu conteaza, toate actioneaza la fel. O variabila declarata fara un cuvant cheie este, de asemenea, considerata globala, chiar daca este declarata in functie.

let numeMasina = "Chevrolet"; // -> variabila globala
variabilaGB();

function variabilaGB() {
  putereCai = "210 CP";
  console.log(
    typeof numeMasina + "- " + "Marca masinii mele este " + numeMasina
  );
}

console.log(
  typeof numeMasina +
    "- " +
    "Marca masinii mele este  " +
    numeMasina +
    " Are " +
    putereCai
);

// VARIABILE LOCALE ->   Cand utilizati JavaScript, variabilele locale sunt variabile care sunt definite în cadrul functiilor. Au sfera locala, ceea ce inseamna ca pot fi utilizate numai in cadrul functiilor care le definesc. Accesarea acestora in afara functiei va genera o eroare

variabilaLC();
simplaFunctie();
let numeMasina2;
function variabilaLC() {
  let numeMasina2 = "Chevrolet"; // -> variabila locala
  console.log(numeMasina2);
}
function simplaFunctie() {
  let numeMasina2 = "Crue";
  console.log(numeMasina2);
}
console.log(numeMasina2);

// 2.1  operatori de atribuire

// operatorul = :
let aaa = 50;
console.log(aaa);

// operatorul += :
let bbb = 50;
bbb += 5;
console.log(bbb);

// operatorul -+ :
let ccc = 50;
ccc -= 5;
console.log(ccc);

// operatorul *= :
let ddd = 50;
ddd *= 5;
console.log(ddd);

// operatorul /= :
let eee = 50;
eee /= 5;
console.log(eee);

// operatorul %= :
let fff = 50;
fff %= 5;
console.log(fff);

// 2.2 Instructiunea IF
// if - pentru a specifica un bloc de cod care urmeaza sa fie executat, daca o conditie specificata este adevarata
// else - pentru a specifica un bloc de cod care urmeaza sa fie executat, daca aceeași conditie este falsa
// else if - pentru a specifica o nouă conditie de testat, daca prima conditie este falsa

const varstaLegataPermis = 16;
if (varstaLegataPermis >= 18) {
  console.log(` Bravo, ai voie sa conduci`);
} else {
  const aniRamasi = 18 - varstaLegataPermis;
  console.log(
    `Esti prea tanar, nu ai voie sa conduci. Mai asteapta ${aniRamasi} ani pentru a putea lua permisul de conducere`
  );
}

// 2.3 WHILE LOOP
// Bucla while trece printr-un bloc de cod atata timp cat o condițtie specificata este adevarata.

let text = "";
let i = 5;
while (i < 15) {
  text += " Numarul este " + i;
  i++;
}
console.log(text);

// 2.3 DO WHILE LOOP
// Bucla do while este o varianta a buclei while.
// Aceasta bucla va executa blocul de cod o data, inainte de a verifica dacă conditia este adevarata, apoi va repeta bucla atata timp cat conditia este adevarata.

let text2 = "";
let i2 = 5;

do {
  text2 += " Numarul este " + i2;
  i2++;
} while (i2 < 15);
console.log(text2);

// 2.4 SWITCH
// switch - este utilizata pentru a efectua diferite actiuni bazate pe diferite conditii
let denumireZi;
switch (new Date().getDay()) {
  case 0:
    denumireZi = "Duminica";
    break;
  case 1:
    denumireZi = "Luni";
    break;
  case 2:
    denumireZi = "Marti";
    break;
  case 3:
    denumireZi = "Miercuri";
    break;
  case 4:
    denumireZi = "Joi";
    break;
  case 5:
    denumireZi = "Vineri";
    break;
  case 6:
    denumireZi = "Sambata";
}

console.log(`Astazi este ${denumireZi}`);
// for - trece printr-un bloc de cod de mai multe ori

const firmeCeasuri = [
  "Rolex",
  "Casio",
  "Police",
  "Cartier",
  "Omega",
  "Patek Philippe",
];

let text4 = "";
for (let ooo = 0; ooo < firmeCeasuri.length; ooo++) {
  text4 += firmeCeasuri[ooo] + " ";
}
console.log(text4);

////////////////////////////////////////////////////////////////////////////////// 2.5 Aplicatie arie triunghi

// const bazaValoare = prompt("Enter the base of a triangle: ");
// const inaltimeValoare = prompt("Enter the height of a triangle: ");
// const valoareArie = (bazaValoare * inaltimeValoare) / 2;
// console.log(`The area of the triangle is ${valoareArie}`);

//////////////////////////////////////////////////////////////////////////////2.6 Aplicatie verificare numar daca este par sau impar
// const verificareNumar = prompt("Scrie un numar: ");
// if (verificareNumar % 2 == 0) {
//   console.log("Numarul este par.");
// } else {
//   console.log("Numarul est impar.");
// }

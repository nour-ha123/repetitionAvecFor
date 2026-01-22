// ex 1
function sommeDeN (num) {
    var somme = 0;
    for ( var i = 0; i <= num ; i++) {
        somme = somme + i
    }
    return somme
}
sommeDeN(5);

// ex 2
function factorielleDeN (num) {
    var somme = 1;
    for ( var i = 1; i <= num ; i++) {
        somme = somme * i
    }
    return somme
}
factorielleDeN(5);

//ex3
function répéterChaîne(chaine, nombre) {
    repeter = ""
    for (var i = nombre; i > 0; i--)  {
        repeter = repeter + chaine
    }
    return repeter
}
répéterChaîne("hi",5);

// ex4
function sommeMinÀMax(minimum, maximum) {
    somme = 0
    for ( var i = minimum; i < maximum ; i++)  {
        somme = somme + i
    }
    return somme
}
sommeMinÀMax(1,5);

// ex5
function produitMinÀMax(minimum, maximum) {
    somme = 1
    for ( var i = minimum; i < maximum ; i++)  {
        somme = somme * i
    }
    return somme
}
produitMinÀMax(1,5);

// plus pratique
// ex 1
function multiplierPar10NFois(num, n) {
    for (var i=0; i < n; i++) {
      num = num * 10;
    }
    return num;
}
multiplierPar10NFois(3, 3);

// ex2
function compterCaractèreÀIndex(string1, index, string2) {
    var res = string1[index];
    var compteur = 0;
    for (var i = 0; i < string2.length; i++) {
        if (string2[i] === res) {
            compteur++;
        }
    }

    return compteur;
}
compterCaractèreÀIndex("world", 3, "Hello World");

// ex3
function inverserChaîne(chaine) {
    var res = "";
    for (var i = 0; i < chaine.length; i++) {
      res = chaine[i] + res; 
    }
    return res;
}

inverserChaîne("hello");

// ex4
function obtenirIndiceDe(chaine, caractere) {
    for(var i=0; i < chaine.length; i++) {
        if (chaine[i] === caractere) {
            return i
        }
    }
          
}
obtenirIndiceDe("I am a hacker", "a");

// ex 5
function sommePairs(nombre1, nombre2) {
    var res = 0;
    var counter = nombre1;
    if (counter % 2 !== 0) {
        counter++; 
    }
    for (var i = counter; i < nombre2; i += 2) {
      res += i; 
    }
  
    return res;
}
sommePairs(3, 9);
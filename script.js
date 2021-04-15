var limite = 100;
var num_bombe = 16;
var num_tentativi = limite - num_bombe;
var all_bombs = generatoreBombe(num_bombe, limite);
var num_giocati =[];



function numeriRandom (max){
    return Math.ceil(Math.random() * max);
}

function generatoreBombe (numBomb, max){
    var bombe = [];

    while(bombe.length < all_bombs)
    var bomb = numeriRandom(max);
    if(bombe.includes(bomb) === false){
        bombe.push(bomb);
    }
    return bombe;
}


var fine = false;
while(fine === false){
    var num_utente = parseInt(prompt("inserisci un numero"));

    if(num_giocati.includes(num_utente) === true){
        alert("il numero è gia stato inserito")
    }else if ( all_bombs.includes(num_utente) === true){
        alert("Hai perso! Hai fatto " + num_giocati.length + "tentativi");
        console.log("Tentativi fatti: " + num_giocati.join() + ". Il numero che ti ha fatto perdere è stato il "+ num_utente);
        fine=true
    }else if( num_utente > limite){
        alert("il numero che hai inserito è superiore al limite di " + limite);
    }else if( num_utente < 1 ){
        alert("Il numero non può essere inferiore a 1")
    }else if(isNaN(num_utente) === true){
        alert("devi inserire un numero")
    }else{
        num_giocati.push(num_utente);
        if(num_tentativi === num_giocati.length){
            alert("HAI VINTO");
            fine = true;
        }
    }
    
}
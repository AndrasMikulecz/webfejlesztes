document.getElementById("vegeredmeny").addEventListener("click", eredmeny);
function eredmeny()
{

/* VÁLTOZÓK */

    let shi = 0;
    let vin = 0;
    let fig = 0;
    let juj = 0;
    let cha = 0;

/* 1.Rádiógombos vizsgálata */

    if(document.getElementById("csata").checked){
        shi = shi+1;
    }
    if(document.getElementById("harcok").checked){
        cha = cha+1;
    }
    if(document.getElementById("termfeletti").checked){
        juj = juj+1;
    }
    if(document.getElementById("sport").checked){
        fig = fig+1;
    }
    if(document.getElementById("tortenelem").checked){
        vin = vin+1;
    }

/* 2.Rádiógombos vizsgálata */

    if(document.getElementById("kek").checked){
        juj = juj+1;
    }
    if(document.getElementById("barna").checked){
        shi = shi+1;
    }
    if(document.getElementById("sarga").checked){
        vin = vin+1;
    }
    if(document.getElementById("piros").checked){
        fig = fig+1;
    }
    if(document.getElementById("szurke").checked){
        cha = cha+1;
    }

/* 1.Lista vizsgálata */

    let x = document.getElementById("EtelLista").selectedIndex;

    if(x == 0){shi = shi+0; juj = juj+0; fig = fig+0; vin = vin+0; cha = cha+0;}
    if(x == 1){shi = shi+1;}
    if(x == 2){juj = juj+1;}
    if(x == 3){fig = fig+1;}
    if(x == 4){vin = vin+1;}
    if(x == 5){cha = cha+1;}

/* 2.Lista vizsgálata */

    let y = document.getElementById("AllatLista").selectedIndex;

    if(y == 0){shi = shi+0; juj = juj+0; fig = fig+0; vin = vin+0; cha = cha+0;}
    if(y == 1){shi = shi+1;}
    if(y == 2){cha = cha+1;}
    if(y == 3){vin = vin+1;}
    if(y == 4){fig = fig+1;}
    if(y == 5){juj = juj+1;}

/* 3.Lista vizsgálata */

    let z = document.getElementById("AlakzatLista").selectedIndex;

    if(z == 0){shi = shi+0; juj = juj+0; fig = fig+0; vin = vin+0; cha = cha+0;}
    if(z == 1){shi = shi+1;}
    if(z == 2){cha = cha+1;}
    if(z == 3){juj = juj+1;}
    if(z == 4){fig = fig+1;}
    if(z == 5){vin = vin+1;}

/* Végeredmény */

    if (shi == vin && vin == fig && fig == juj && juj == cha){
        document.getElementById("elsoanime").innerHTML = "Egyenlőség alakult ki. Pörgess tovább, kattints a 'Pörgetés' gombra és derítsük ki véletlenszerűen!";
    }
    if (shi > vin && shi > fig && shi > juj && shi > cha){
        document.getElementById("elsoanime").innerHTML = "Az anime, amit elsőnek nézz meg: Shingeki no Kyojin";
    }
    if (vin > shi && vin > fig && vin > juj && vin > cha){
        document.getElementById("elsoanime").innerHTML = "Az anime, amit elsőnek nézz meg: Vinland Saga";
    }
    if (fig > shi && fig > vin && fig > juj && fig > cha){
        document.getElementById("elsoanime").innerHTML = "Az anime, amit elsőnek nézz meg: Fighting Spirit";
    }
    if (juj > shi && juj > vin && juj > fig && juj > cha){
        document.getElementById("elsoanime").innerHTML = "Az anime, amit elsőnek nézz meg: Jujutsu Kaisen";
    }
    if (cha > shi && cha > vin && cha > fig && cha > juj){
        document.getElementById("elsoanime").innerHTML = "Az anime, amit elsőnek nézz meg: Chainsaw Man";
    }

}

document.getElementById("SzerencseGomb").onclick = function()
{
    const szam =Math.floor(Math.random() * 10) + 1;

    if(szam <= 2){
        document.getElementById("PorgetAnime").innerHTML = "Az anime, amit elsőnek nézz meg: Shingeki no Kyojin";
    }
    if(szam > 2 && szam <= 4){
        document.getElementById("PorgetAnime").innerHTML = "Az anime, amit elsőnek nézz meg: Jujutsu Kaisen";
    }
    if(szam > 4 && szam <= 6){
        document.getElementById("PorgetAnime").innerHTML = "Az anime, amit elsőnek nézz meg: Chainsaw Man";
    }
    if(szam > 6 && szam <= 8){
        document.getElementById("PorgetAnime").innerHTML = "Az anime, amit elsőnek nézz meg: Fighting Spirit";
    }
    if(szam > 8){
        document.getElementById("PorgetAnime").innerHTML = "Az anime, amit elsőnek nézz meg: Vinland Saga";
    }

}
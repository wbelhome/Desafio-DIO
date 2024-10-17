const ranks = rank(2, 5)

function rank(victory, defeat){
    return victory - defeat
}

const level = levelHero(ranks); 

function levelHero(){
    if ( ranks <= 10) {
         nivel = "Ferro"; 
    } 
    
    else if(ranks >= 11 && ranks <= 20){
        nivel = "Bronze"; 
    }
    
    else if(ranks >= 21 && ranks <= 50){
        nivel = "Prata"; 
    }

    else if(ranks >= 51 && ranks <= 80){
        nivel = "Ouro"; 
    }

    else if(ranks >= 81 && ranks <= 90){
        nivel = "Diamante"; 
    }

    else if(ranks >= 91 && ranks <= 100){
        nivel = "Lendário"; 
    }

    else if(ranks > 101){
        nivel = "Imortal"; 
    }
}

switch (nivel) {
    case "Ferro":
        console.log(`O Herói tem saldo de ${ranks} vitorias e está no nível de ${nivel}`)
        break;

    case "Bronze":
            console.log(` Herói tem saldo de ${ranks} vitorias e está no nível de ${nivel}`)
            break;    
            
    case "Prata":
            console.log(` Herói tem saldo de ${ranks} vitorias e está no nível de ${nivel}`)
            break;

    case "Ouro":
            console.log(` Herói tem saldo de ${ranks} vitorias e está no nível de ${nivel}`)
            break;

    case "Diamante":
            console.log(` Herói tem saldo de ${ranks} vitorias e está no nível de ${nivel}`)
            break;

    case "Lendário":
            console.log(` Herói tem saldo de ${ranks} vitorias e está no nível de ${nivel}`)
            break;
    
    case "Imortal":
            console.log(` Herói tem saldo de ${ranks} vitorias e está no nível de ${nivel}`)
            break;

}

const nome = "William";
const xp = -54; 
let nivel = "";

if(xp < 0){
    //Apenas uma validação, não pensei em algo melhor :(
}

else if (xp <= 1000) {
     nivel = "Ferro"; 
} 

else if(xp >= 1001 && xp <= 2000){
    nivel = "Bronze"; 
}

else if(xp >= 2001 && xp <= 5000){
    nivel = "Prata"; 
}
else if(xp >= 5001 && xp <= 7000){
    nivel = "Ouro"; 
}
else if(xp >= 7001 && xp <= 8000){
    nivel = "Platina"; 
}
else if(xp >= 8001 && xp <= 9000){
    nivel = "Ascendente"; 
}
else if(xp >= 9001 && xp <= 10000){
    nivel = "Imortal"; 
}
else{
    nivel = "Radiante"; 
}

switch (nivel) {
    case "Ferro":
        console.log(`O Herói ${nome} está no nível ${nivel}`)
        break;

    case "Bronze":
            console.log(`O Herói ${nome} está no nível ${nivel}`)
            break;    
            
    case "Prata":
            console.log(`O Herói ${nome} está no nível ${nivel}`)
            break;

    case "Ouro":
            console.log(`O Herói ${nome} está no nível ${nivel}`)
            break;

    case "Platina":
            console.log(`O Herói ${nome} está no nível ${nivel}`)
            break;

    case "Ascendente":
            console.log(`O Herói ${nome} está no nível ${nivel}`)
            break;
    
    case "Imortal":
            console.log(`O Herói ${nome} está no nível ${nivel}`)
            break;
    case "Radiante":
            console.log(`O Herói ${nome} está no nível ${nivel}`)
            break;

    default:
        console.log(`Não há nível para sua experiência ${nome} :( `)
        break;
}

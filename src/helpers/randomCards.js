
export function randomCards(array) {
 
    const randomArray = [...array]
    
    for(let index = randomArray.length -1; index > 0; index--){
        let novoIndex = Math.floor(Math.random() * (index +1 ));
        [randomArray[index], randomArray[novoIndex]] = [randomArray[novoIndex], randomArray[index]]
    }

    return randomArray;
}

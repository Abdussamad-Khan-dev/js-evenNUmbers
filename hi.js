function findEven(value){
        let num = 0
    for(let i = 1; i<=value; i++){
        if(i%2 === 0){
            console.log(i,'even');
            num++
            
        }
        else {
            console.log(i,'odd');
            
        }
    }
    return num
    
}

console.log('even numbers = ',findEven(14));

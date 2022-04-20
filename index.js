function tikTakToe (gameField){
if (gameField.length !== 9){return false;}

    let winningCombos = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];


    for ( let i = 0 ; i < winningCombos.length; i++ ){
            let currentCombo = winningCombos[i];

            let firstElement = gameField[currentCombo[0]];
            let secondElement = gameField[currentCombo[1]];
            let thirdElement = gameField[currentCombo[2]];

           if (firstElement === secondElement && secondElement === thirdElement && thirdElement !== ' '){
               return true;
           }
              
    }

return false;
}

module.exports = tikTakToe;
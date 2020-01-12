function closesToZero(array){
    if(typeof array !== 'object' || !array.length ) {
      return "The array is not valid"
    } 
    let positive, negative, response = null
    numbers: for(let number of array){
      if(number == 0){
        response = 0
        break numbers;
      }else {
        if(number < 0){
          negative = negative ? (number > negative ? number : negative) : number
        }else {
          positive = positive ? (number < positive ? number : positive) : number
        }
      }
    }
    return response === null ? ( positive <= (negative*-1) ? positive : negative ) : response 
  }
  
  console.log(closesToZero([-4,20,14,20,51]))
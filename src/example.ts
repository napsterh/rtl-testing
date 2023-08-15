export const sumPositiveNumber = (number1 : number, number2 : number) => {
   if ( number1 < 0 || number2 < 0 ){
      throw new Error('One of number is negative')
   }
   return number1 + number2
}
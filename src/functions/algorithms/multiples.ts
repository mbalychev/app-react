// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Additionally, if the number is negative, return 0.
// Note: If the number is a multiple of both 3 and 5, only count it once.

export type TMultiplesRes = {
    multiples: number[];
    summ: number
}
export const multiples = (number: number): TMultiplesRes => {
    let res = 0;
    let multiples: number[] = [];

      for(let i: number = 0; i < number; i++){
        if( i%3 === 0 || i%5 === 0){
            res +=i;
            multiples.push(i);
        }
      }

      return {multiples: multiples, summ: res};
    }
  
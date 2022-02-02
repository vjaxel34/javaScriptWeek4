//*VERY HARD: You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// Hint:  Sudo code this problem. Focus on breaking the problem down into steps  Use functions, arrays and logical operators.  Do not have anyone give you the answer or solve this problem for you. 

// Example 1:

// Input: coins = [1, 2, 5], amount = 11

// Output: 3 

// Explanation: 11 = 5 + 5 + 1

// Example 2:

// Input: coins = [2], amount = 3

// Output: -1

 

// Note: You may assume that you have an infinite number of each kind of coin.


//coins = 1, 2, 5
//what is the minimum value 
//amount = 11
// arrays, iteration 
// coins : 0  1  2  3  4  5  6  7  8  9  10 11
// amount: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 10, 11
// is coin <= amount 
// amount - coin = index 
// table [index] + 1 = potential amount 
//table [i] = min [table [i]], potential amount

let coinChange = function(coins, amount){
    const table = Array(amount + 1).fill(Infinity);
    table[0] = 0;
    for(let coin of coins){
        for(let i = 0; i < table.length; i++){
            if(coin <= i){
                let idx = i -coin;
                let potentialAmt = table[idx] + 1;
                table[i] = Math.min(potentialAmt, table[i]);
            }
        }
    }
    return table[table.length -1] === Infinity ? -1 : table[table.length - 1];

}
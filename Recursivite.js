let intArray = [1,2,3,4,5,6,7]

// Prendre un entier issu du tableau  
// Prendre un 2eme entier issu du tableau
// Les additionner 
function sum1(tableau) {
    let result = 0
    for (let i = 0; i<tableau.length; i++)
        result += tableau[i]
    
    return result
}

// let resSum = sum1(intArray)
// console.log(resSum)

// function sum2(tableau) {
//     let result = 0
//     let element = tableau.shift()
//     if (tableau.length == 0){
//         return
//     }
//     console.log(element)
//     sum2 (result += element)

// }

// console.log(sum2(intArray))



function sum3(tableau){
    if (tableau.length === 0){
        return 0
    } else {
        return tableau[0] + sum3(tableau.slice(1))
    }
}
//console.log(sum3(intArray))

    //Etape 3
function factorial(entier){
    if (entier === 0){
        return 1
    } else {
        return entier * factorial(entier-1)
    }
}
console.log(factorial(4))

function fibonacci1 (entier){
    let result = 0
    let x = 0
    let y = 1
    for (let i = 2; i<= entier; i++){
        result = x + y
        x = y
        y = result
    }
    return result

}
console.log(fibonacci1(3))
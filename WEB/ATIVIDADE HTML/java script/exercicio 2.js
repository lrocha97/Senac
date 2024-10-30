var arr1 = [1,2,3,4,5]
var arr2 = [5,6,7,8,9,10]

function retirador(arr1, arr2){
    var j = arr1.concat(arr2)
    for (let i = 0; i < j.length; i++){
        for (let y = 1+i; y < j.length; y++ ){
            if (j[i] == j[y]){
                j.splice(y,1)
                y = y-1
            }
        }
    }
    return j
}


console.log(retirador(arr1, arr2))
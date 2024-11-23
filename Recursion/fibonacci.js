function fibs(nb)
{
    arr = [0,1];
    if (nb < 1)
        return [];
    if (nb === 1)
        return [0];
    for (let i = 2 ; i < nb; i++)
    {
        let a = arr[arr.length-1];
        let b = arr[arr.length-2];
        arr.push(a + b);
    }
    return arr;
}

// console.log(fibs(8));
function fibsRec(nb){
    if (nb < 1)
        return [];
    if (nb === 1)
        return [0];
    if (nb === 2)
         return [0, 1];
    let arr = fibsRec(nb - 1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr
}
// console.log(fibsRec(8));
function mergeSort(arr){
    // :(
}
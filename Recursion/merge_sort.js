function mergeSort(arr)
{
    if(arr.length <= 1)
        return arr;
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0,middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left),mergeSort(right));
}

function merge(left,right){
    const res = [];
    let i = 0 , j = 0 ;
    for (; i < left.length && j < right.length; )
    {
        if (left[i] < right[j])
        {
            res.push(left[i]);
            i++;
        }else{
            res.push(right[j]);
            j++;
        }
    }

    return res.concat(left.slice(i)).concat(right.slice(j));
}

const array = [38,45385758,5432,5,2,1,-1, 9, 82, 10];
console.log(mergeSort(array));
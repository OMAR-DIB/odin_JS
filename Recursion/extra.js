function sumRange(nb){
    if (nb === 1)
      return 1;
    return nb + sumRange(nb - 1);
  }
  function power(base,exp){
    if (exp === 0 ) return 1;
  
    return base * power(base , exp - 1);
  }
  
  function factorial(nb){
    if (nb === 1) return 1;
    return nb * factorial(nb -1);
  }
  function productOfArray(arr){
  
    if (arr.length === 0) return 1;
    return arr.shift() * productOfArray(arr); 
  }
  function replicate(repetitionNb,nb){
    if (repetitionNb <= 0) return [];
    return [nb].concat(replicate(repetitionNb - 1,nb));
  }
  console.log( replicate(-3,5));
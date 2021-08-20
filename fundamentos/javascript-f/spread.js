function sum(x, y, z,a,s,d,f) {
    return x + y + z + a + s + d + f;
  }
  
  const numbers = [1, 2, 3,4,5,6,7];
  
  console.log(sum(...numbers));
  // expected output: 28
  
  console.log(sum.apply(null, numbers));
  // expected output: 28
function countBy(x, n) {
  var z = [];
  for(let i = 1; i<=n; i++) {
    (j=>z.push(j*x))(i,x)
  }
  return z;
}
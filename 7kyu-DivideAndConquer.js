function divCon(x){
  let res = 0, 
      total = 0
  x.map(x => (typeof x === "string"? res += (+x) : total += x))
  return total-res
}
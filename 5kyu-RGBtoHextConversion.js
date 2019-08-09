function rgb(r, g, b){
  let convert = (num) => num.toString(16).toUpperCase()
  let check = (num) => num <= 255 ? (num > 0 ? convert(num) : "00" ) : "FF"
  return [check(r),check(g),check(b)].map(x=>x.length < 2 ? "0" + x : x).join('')
}
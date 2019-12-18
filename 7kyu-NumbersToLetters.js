function switcher(x){
 let alphabet = ' ?!abcdefghijklmnopqrstuvwxyz'.split('');
 let res = ''
 x.map(x=>res += alphabet[alphabet.length - (+x)])
 return res
}
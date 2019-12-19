function borrow(s){
  //let a=s.toLowerCase().split('')
    
  return s.toLowerCase().split('').filter(x=>x!== ' '&&x!== '!' && x!=='?' && x!==',' && x!=='.' && x!==';' && x!==':' && x!=='*').join('')
}
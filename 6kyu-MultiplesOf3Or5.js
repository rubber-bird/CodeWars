function solution(number){
  let res = 0,
      arr = []
      
  for(let i = 0; i < number; i++) {
    if(i%5 === 0 || i%3 === 0) 
      arr.push(i)
  }
  
  return arr.length === 0? 0 : arr.reduce((acc,val) => acc+val)
  
}
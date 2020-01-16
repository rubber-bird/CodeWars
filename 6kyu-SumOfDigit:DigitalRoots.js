function digital_root(n) {
	let res = 0;
	let arr = String(n).split('')
    for(let i=0; i< arr.length; i++){
      res += Number(arr[i])
    }
  	return String(res).length !== 1 ? digital_root(res) : res
}
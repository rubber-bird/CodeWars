function nthFibo(n) {
	let array = [0,1,1]
	for(let i = 3; i<n;i++) {
		array[i] = array[i-1] + array[i-2] 
	}
	return array[n-1]
}
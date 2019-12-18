function duplicateCount(text){
	const obj = {}, res = []
	const objCount = (obj,prop) => obj[prop]++
	for(let i=0; i<text.length;i++) {
		if(obj.hasOwnProperty(text[i]) === true) {
			objCount(obj, text[i])
		} else {
			Object.defineProperty(obj, text[i], {
				writable: true,
				value:0,
			})
		}
	}
	for(let a in obj) {
		console.log(a)
	}
}

duplicateCount("abrbrr")
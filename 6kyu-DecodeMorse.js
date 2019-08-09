function decode(str) {
	let keys = [['.-', 'a'], ['-...', 'b'], ['-.-.', 'c'], ['-..', 'd'], ['.', 'e'], ['..-.', 'f'],['--.', 'g'],['....', 'h'], ['..', 'i'], ['.---', 'j'], ['-.-', 'k'], ['.-..', 'l'], ['--', 'm'], ['-.', 'n'],['---','o'],['.--.','p'],['--.-','q'],['.-.','r'],['...','s'],['-.','n'],['-','t'],['..-','u'],['...-','v'],['.--','w'], ['-..-', 'x'],['-.--','y'], ['--..','z'],['', ' '],['.----','1'],['..---','2'],['...--','3'],['....-','4'],['.....','5'],['-....','6'],['--...','7'],['---..','8'],['----.','9'],['-----','0']]
	let res = []
	let map = new Map(arr)
	let parsedStr = str.split(' ').forEach(x => res.push(map.get(x)))
	return res.join('')
}
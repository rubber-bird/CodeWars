function exp(num, oper) {
	if(!oper) {
		return num
	}
	return oper(num)
}
function zero(arg) { return exp(0,arg) }
function one(arg) { return exp(1,arg) }
function two(arg) { return exp(2,arg) }
function three(arg) { return exp(3,arg) }
function four(arg) { return exp(4,arg) }
function five(arg) { return exp(5,arg) }
function six(arg) { return exp(6,arg) }
function seven(arg) { return exp(7,arg) }
function eight(arg) { return exp(8,arg) }
function nine(arg) { return exp(9,arg) }

function plus(y) {
	return function(x){
		return x+y
	}
}
function minus(y) {
	return function(x){
		return x-y
	}
}
function times(y) {
	return function(x){
		return x*y
	}}
function dividedBy(y) {
	return function(x){
		return Math.floor(x/y)
	}
}
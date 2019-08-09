function add(x, y)
{
    while(y!=0) {
    	let j = x & y
    	x = x ^ y
    	y = j << 1
    }
    return x 
}
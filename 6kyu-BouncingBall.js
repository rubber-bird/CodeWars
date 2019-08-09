function bouncingBall(h,  bounce,  window) {
  var res = -1
  if (bounce > 0 && bounce < 1) 
  	while (h > window) {
  		res+=2
  		h *= bounce
  	}
  return res
}
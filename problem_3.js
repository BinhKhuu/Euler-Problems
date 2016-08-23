
//simple factirial function
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  
  // This is it! Recursion!!
  return n * factorial(n - 1);
}
//finding the Greatest common divisor via Eucidean Alogirthm
function greatest_common_divisor(a,b) {
	var gcd;
	var r;
	gcd = 0;
	while (gcd === 0) {
		if (a === 0) {
			gcd = b;
		}
		else if (b === 0) {
			gcd = a;
		}
		else {
			r = a % b;
			a = b;
			b = r;
		}
	}
	return gcd;
}
//using pollards roh factorization
//a = 2^(k!)
// = a -1 % 2
//very long computation for 600851475143, cant find it using pollards
var factor = 44100;
var p_factor;
var a;
var k = 2;
var gcd =1;
while (gcd ===1) {
	a = Math.pow(2,factorial(k)) % factor;
	gcd = greatest_common_divisor(factor,a -1);
	k += 1;
	console.log("a is: "+a);
	console.log("gcd is: "+gcd);
}

p_factor = factor / gcd;
console.log(p_factor);

//using pollards algorithm on wikipedia
/* 
var number = 1000;
var x_fixed = 2;
var cycle_size = 2;
var x = 2;
var factor = 1;
var count;
while (factor ===1) {
	for(count =1; count < cycle_size && factor <= 1; count++) {
		x = (x*x+1)%number;
		factor = greatest_common_divisor(x - x_fixed, number);
		console.log(factor);
	}
	
	cycle_size *= 2;
	x_fixed = x;
}
console.log("The factor is: " + factor);
*/
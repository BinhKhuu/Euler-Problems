var sum;
var fib_1;
var fib_2;
var fib;
sum = 2;
fib_2 = 2;
fib_1 = 1;
fib = fib_1 + fib_2;
//33 loops
while (fib < 4000000) {
	fib_1 = fib_2;
	fib_2 = fib;
	fib = fib_1 + fib_2;
	if (fib % 2 === 0) {
		sum += fib;
	}
}
console.log(sum);
var n;
var sum_2;
var fibo;
var phi;
var phi_2;
var n_phi;
var n_phi_2;
phi = (1 + Math.sqrt(5))/ 2;
phi_2 = (1 - Math.sqrt(5))/ 2;
sum_2 = 0;
fibo = 0;
n = 3;
//every third term is even in the fibonacci sequence
//11 loops
while (fibo < 4000000) {
	n_phi = Math.pow(phi,n)/Math.sqrt(5);
	n_phi_2 = Math.pow(phi_2,n)/Math.sqrt(5);
	fibo = -1 *n_phi_2 + n_phi;
	if (fibo < 4000000){
		sum_2 += fibo;	
	}
	n += 3;
}
console.log(sum_2);

//fastest O(1) time
//Because the fibonacci numbers are by definition based on the addition of the previous two numbers
//sum of all even fibonacci = sum off all fibonacci numbers up to n divided by 2
//starting at 0 the highest number in the sequence that is less than 4000000 is: fib(33) = 3524578, sum off all numbers up to fib(33) = fib(33)+fib(34) = fib(35)
//formular found on wikipedia fib(n+2) - 1
fibonacci = -1 * (Math.pow(phi_2,35))/Math.sqrt(5)) + (Math.pow(phi,35)/Math.sqrt(5));
console.log(Math.floor(fibonacci/2));
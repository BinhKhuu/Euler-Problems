var sum = 0;
var ii;
for(ii = 0; ii < 1000; ii += 5) {
	if (ii % 3 !== 0) {
		sum += ii;
	}
}
for(ii = 0; ii < 1000; ii += 3) {
	sum += ii;
}
console.log(sum);
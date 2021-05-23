/*
Write a function to check for fast / slow speed, which: 
●	Receives a number (speed)
●	Prints "Slow" if the number <= 30
●	Prints "Fast" if the number > 30
*/

function main(speed) {
	if (speed > 30) {
		console.log("Fast");
	} else {
		console.log("Slow");
	}
}

main(30);
main(60);
main(25);
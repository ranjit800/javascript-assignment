


let root1, root2;

// take input from the user
let a = 1;
let b = 5;
let c = 6;

// calculate discriminant
let discriminant = b * b - 4 * a * c;

// condition for real and different roots
if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

// condition for real and equal roots
else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);

    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

// if roots are not real
else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    // result
    console.log(
    `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
  );
}




// // JavaScript program to find roots
// // of a quadratic equation

// 	// Prints roots of quadratic
// 	// equation ax * 2 + bx + x
// 	function findRoots(a, b, c)
// 	{
// 		// If a is 0, then equation is not
// 		// quadratic, but linear

// 		if (a == 0) {
// 			console.log("Invalid");
// 			return;
// 		}

// 		let d = b * b - 4 * a * c;
// 		let sqrt_val = Math.sqrt(Math.abs(d));

// 		if (d > 0) {
// 			console.log(
// 				"Roots are real and different \n");

// 			console.log(
// 				(-b + sqrt_val) / (2 * a))+ "<br/>"
// 				console.log( (-b - sqrt_val) / (2 * a));
// 		}
// 		else if (d == 0) {
// 			console.log(
// 				"Roots are real and same \n");

// 			console.log(-b / (2 * a) + "<br/>"
// 							+ -b / (2 * a)) ;
// 		}
// 	// program to solve quadratic equation
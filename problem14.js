// Javascript program for the above approach
function leftRotate(arr, d, n)
{
	for (let i = 0; i < d; i++)
		leftRotatebyOne(arr, n);
}

function leftRotatebyOne(arr, n)
{
	let i, temp = arr[0];
	for (i = 0; i < n - 1; i++)
		arr[i] = arr[i + 1];

	arr[n - 1] = temp;
}

/* utility function to print an array */
function printArray(arr, size)
{
	for (let i = 0; i < size; i++)
		console.log(arr[i] + " ");
}

// Driver Code
let arr = [ 1, 2, 3, 4, 5,6,7 ];
let n = arr.length;
let k = 73;
	
// Function call
leftRotate(arr, k, n);
printArray(arr, n);

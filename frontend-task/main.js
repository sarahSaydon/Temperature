/*
 * Write a function that prints the temperature closest to 0 among input data.
 * If two numbers are equally close to zero, positive integer has to be considered closest to zero (for instance, if the temperatures are -5 and 5, then display 5)
*/
const temps = [
    '1 -1 -3 3 2',
    '-4 -2 -111',
    '12 -1 3 6 2 9',
    '12 2 6 9 -2 7',
    '-5 -4 -2 7 -20 4 2 18 11 5',
    ''
];

// Receive string of temps one after each other
function outputTemp(tempRow) {

          var array = [];
	  array.push(tempRow.split(' ').map(Number))
          return (closestTemp (0, array[0]));
 
}
function closestTemp (num, arr) {
    var curr = arr[0];
    var diff = Math.abs (num - curr);
    for (var val = 0; val < arr.length; val++) {
        var newdiff = Math.abs (num - arr[val]);
        if (newdiff < diff) {
            diff = newdiff;
            curr = arr[val];
        }
	else if(newdiff == diff)
        {
	//if difference is the same set the positive value as current
	   if(curr < arr[val])
	    {
	       curr = arr[val];
	    }
	}
    }
    return curr;
}
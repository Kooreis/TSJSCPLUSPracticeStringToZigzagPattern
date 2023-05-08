Here is a JavaScript solution for the problem:

```javascript
function convertToZigZag(s, numRows) {
    if (numRows === 1) return s;

    const len = Math.min(s.length, numRows);
    const rows = [];
    for (let i = 0; i < len; i++) rows[i] = [];
    let loc = 0;
    let down = false;

    for (let c of s) {
        rows[loc].push(c);
        if (loc == 0 || loc == numRows - 1) down = !down;
        loc += down ? 1 : -1;
    }

    let result = '';
    for (let row of rows) {
        result += row.join('');
    }
    return result;
}

console.log(convertToZigZag('PAYPALISHIRING', 3));
```

This console application will convert a string into a zigzag pattern based on a given number of rows. The `convertToZigZag` function takes a string and a number of rows as parameters. It first checks if the number of rows is 1, in which case it simply returns the original string. If the number of rows is more than 1, it creates an array of empty arrays, one for each row. It then iterates over the characters in the string, adding each character to the appropriate row. The `loc` variable keeps track of the current row, and the `down` variable determines whether the next character should be placed in the row above or below the current one. After all characters have been placed, the function joins the rows together into a single string and returns the result. The console.log statement at the end calls the function with the string 'PAYPALISHIRING' and 3 rows, and prints the result.
Here is a TypeScript solution for the problem:

```typescript
class ZigZagConverter {
    convert(s: string, numRows: number): string {
        if (numRows === 1) return s;

        let len = Math.min(s.length, numRows);
        let rows: string[] = [];
        for (let i = 0; i < len; i++) rows[i] = "";

        let index = 0;
        let down = false;

        for (let c of s.split('')) {
            rows[index] += c;
            if (index == 0 || index == numRows - 1) down = !down;
            index += down ? 1 : -1;
        }

        let result = "";
        for (let row of rows) result += row;
        return result;
    }
}

let zigZagConverter = new ZigZagConverter();
console.log(zigZagConverter.convert("PAYPALISHIRING", 3));
```

This TypeScript console application creates a zigzag pattern from a string based on a given number of rows. The `convert` method in the `ZigZagConverter` class takes a string and a number of rows as parameters, and returns the string in a zigzag pattern. The `convert` method first checks if the number of rows is 1, in which case it simply returns the original string. If the number of rows is more than 1, it creates an array of strings, each representing a row in the zigzag pattern. It then iterates over the characters in the string, adding each character to the appropriate row. The direction of traversal (up or down the rows) is determined by whether the current row is the first or last row. Finally, it concatenates all the rows to form the final zigzag string. The `console.log` statement at the end of the program prints the zigzag string to the console.
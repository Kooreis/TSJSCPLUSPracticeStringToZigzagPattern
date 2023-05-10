class ZigZagConverter {
    convert(s: string, numRows: number): string {
        if (numRows === 1) return s;

        let len = Math.min(s.length, numRows);
        let rows: string[] = [];
        for (let i = 0; i < len; i++) rows[i] = "";

        let index = 0;
        let down = false;
    }
}
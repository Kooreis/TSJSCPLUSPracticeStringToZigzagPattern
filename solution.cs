const len = Math.min(s.length, numRows);
    const rows = [];
    for (let i = 0; i < len; i++) rows[i] = [];
    let loc = 0;
    let down = false;
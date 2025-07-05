function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function add(numbers) {
    if (numbers === "") return 0;

    let delimiters = /,|\n/;

    if (numbers.startsWith("//")) {
        const bracketed = numbers.match(/^\/\/(.+)\n(.*)$/s);

        if (bracketed) {
            const all = bracketed[1];
            const delimiter = [...all.matchAll(/\[(.*?)\]/g)].map(d => escapeRegExp(d[1]));
            delimiters = new RegExp(delimiter.join("|"));
            numbers = bracketed[2];
        }
        else {
            const match = numbers.match(/^\/\/(.+)\n(.*)$/s);
            delimiters = new RegExp(match[1]);
            numbers = match[2];
        }
    }

    const nums = numbers.split(delimiters).map(Number);
    const negatives = nums.filter(n => n < 0);

    if (negatives.length > 0) {
        throw new Error("negative numbers not allowed: " + negatives.join(", "));
    }

    const filtered = nums.filter(n => n <= 1000);
    return filtered.reduce((sum, val) => sum + val, 0);
}

module.exports = add;

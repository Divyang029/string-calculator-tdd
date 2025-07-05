function add(numbers){
    if(numbers === "") return 0;

    let delimiters = /,|\n/;
    
    if(numbers.startsWith("//")){
        const match = numbers.match(/^\/\/(.+)\n(.*)$/s);

        delimiters = new RegExp(match[1]);
        numbers = match[2];
    }
        
    const nums = numbers.split(delimiters).map(Number);
    const negatives = nums.filter(n => n<0);

    if(negatives.length > 0){
        throw new Error("negative numbers not allowed: " + negatives.join(", "));
    }

    const filtered = nums.filter(n => n<=1000);
    return filtered.reduce((sum,val) => sum+val, 0);
}

module.exports = add;

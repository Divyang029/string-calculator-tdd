function add(numbers){
    if(numbers === "") return 0;

    let delimiters = /,|\n/;
    
    if(numbers.startsWith("//")){
        const match = numbers.match(/^\/\/(.+)\n(.*)$/s);

        delimiters = new RegExp(match[1]);
        numbers = match[2];
    }
        
    const nums = numbers.split(delimiters).map(Number);
    return nums.reduce((sum,val) => sum+val, 0);
}

module.exports = add;

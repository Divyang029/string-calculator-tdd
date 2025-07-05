function add(numbers){
    if(numbers === "") return 0;
    if(!numbers.includes(",")) return parseInt(numbers);
        
    const nums = numbers.split(/,|\n/).map(Number);
    return nums.reduce((sum,val) => sum+val, 0);
}

module.exports = add;

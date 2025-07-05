function add(numbers){
    if(numbers === "") return 0;
    else if(!numbers.includes(",")) return parseInt(numbers);
    else{
        const nums = numbers.split(",").map(Number);
        return nums.reduce((sum,val) => sum+val, 0);
    }
}

module.exports = add;

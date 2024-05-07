function first (n){
    if (n === 0){
        return;
    }
    console.log("Recursion::", n)
    first (n-1);
}
first(15)
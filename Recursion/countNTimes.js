function count(n) {
    if (n === 0) return ;
    console.log(n);
    count(n-1);
}
count(10);
// try {
//     function count(i, n) {
//         if (i > n) return;
//         console.log(i);
//         count(i + 1, n);
//     }
//     count(1, 10);
// } catch (error) {
//     console.error("Stack Overflowed");
// }

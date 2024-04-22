const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	 let sum = 0;
    let ans = [];
    let subAns = [];
    arr.forEach((item, i) => {
        if (n >= sum + item) {
            sum += item;
            subAns.push(item);
        } else {
            ans.push(subAns);
            subAns = [item];
            sum = item;
        }
    });
    if (subAns.length > 0) {
        ans.push(subAns);
    }
    return ans;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));

const first = [1,2,3,4,2,3];
const second = [2,1,4,3,3,2];

function changeIndexes(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return "Arrays must be of equal length";
    }
    let result = "";
    for (let i = 0; i < arr1.length; i++) {
        result += `${arr2[i]},${arr1[i]} `;
    }
    return result.trim();
}

const changedString = changeIndexes(first, second);
console.log(changedString); 
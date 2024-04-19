const firstString = "abc";
const secondString = "bca";

let isEqual = true;

for (let i = 0; i < firstString.length; i++) {
    if (firstString.charAt(i) !== secondString.charAt((i + 1) % firstString.length)) {
        isEqual = false;
        break;
    }
}

if (isEqual) {
    console.log("true");
} else {
    console.log("false");
}
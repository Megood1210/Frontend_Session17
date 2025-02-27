let number = prompt("Nhap mot so");
let a = Math.sqrt(number);
let result = (Number.isInteger(a)) ? "là số chính phương" : "không phải số chính phương";
console.log(number + " " + result);
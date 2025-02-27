const day1 = new Date(prompt("Nhap ngay thu nhat"));
const day2 = new Date(prompt("Nhap ngay thu hai"));
const x = (day2 - day1)/(1000 * 60 * 60 * 24);
console.log(`Đô lệch là ${x} ngày`);

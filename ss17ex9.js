let a = prompt("Nhap so a");
let b = prompt("Nhap so b");
let c = prompt("Nhap so c");
let delta = b*b - 4*a*c;
if(delta>0){
    let x1=(-b + Math.sqrt(delta)/(2*a));
    let x2=(-b - Math.sqrt(delta)/(2*a));
    document.write(`Pt có nghiệm là x1 = ${x1}  và x2 = ${x2}`);

}else{
    document.write(`Pt vô nghiệm`);
}
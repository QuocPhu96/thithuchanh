let a = 8;
let b = 12;
let c = -20;
let delta = (b * b) - (4 * a * c);
let x1 = "";
let x2 = "";
if (delta < 0) {
    console.log(' Phương trình vô nghiệm');
} else if (delta > 0) {
    x1 = (-b + Math.sqrt(delta)) / (2 * a);
    x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log('thì phương trình có 2 nghiệm :' + x1 + " và" + x2);
} else {
    x1 = -b / (2 * a)
    console.log("thì phương trình có 1 nghiệm :" + x1)
}
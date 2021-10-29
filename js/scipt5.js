// ตัวแปร Variable เป็นค่าที่เปลี่ยนแปลงตลอดเวลา
var a = 20;
let x = 10000;
const y = "Hello"
{
    let b = 15; // ตัวแปร let ที่ประกาศ ใช้ได้เฉพาะในสโครฟ {}
    var c = 99; // ตัวแปร var ที่ประกาศ ใช้ได้ทุกที่
    const d = 88888; //ตัวแปร const ที่ประกาศ ห้ามเปลี่ยนค่า
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(x);
    console.log('--------------------');

    b = 30;
    a = 100;
    c = 555
    // d = 11111;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log('--------------------');

} // ถ้าอยู่ใน {} มันใช้ได้แค่ในนี้

console.log(x);
console.log(a);
// console.log(b); error เพราะ b อยู่ในสโครฟ {}
console.log(c);
// console.log(d);
console.log('---------------------');
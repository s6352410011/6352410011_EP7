//สร้างตัวแปรเพื่ออ้างอิงไปยังตำแหน่งคอนเทนต์ในเอกสาร HTML 
let money = document.getElementById('money');
let person = document.getElementById('person');
let btnCal = document.getElementById('btnCal');
let btnCancel = document.getElementById('btnCancel');
let result = document.getElementById('result');

// ลองทดสอบตัวแปรที่สร้างไว้ข้างต้นอ้างไปยังคอนเทนต์ในเอกสาร HTML เรียบร้อยไหม

// btnCal.addEventListener('click',()=>{
//     alert('555')
//     result.innerHTML='Wow Wow Wow'
// })

// btnCancel.addEventListener('click',()=>{
//     alert(person.value)
// })

//event click ของปุ่ม btnCal
btnCal.addEventListener('click', () => {
    if (money.value.trim().length == 0) {
        alert('ป้อนเงินด้วย')
    } else if (person.value.trim().length == 0) {
        alert('ป้อนคนด้วย')
    } else {
        // พร้อมจะคำนวณ
        let moneyshare = Number(money.value) / Number(person.value)
        result.innerHTML = moneyshare.toFixed(2)
    }

})
//event click ของปุ่ม btnCancel

// btnCancel.addEventListener('click', () => {
//     money.value = ''
//     person.value = ''
//     result.innerHTML = '0.00'
// })

btnCancel.addEventListener('click', clearScreen)

function clearScreen() {
    money.value = ''
    person.value = ''
    result.innerHTML = '0.00'
}
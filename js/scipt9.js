console.log('Hi js 9....')

function showName(name){
    console.log('สวัสดี' + name);
}
showName('Mint')
showName('Mel')

function calSum( a , b ){
    console.log('a + b ได้ค่าเป็น ')
    return a + b;
}
console.log(calSum(10,20))
// alert(calSum(100,99))

// function test1(){
//     console.log('Hello....')
// }

// let test1 =  function(){
//     console.log('Hello...')
// }

let test1 = () => {
    console.log('Hello...')
}

let test2 =  function(number){
    console.log('Hi....' + number)
}

test1()
test1()
test2()
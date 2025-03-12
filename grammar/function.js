// 일반적인 함수 형식
function test(text){
    console.log('test' + text);
}
test('a');

// arrow function 
// 매개변수가 하나인 경우 소괄호()를 없앤다
testAn = text => {
    console.log('testAn' + text);
}
testAn('arrow function');

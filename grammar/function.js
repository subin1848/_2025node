// 일반적인 함수 형식
function test(text){
    console.log('test' + text);
}
test('a');

// arrow function 
// 매개변수가 하나인 경우 소괄호()를 없앤다
// 함수 body가 return문 하나이거나, 한 줄 일 때 중괄호{}를 없앤다 
testAn = text => console.log('testAn' + text);

testAn('arrow function');

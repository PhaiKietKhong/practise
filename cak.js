var test = document.querySelector('div')
var button = document.getElementById('chiu')

function viec1(){
    console.log("viec1")
}
function viec3(e){
    e.stopPropagation()
    console.log('hehe')
}
var viec2 =function(){
    console.log('viec2')
}
test.addEventListener('click',viec1);
test.addEventListener('dblclick',viec2)
setTimeout(function(){
test.removeEventListener('dblclick',viec2)

},3000)
button.addEventListener('click',viec3)


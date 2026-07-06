// function display(val)
// {
//     document.getElementById('display').value+=val;
// }
// function remove(){
//     document.getElementById('display').value="";
// }

// function calc(){
//     let x= document.getElementById('display').value;
//     let y= eval(x);
//     document.getElementById('display').value=y;
// }
//  function backspace() {
//     let input = document.getElementById('display');
//     input.value = input.value.slice(0, -1);
// }


function display(val){
    document.getElementById('display').value+=val;
}

function calc(){
    x=document.getElementById('display').value;
    y=eval(x);
    document.getElementById('display').value=y;
}

function remove(){
    document.getElementById('display').value=" ";

}

function backspace(){
    let input=document.getElementById('display');
    input.value=input.value.slice(0,-1);
}
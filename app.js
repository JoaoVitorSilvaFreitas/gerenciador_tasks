const inputTask = document.querySelector('.input_task');
const btn_add = document.querySelector('.btn_add');
const btn_finishTask = document.querySelector('.btn_finishTask');
const btn_dropTask = document.querySelector('.btn_dropTask');



function add_task(){
    receiver()
}

function receiver(){
    //alert("o texto foi capturado")
    var task = inputTask.value;
    inputTask.value = "";
    alert(`o valor recuperado foi: ${task}`)
}

//INPUT DE INSERÇÃO DO TEXTO
let inputNew = document.querySelector("#inputNew");
//BOTÃO DE ADICIONAR NOVA TAREFA
let addNew = document.querySelector("#addNew");
//ul para exibição das tarefas
let list = document.querySelector("#list");

let windowEdit = document.querySelector("#windowEdit");

let windowFundo = document.querySelector("#windowFundo");

let btnClose = document.querySelector("#btnClose");

let btnAdd = document.querySelector("#btnAdd");

let idTarefaAtt = document.querySelector("#idTarefaAtt") 

let inputEdit = document.querySelector("#inputEdit") 

inputNew.addEventListener('keypress', (e)=>{
        alert
    if(e.keyCode == 13){
        if(inputNew.value === ''){
            
           inputNew.classList.add("error");
           setInterval(function(){ 
            inputNew.classList.remove("error");
            return
            }, 2000);
            
        }else{
        let tarefa = {
            valor: inputNew.value,
            id:generatorId(),
        }
        addTarefa(tarefa);
}
       
        
    }
});
addNew.addEventListener('click', (e)=>{
    if(inputNew.value == ''){
        inputNew.classList.add("error");
        setInterval(function(){ 
         inputNew.classList.remove("error");
         }, 1500);
    }else{
        let tarefa = {
            valor: inputNew.value,
            id:generatorId(),
        }
        addTarefa(tarefa);
    }
    
});



//função criada pois não temos um banco de local ou remoto, então vamos utilizar uma função para gerar um hash aleatório, para adicionar em id.
function generatorId(){
    return Math.floor(Math.random()*3000);
}

function addTarefa(tarefa){
    let li = createTagLi(tarefa);
     list.appendChild(li);
     inputNew.value = '';

}
function createTagLi(tarefa){

    let li = document.createElement('li');
    li.id = tarefa.id;
    li.classList.add('listLi');
    let span = document.createElement('span');
    span.classList.add('textList');
    span.innerHTML = tarefa.valor;

    let div = document.createElement('div');
    div.classList.add('buttons');

    let btnEdit = document.createElement('button');
    btnEdit.classList.add('btnEdit');
    btnEdit.innerHTML = '<img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/30/000000/external-edit-interface-kiranshastry-gradient-kiranshastry-1.png"/>'
    btnEdit.setAttribute('onclick', 'edit('+tarefa.id+')')


    let btnDelete = document.createElement('button');
    btnDelete.classList.add('btnDelete');
    btnDelete.innerHTML = '<img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/30/000000/external-delete-miscellaneous-kiranshastry-gradient-kiranshastry.png"/>'
    btnDelete.setAttribute('onclick', 'delet('+tarefa.id+')')
   
    div.appendChild(btnEdit);
    div.appendChild(btnDelete);

    li.appendChild(span);
    li.appendChild(div);

    return li;
}

btnClose.addEventListener('click', (e)=>{
    alternarJanelaEdicao()
}
)

btnAdd.addEventListener('click',(e)=>{

    e.preventDefault();
    let idTarefa = idTarefaAtt.innerHTML.replace('#', '')
    
    let tarefa   = {
        valor: inputEdit.value,
        id:idTarefa
    }
    let tarefaAtual = document.getElementById(''+idTarefa+'')
    if(tarefaAtual){
    let li = createTagLi(tarefa);
    list.replaceChild(li, tarefaAtual)
    
    alternarJanelaEdicao()
    }
})

function delet(idTarefa){
    let confirm = window.confirm('Tem certeza que deseja excluir?');
    if(confirm){
        let li = document.getElementById(''+idTarefa+'')
        if(li){
            list.removeChild(li)
        }
    }
}
function edit(idTarefa){
        inputEdit.value =''
        let li = document.getElementById(''+idTarefa+'')
        if(li){
            inputEdit.value = li.innerText;
            idTarefaAtt.innerHTML = '#' + idTarefa;
            alternarJanelaEdicao()
}
        
   
}



function alternarJanelaEdicao() {
    windowEdit.classList.toggle('open');
    windowFundo.classList.toggle('open');
}

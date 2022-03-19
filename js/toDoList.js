let textDOM=document.querySelector("#task")
let ulDOM=document.querySelector("ul#list")

let toDoList=new Array();

if(localStorage.getItem("toDoList")==null){
    localStorage.setItem("toDoList",JSON.stringify(toDoList));
}else{
    toDoList=JSON.parse(localStorage.getItem("toDoList"));
    showList();
}

function newElement(){
    if(isInvalid(textDOM.value)){
        addToList(textDOM.value);        
    }
}

function addToList(taskName){
    toDoList.push(String(taskName));
    console.log(toDoList);
    localStorage.setItem("toDoList",JSON.stringify(toDoList));
    showList();

    //ekranana bilgi kutucuğu çıkartır
    $(document).ready(function(){
        $("#successToast").toast("show")
    }); 


    textDOM.value="";
}

function deleteItem(index){
    toDoList.splice(index,1);
    localStorage.setItem("toDoList",JSON.stringify(toDoList));
    showList();

    $(document).ready(function(){
        $("#deleteItemToast").toast("show")
    });

}

function showList(){
    ulDOM.innerHTML="";
    toDoList.forEach((task,key) => {
        let liDOM=document.createElement("li");

        //Çift tıklandığında li'yi yeşil yapıyor.
        liDOM.addEventListener("click",taskDone);

        liDOM.innerHTML=`${task}<span id="closeButton" class="deleteButton" onclick=deleteItem(${key})><i class="fas fa-trash"></i></span>`;

        ulDOM.append(liDOM);
    });
}


function isInvalid(task){
    let res=task.trim()?true:false;
    return res;

}

function taskDone(){
    this.classList.toggle("bg-success");
}

    
    

//Post -> CRUD


let taskInput = document.querySelector('#taskInput')
let addBtn = document.querySelector('.addBtn')
let todoContainer = document.querySelector('.todoContainer')

let API = 'https://690499ba6b8dabde49645f54.mockapi.io/todo';

addBtn.addEventListener('click', postData);

async function fetchData(){
    let response = await fetch(API); //fetch teh latest data
    let data = await response.json();

    todoContainer.innerHTML = '';


    //whatever data is here we want to loop through and add
    //container ke andar append karao 

    if(data){
        data.forEach(obj=>{
            let newDiv = document.createElement('div');
            newDiv.className = 'todo';
                    newDiv.innerHTML = `
                    <p class='paraText'>${obj.text}</p>
                    <input id="editInput" type="text" placeholder="Enter your task..!!" value='${obj.text}'>
                    <div>
                        <button class='deleteBtn'>Delete</button>
                        <button class='editBtn'>Edit</button>
                        <button class='saveBtn'>Save</button>
                    </div>
                    `
        
                    let deleteBtn = newDiv.querySelector('.deleteBtn')
                    let editBtn = newDiv.querySelector('.editBtn')
                    let saveBtn = newDiv.querySelector('.saveBtn')
                    let paraText = newDiv.querySelector('.paraText')
                    let editInput = newDiv.querySelector('#editInput')
                    
                    deleteBtn.addEventListener('click', function(){
                        deleteData(obj.id);
                    })

                    editBtn.addEventListener('click',function(){
                        //update data
                        //just to check
                        // let editValue = editInput.value;
                        // let response = updateData(obj.id, editValue); 
                        editBtn.style.display = 'none'
                        saveBtn.style.display = 'inline'
                        paraText.style.display = 'none'
                        editInput.style.display = 'inline'
                        
                    })

                    saveBtn.addEventListener('click', async function(){
                        let editValue = editInput.value;
                        let response = await updateData(obj.id, editValue); 
                        if(response.status === 200){ // jab data aajaye
                            editBtn.style.display = 'inline'
                            saveBtn.style.display = 'none'
                            paraText.style.display = 'inline'
                            editInput.style.display = 'none'
                        }
                    })
                    todoContainer.append(newDiv);
        });


    }
    
}

async function postData(){
    let value = taskInput.value; //textbox me jo bhi dala hai
    let objData = {
        text : value.trim()
    }

    let response = fetch(API,
        {
            method : 'POST',
            headers : {//kis tareeka ka response
                'Content-type' : 'application/json',

            },
            body : JSON.stringify(objData)
        }
    )
    if(response.status == 201){ //jab data aajae
        fetchData();
        taskInput.value = '';
    }
}

async function updateData(id, value){

    let objData = {
        text : value.trim()
    }
    let response = fetch(`${API}/${id}`, {
        method : 'PUT',
        headers : {
            'Content-type' : 'application/json',
        },
        body : JSON.stringify(objData)
    });

    return response;

}

async function deleteData(id) {
    let response = await fetch(`${API}/${id}`, { //here endpoint me API/id so it deletes id 3 elem
        method: 'DELETE',
    })
    if (response.status === 200) {
        fetchData();
    }
}

fetchData();
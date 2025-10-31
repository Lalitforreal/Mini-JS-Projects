let addBtn = document.querySelector('.addBtn');
let addInput = document.querySelector('#addInput');
let listContainer = document.querySelector('.listContainer');
let list = [];


function renderList(arr){
    listContainer.innerHTML = ''; //very imp to empty
    arr.map((obj)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('list');
        newDiv.innerHTML = `
            <p>${obj.text}</p>
        `

        let deleteBtn = document.createElement('button');
        deleteBtn.innerText = "Delete";
        newDiv.appendChild(deleteBtn);
        deleteBtn.onclick = ()=>{
            handleDelete(obj.id);
        }
        listContainer.append(newDiv);
    })
}
renderList(list);

let handleInput = ()=>{
    let obj = {
        id : Date.now(),
        text : addInput.value
    }
    list.push(obj);
    renderList(list);
    addInput.value = '';

}

let handleDelete = (id)=>{
    let filterList = list.filter((obj)=>{ //here obj will be passed
        return obj.id !== id; // everything except the delete will be in the filterList
    })

    list = filterList;
    renderList(list);
}


addBtn.addEventListener('click', handleInput);
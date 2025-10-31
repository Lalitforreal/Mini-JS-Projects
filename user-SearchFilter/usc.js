
let userContainer = document.querySelector('.userContainer');
let searchInput = document.querySelector('#searchInput');

const users = [
    {
        profileUrl: 'https://cdn.pixabay.com/photo/2018/01/15/08/34/woman-3083453_1280.jpg',
        name: 'Pankaj Tripathi',
        email: 'pankajmirja@tripathi.com',
    },
    {
        profileUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSLgW0m3TnEd8WIBSAej73ovDkRXGBukPkaQ&s',
        name: 'Munna Bhaiya',
        email: 'Munnababu@gmail.com',
    },
    {
        profileUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSLgW0m3TnEd8WIBSAej73ovDkRXGBukPkaQ&s',
        name: 'munna don',
        email: 'munnadudu@gmail.com',
    },
    {
        profileUrl: 'https://images.squarespace-cdn.com/content/v1/6204821bfe06b76898b431c5/80221678-0539-4495-8007-0096677e1eca/image00016.jpeg',
        name: 'Guddu Bhaiya',
        email: 'guddupandit@gmail.com',
    },
]

const renderUsers = (arr)=>{
    //shuru me before mapping let teh inner html be empty 
    userContainer.innerHTML = '';
    //for showcasing
    arr.map((obj)=>{
        //yaha destructure kar sakte hai 
        let {profileUrl,name,email} = obj;
        //you can use it directly dynamically instead of hardcoding now 
        //add inner html now
        let divElem = document.createElement('div');
        divElem.className = 'userItem';
        divElem.innerHTML = `
            <div class="image">
                <img src = ${profileUrl} alt = "error loading image">
            </div>
            <div class="userDetails">
                <h3>${name}</h3>
                <p>${email}</p>
            </div>
        `
        userContainer.append(divElem);
    })

}

renderUsers(users); //initial render

//logic behind searching (jitna likho utne values aajae)
function handleSearch(e){
    console.log(searchInput.value);//either this or e.target.value and here event is input so 
    let userInput = e.target.value;
    //logic behind searching on Notion 
    let filterUser = users.filter((obj)=>{
        return obj.name.toLowerCase().includes(userInput.toLowerCase());
    })
    renderUsers(filterUser);
}  


searchInput.addEventListener('input', handleSearch);

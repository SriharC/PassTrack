
document.addEventListener("DOMContentLoaded", async ()=>{
    const passwordsLists = document.querySelector(".passwordLists");

    var items = JSON.parse(localStorage.getItem("PasswordsList"));
    if (items == null || items == []){

    }else{
        for(let i=0; i<items.length; i++){
            passwordsLists.innerHTML += `
            <li  class="iterateList">
            <input class="editAll" type="text" id="editURL" value="${items[i].url}" disabled>
            <input class="editAll" type="text" id="editUsername" value="${items[i].username}" disabled>
            <input class="editAll" type="text" id="editPassword" value="${items[i].password}" disabled>
            <div class="edit">
                <button class="startEdit"><i class="fa fa-pencil"></i></button>
                <button class="remove"><i class="fa fa-trash-o"></i></button>
            </div>
            </li>
            <hr>
            `
        };

    }

    const editButtons = document.querySelectorAll(".edit");
    const allItems = document.querySelectorAll(".iterateList")


    for(let i=0; i<editButtons.length; i++){
        let cache;
        editButtons[i].addEventListener('mouseover', ()=>{
            
            var saveChange = editButtons[i].querySelector(".saveChanges");
            var cancelChange = editButtons[i].querySelector(".cancelChanges");
            var startEdit = editButtons[i].querySelector(".startEdit");
            var removeItem = editButtons[i].querySelector(".remove");
            var allInputs = allItems[i].querySelectorAll(".editAll");

            const saveChanges = () =>{
                    items[i].url = allItems[i].querySelector("#editURL").value;
                    items[i].username = allItems[i].querySelector("#editUsername").value;
                    items[i].password = allItems[i].querySelector("#editPassword").value;
                    
                    allInputs.forEach(element => {
    
                        element.disabled = true;
                        element.style.border = "none";
      
                    });
                    editButtons[i].innerHTML = `
                    <button class="startEdit"><i class="fa fa-pencil"></i></button>
                    <button class="remove"><i class="fa fa-trash-o"></i></button>
                    `;
                    saveToLocal(items);
                    
            }
            const cancelChanges = () =>{
                allItems[i].querySelector("#editURL").value = cache.url;
                allItems[i].querySelector("#editUsername").value = cache.username;
                allItems[i].querySelector("#editPassword").value = cache.password;
                allInputs.forEach(element => {
                    element.disabled = true;
                    element.style.border = "none";
                });
                editButtons[i].innerHTML = `
                <button class="startEdit"><i class="fa fa-pencil"></i></button>
                <button class="remove"><i class="fa fa-trash-o"></i></button>
                `;
            }
            const startEditing = () => {
                cache = {
                    url: allItems[i].querySelector("#editURL").value,
                    username: allItems[i].querySelector("#editUsername").value,
                    password: allItems[i].querySelector("#editPassword").value
                };
                editButtons[i].innerHTML = `
                <button class="saveChanges"><i class="fa fa-check-square"></i></button>
                <button class="cancelChanges"><i class="fa fa-times"></i></button>
                `;

                allInputs.forEach(element => {
                    element.disabled = false;
                    element.style.border = "1px solid black";
                });
            }

            const remove = () => {
                let arr = items.filter(item => item !== items[i])
                saveToLocal(arr);
                location.reload(true);
            }

            if(startEdit == null){
                saveChange.addEventListener("click", saveChanges); 
                cancelChange.addEventListener("click", cancelChanges);
            }else if(saveChange == null){
                startEdit.addEventListener("click", startEditing);
                removeItem.addEventListener("click", remove);
            }


        })
    }

});

const saveToLocal = (arr) =>{
    localStorage.setItem("PasswordsList", JSON.stringify(arr));
}



// <!-- Optional JavaScript; choose one of the two! -->

//     <!-- Option 1: Bootstrap Bundle with Popper -->
     src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"

    // <!-- Option 2: Separate Popper and Bootstrap JS -->

     src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
        crossorigin="anonymous"
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
        integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy"
        crossorigin="anonymous"
        
            function getAndUpdate(){
                console.log("updating List");
                tit = document.getElementById("title").value;
                desc = document.getElementById("description").value;
                if(localStorage.getItem('itemsJson')==null){
                    itemsJsonArray =[];
                    itemsJsonArray.push([tit,desc]);
                    localStorage.setItem('itemsJson',JSON.stringify(itemsJsonArray));
                }
                else{
                    itemsJsonArrayStr=localStorage.getItem('itemsJson');
                    itemsJsonArray=JSON.parse(itemsJsonArrayStr);
                    itemsJsonArray.push([tit,desc]);
                    localStorage.setItem('itemsJson',JSON.stringify(itemsJsonArray));
                  
                }
                update();
            }
            function update(){
                
                if(localStorage.getItem('itemsJson')==null){
                    itemsJsonArray =[];                 
                    localStorage.setItem('itemsJson',JSON.stringify(itemsJsonArray))
                }
                else{
                    itemsJsonArrayStr=localStorage.getItem('itemsJson');
                    itemsJsonArray=JSON.parse(itemsJsonArrayStr)
             
                }
                let tableBody =document.getElementById('tableBody');
                let str ="";
                itemsJsonArray.forEach((element,index )=> {
                    str+=`
                    <tr>
                            <th scope="row">${index +1}</th>
                            <td>${element[0]}</td>
                            <td>${element[1]}</td>
                            <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td>
                          </tr>`;
                    
                });
                tableBody.innerHTML = str;
            }
            add=document.getElementById("add");
            add.addEventListener("click", getAndUpdate);
            update();
            function deleted (itemIndex){
                console.log("Delete" ,itemIndex);
                itemsJsonArrayStr = localStorage.getItem('itemsJson');
                itemsJsonArray = JSON.parse(itemsJsonArrayStr);
                itemsJsonArray.splice(itemIndex,1);
                localStorage.setItem('itemsJson',JSON.stringify(itemsJsonArray));
                update();

            }
        

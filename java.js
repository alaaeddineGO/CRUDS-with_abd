const title = document.getElementById('title');
const price = document.getElementById('price');
const taxes = document.getElementById('taxes');
const ads = document.getElementById('ads');
const discount = document.getElementById('discount');
const total = document.getElementById('total');
const count = document.getElementById('count');
const category = document.getElementById('category');
const btn_create = document.getElementById('btn_create');
const btn_ser_title = document.getElementById('btn_ser_title');
const btn_ser_category = document.getElementById('btn_ser_category');
const delete_all = document.getElementById('delete_all');
const update = document.getElementById('update');
const deleteb = document.getElementById('delete');
console.log(count.value)
let mood='create';
let index;
//get total
    function getTotal(){
        if (price.value != '') {
            let tot = (+price.value + +taxes.value + +ads.value) - +discount.value;
            total.innerHTML = tot
            total.style.backgroundColor='#1ea927'
        }else{
            total.innerHTML = ''
            total.style.backgroundColor='#ce1b1b'            
        }

    }
//creat prodact
    let dataPro;
    if (localStorage.prodact != null) {
        dataPro = JSON.parse(localStorage.prodact);
    }else{
        dataPro = []
    }
    btn_create.onclick = function(){
        let newPro = {
            title : title.value.toLowerCase(),
            price : price.value,
            taxes : taxes.value,
            ads : ads.value,
            discount : discount.value,
            total : total.innerHTML,
            count : count.value,
            category : category.value.toLowerCase(),
        }
        if (title.value != '' && category.value != '' && price.value) {
            if (mood === 'create') {
                if (newPro.count>1) {
                    for (let i = 0; i < newPro.count; i++) {
                        dataPro.push(newPro)
                    }
                } else {
                    dataPro.push(newPro)
                }    
            } else {
                dataPro[index]=newPro;
                mood = 'create'
                btn_create.innerHTML='create'
                count.style.display= 'block'
            }    
            clearData();
        }      
        localStorage.setItem('prodact',JSON.stringify(dataPro))
        showData();
    }
    
//clear data
    
    function clearData() {
        title.value = '';
        price.value = '';
        taxes.value = '';
        ads.value = '';
        discount.value = '';
        total.innerHTML = '';
        count.value = '';
        category.value = '';
        total.innerHTML = '';
        category.value = '';
    }
    
//read
    
    function showData() {
        getTotal()
        let table = '';
        for (let i = 0; i < dataPro.length; i++) {
            table += `
            <tr>
            <td>${i+1}</td>
            <td>${dataPro[i].title}</td>
            <td>${dataPro[i].price}</td>
            <td>${dataPro[i].taxes}</td>
            <td>${dataPro[i].ads}</td>
            <td>${dataPro[i].discount}</td>
            <td>${dataPro[i].total}</td>
            <td>${dataPro[i].category}</td>
            <td><button onclick='updateData(${i})' id="update">update</button></td>
                <td><button onclick='deleteData(${i})' id="delete">delete</button></td>
            </tr>
            `
        }
        document.getElementById('tbody').innerHTML = table;
        if (dataPro.length>0) {
            delete_all.innerHTML = ` <button onclick='delete_All()'>delete all (${dataPro.length})</button> `
        }else{
            delete_all.innerHTML = ``
        }
    }
showData()
    
//delete
    
    function deleteData(i) {
        dataPro.splice(i,1)
        localStorage.prodact = JSON.stringify(dataPro)
        showData()
        
    }

//delete all
    function delete_All(){
        localStorage.clear();
        dataPro.splice(0)
        showData()
        
    }
    
//count
    
//update
    
    function updateData(i){
        title.value=dataPro[i].title;
        price.value=dataPro[i].price;
        taxes.value=dataPro[i].taxes;
        ads.value=dataPro[i].ads;
        discount.value=dataPro[i].discount;
        getTotal()
        count.style.display = 'none'
        category.value=dataPro[i].category;
        btn_create.innerHTML='update'
        mood='update'
        index = i;
        scroll({
        top:0,
        behavior:"smooth"
    })
}

//search

let searchMood = 'title';
function getSearchMood(id){
    const search = document.getElementById('search');
    if (id === "btn_ser_title") {
        searchMood = 'title';
    } else {
        searchMood = 'category';
    }
    search.setAttribute('placeholder','search by ' + searchMood)
    search.focus();
    search.value='';
    showData();

    function newFunction() {
        search.if(condition); {
            Placeholder;
        } 'search by title';
    }
}

function searchData(value) {
    let table = '';
    for (let i = 0; i < dataPro.length; i++) {
    if (searchMood=='title') {
            if(dataPro[i].title.includes(value.toLowerCase())){
                table += `
            <tr>
                <td>${i}</td>
                <td>${dataPro[i].title}</td>
                <td>${dataPro[i].price}</td>
                <td>${dataPro[i].taxes}</td>
                <td>${dataPro[i].ads}</td>
                <td>${dataPro[i].discount}</td>
                <td>${dataPro[i].total}</td>
                <td>${dataPro[i].category}</td>
                <td><button onclick='updateData(${i})' id="update">update</button></td>
                <td><button onclick='deleteData(${i})' id="delete">delete</button></td>
            </tr>
            `               
            }
            }
    else {
            if(dataPro[i].category.includes(value.toLowerCase())){
                table += `
            <tr>
                <td>${i}</td>
                <td>${dataPro[i].title}</td>
                <td>${dataPro[i].price}</td>
                <td>${dataPro[i].taxes}</td>
                <td>${dataPro[i].ads}</td>
                <td>${dataPro[i].discount}</td>
                <td>${dataPro[i].total}</td>
                <td>${dataPro[i].category}</td>
                <td><button onclick='updateData(${i})' id="update">update</button></td>
                <td><button onclick='deleteData(${i})' id="delete">delete</button></td>
            </tr>
            `               
            }
    }
    }
    document.getElementById('tbody').innerHTML = table;
}

//clean data


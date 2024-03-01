const title = document.getElementById('title');
const price = document.getElementById('price');
const taxes = document.getElementById('taxes');
const ads = document.getElementById('ads');
const discount = document.getElementById('discount');
const total = document.getElementById('total');
const category = document.getElementById('category');
const btn_create = document.getElementById('btn_create');
const searsh = document.getElementById('searsh');
const btn_ser_title = document.getElementById('btn_ser_title');
const btn_ser_category = document.getElementById('btn_ser_category');
const btn_delete_all = document.getElementById('btn_delete_all');
const update = document.getElementById('update');
const deleteb = document.getElementById('delete');

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
    if (localStorage.dataPro != null) {
        dataPro = JSON.parse(localStorage.prodact);
    }else{
        dataPro = []
    }
    btn_create.onclick = function(){
        let newPro = {
            title : title.value,
            price : price.value,
            taxes : taxes.value,
            ads : ads.value,
            discount : discount.value,
            total : total.innerHTML,
            category : category.value,
        }
        dataPro.push(newPro)
        localStorage.setItem('prodact',JSON.stringify(dataPro))
        clearData();
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
        category.value = '';
        total.innerHTML = '';
        category.value = '';
    }

    //read

    function showData() {
        let table = '';
        for (let i = 0; i < dataPro.length; i++) {
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
                <td><button id="update">update</button></td>
                <td><button id="delete">delete</button></td>
            </tr>
            `
            
        }
        document.getElementById('tbody').innerHTML = table;
    }
    showData()
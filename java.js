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

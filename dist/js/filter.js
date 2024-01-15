
// open filter

let openFilter=document.getElementById('openFilter');
let filterModal=document.getElementById('filterModal');
let closeFilter=document.getElementById('closeFilter');
let selectedFilter=document.getElementById('selectedFilter');
let openSelectedFilter=Array.from(document.getElementsByClassName('openSelectedFilter'));
let closeSelectedFilter=document.getElementById('closeSelectedFilter');
let openPriceLimit=document.getElementById('openPriceLimit');
let priceModal=document.getElementById('priceModal');
let closePriceModal=document.getElementById('closePriceModal');
let categoryModal=document.getElementById('categoryModal');
let openCategory=document.getElementById('openCategory');

openCategory.addEventListener('click',function () {
    categoryModal.classList.toggle('active');
});

openFilter.addEventListener('click',function () {
    filterModal.classList.add('active');
});
closeFilter.addEventListener('click',function () {
    filterModal.classList.remove('active');
});
openSelectedFilter.forEach((item)=>{
    item.addEventListener('click',function () {
        selectedFilter.classList.add('active');
    });
});
closeSelectedFilter.addEventListener('click',function () {
    selectedFilter.classList.remove('active');
});
openPriceLimit.addEventListener('click',function () {
    priceModal.classList.add('active');
});
closePriceModal.addEventListener('click',function () {
    priceModal.classList.remove('active');
});

// edit address
let editAddressBtn = document.getElementById('editAddressBtn');
let editAddress = document.getElementById('editAddress');
let closeAddressModal=document.getElementById('closeAddressModal');

editAddressBtn.addEventListener('click', function () {
    editAddress.classList.add('active');
    overlay.classList.add('active');
})
closeAddressModal.addEventListener('click', function () {
    editAddress.classList.remove('active');
    overlay.classList.remove('active');
})
overlay.addEventListener('click', function () {
    editAddress.classList.remove('active');
    overlay.classList.remove('active');
})
/////edit map
let editMapBtn = document.getElementById('editMapBtn');
let saveMapModal = document.getElementById('saveMapModal');
let closeSaveMapModal = document.getElementById('closeSaveMapModal');
let overlay2 = document.getElementById('overlay2');

editMapBtn.addEventListener('click', function () {
    saveMapModal.classList.add('active');
    overlay2.classList.add('active');
})
closeSaveMapModal.addEventListener('click', function () {
    saveMapModal.classList.remove('active');
    overlay2.classList.remove('active');
})
overlay2.addEventListener('click', function () {
    saveMapModal.classList.remove('active');
    overlay2.classList.remove('active');
})
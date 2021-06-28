//Dom manipulation
const fileInput = document.querySelector('#fileInput');
const addBtn = document.querySelector('#addBtn');
const gallery = document.querySelector('.galleryContainer');

//Gallery array
let images = [];

//Local Storage Set Item
if(!localStorage.getItem('images')) {
    localStorage.setItem('images', JSON.stringify(images));
}

//Local Storage Get Item
images = JSON.parse(localStorage.getItem('images'));

//Reload Local Storage
const loadStorage = () => {
    localStorage.setItem('images', JSON.stringify(images));;
    addImages();
}

//Input File background color
fileInput.addEventListener('change', () => {
    (fileInput.value) ? fileInput.style.background = '#255bf0' : fileInput.style.background = '#ff0000';
});

//Add Image in Gallery
addBtn.addEventListener('click', () => {
    let reader = new FileReader();
        reader.addEventListener('load', () => {
            images.push(reader.result);
            loadStorage();
        })
        reader.readAsDataURL(fileInput.files[0]);
        fileInput.value = null;

        //Input File background color
        (fileInput.value) ? fileInput.style.background = '#255bf0' : fileInput.style.background = '#ff0000';
})

//Gallery set funtoin
function addImages() {

    gallery.innerHTML = '';
        images.forEach((item, index) => {
            gallery.innerHTML += `
                <div data-target="${index}" class="img">
                    <img src="${item}" alt="Gallery Image ${index+1}">
                </div>`;
        })
};
addImages();

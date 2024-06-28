
// Change images on desktop layout

function changeImages() {
    const mainPhoto = document.getElementById('main-photo');
    const thmb1 = document.getElementById('thumbnail-1');
    const thmb2 = document.getElementById('thumbnail-2');
    const thmb3 = document.getElementById('thumbnail-3');
    const thmb4 = document.getElementById('thumbnail-4');

    thmb1.addEventListener('click', () => {
        mainPhoto.innerHTML = '<img src="./images/image-product-1.jpg" alt="">';
    })

    thmb2.addEventListener('click', () => {
        mainPhoto.innerHTML = '<img src="./images/image-product-2.jpg" alt="">'
    })

    thmb3.addEventListener('click', () => {
        mainPhoto.innerHTML = '<img src="./images/image-product-3.jpg" alt="">'
    })

    thmb4.addEventListener('click', () => {
        mainPhoto.innerHTML = '<img src="./images/image-product-4.jpg" alt="">'
    })
}

changeImages();

// Change value of counter

function countCart() {
    const plusBtn = document.getElementById('plus-button');
    const minusBtn = document.getElementById('minus-button');
    const counter = document.getElementById('product-counter');

    let count = 0;
    plusBtn.addEventListener('click', () => {
        count += 1
        counter.innerText = `${count}`;
    })

    minusBtn.addEventListener('click', () => {
        count -= 1
        counter.innerText = `${count}`;
    })

}

countCart();

// Open/close mobile menu

function toggleMobMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburger = document.getElementById('hamburger');
    const closeIcon = document.getElementById('close-icon');

    hamburger.addEventListener('click', () => {
        mobileMenu.style.display = 'flex';;
    })

    closeIcon.addEventListener('click', () => {
        mobileMenu.style.display = 'none';;
    })
}

toggleMobMenu();


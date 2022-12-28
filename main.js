const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenuImage = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const arrowShoppingCart = document.querySelector('#arrowShoppingCart');


menuEmail.addEventListener('click', toggleDesktopMenu);
mobileMenuImage.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);
arrowShoppingCart.addEventListener('click', closeShoppingCart);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    if (!shoppingCartContainer.classList.contains('inactive')) {
        shoppingCartContainer.classList.add('inactive');
    }
}


function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    if (!shoppingCartContainer.classList.contains('inactive')) {
        shoppingCartContainer.classList.add('inactive');
    }
    if (!productDetailContainer.classList.contains('inactive')) {
        productDetailContainer.classList.add('inactive');
    }
}

function toggleCarritoAside() {
    shoppingCartContainer.classList.toggle('inactive');
    if (!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.add('inactive');
    }
    if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive');
    }
    if (!productDetailContainer.classList.contains('inactive')) {
        productDetailContainer.classList.add('inactive');
    }

}

function openPoductDetailAside() {
    productDetailContainer.classList.remove('inactive');
    if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive');
    }
    if (!shoppingCartContainer.classList.contains('inactive')) {
        shoppingCartContainer.classList.add('inactive');
    }

}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

function closeShoppingCart() {
    shoppingCartContainer.classList.add('inactive');
}

const productListFromBackend = [];

productListFromBackend.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productListFromBackend.push({
    name: 'Screen',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productListFromBackend.push({
    name: 'Computer',
    price: 520,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


function renderProducts(productList) {
    for (product of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openPoductDetailAside);
        productImg.style.cursor = 'pointer';

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        productInfoDiv.appendChild(productPrice);

        const productName = document.createElement('p');
        productName.innerText = product.name;
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');

        const imgAddToCart = document.createElement('img');
        imgAddToCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(imgAddToCart);

        productInfo.append(productInfoDiv, productInfoFigure);

        productCard.append(productImg, productInfo);

        cardsContainer.appendChild(productCard);

    }
}

renderProducts(productListFromBackend);

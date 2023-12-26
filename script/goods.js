const goodsFunc = () => {
    const container = document.querySelector('#goods-container')

    const goodArray = [
        {
            name: 'Ролл угорь стандарт',
            description: 'Рис, угорь, соус унаги, кунжут, водоросли нори.',
            price: 250,
            image: 'image1.jpg'
        },
        {
            name: 'Калифорния лосось стандарт',
            description: 'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
            price: 395,
            image: 'image2.jpg'
        },
        {
            name: 'Окинава стандарт',
            description: ' Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
            price: 250,
            image: 'image3.jpg'
        },
        {
            name: 'Цезарь маки хl',
            description: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
            price: 250,
            image: 'image4.jpg'
        },
        {
            name: 'Ясай маки стандарт 185 г',
            description: 'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
            price: 250,
            image: 'image5.jpg'
        },
        {
            name: 'Ролл с креветкой стандарт',
            description: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
            price: 250,
            image: 'image6.jpg'
        },
        
    ]

    const loading = () => {
        container.innerHTML = '<p style="width: 100%; text-align: center;">Загрузка</p>'
    }

    const renderGoods = (array) => {
        container.innerHTML = ''

        array.forEach((card) => {
            container.insertAdjacentHTML('beforeend', `               
                <div class="products-card">
                    <div class="products-card__image">
                        <img src="/images/goods/${card.image}" alt="${card.image}">
                    </div>
                    <div class="products-card__description">
                        <div class="products-card__description-row">
                            <h5 class="products-card__description--name">
                            ${card.name}
                            </h5>
                        </div>
                        <div class="products-card__description-row">
                            <p class="products-card__description--text">
                            ${card.description}
                            </p>
                        </div>
                        <div class="products-card__description-row">
                            <div class="products-card__description-controls">
                                <button class="btn btn-primery">
                                    В корзину  
                                    <img src="./images/icons/shopping-cart-white.svg" alt="shopping-cart">
                                </button>
                                <span class="products-card__description-controls--price">
                                ${card.price} ₽
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            `)
        });
    }

    if (container) {
        loading()

        setTimeout(() => {
            renderGoods(goodArray)
        }, 1000)
    }
}

goodsFunc()

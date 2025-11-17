//Инкапсулируем  переменные
const cart = () => {
    const cartBtn = document.getElementById('cart')
    const cart = document.querySelector('.cart')
    const cartClose = cart.querySelector('.cart-close')


    //Показываем модальное окно
    const openCart = () => {
        cart.style.display = 'flex'
    }
    //Убираем окно
    const closeCard = () => {
        cart.style.display = ''

    }
    //При клике выполняем функцию openCart()
    cartBtn.addEventListener('click', () => {
        openCart()
    })

    //При клике выполняем функцию сloseCart()
    cartClose.addEventListener('click', () => {
        closeCard()
    })


}


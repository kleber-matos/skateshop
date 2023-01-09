const menu = document.querySelector('button')
const fechar = document.querySelector('#fechar')

menu.addEventListener('click', () => {
    fechar.classList.toggle('block')

    if(fechar.classList.contains('block')){
        fechar.classList.add('block')
        menu.innerHTML = `<i class="fa-solid fa-x"></i>`

    }else {
        fechar.classList.remove('block')
        menu.innerHTML= `<i class="fa-solid fa-bars"></i>`
    }
})
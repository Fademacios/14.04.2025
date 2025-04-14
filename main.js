const btn = document.querySelector('button')
const display = document.querySelector('main')

btn.addEventListener('click', function(){
    const newelement = document.createElement('p')
    newelement.style.color = '#f00'
    newelement.textContent = 'nowy element'
    display.append(newelement)

})

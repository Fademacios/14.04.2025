const btn = document.querySelector('button')
const display = document.querySelector('main')

btn.addEventListener('click', function(){
    const newelement = document.createElement('p')
    newelement.style.color = '#f00'
    newelement.textContent = 'nowy element'
    display.append(newelement)


    const newElementH3 = document.createElement('h3');
            newElementH3.style.color.backgroundColor = '#ff0';
            const h3TextNode = document.createTextNode('Jakiś tytuł');

            newElementH3.append(h3TextNode);

            display.append(newElementH3, newElementP, 'dodany tekst');
})

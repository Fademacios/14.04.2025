const btn = document.querySelector('button')
const display = document.querySelector('main')

btn.addEventListener('click', function(){
    const btn = document.querySelector('button');
        const display = document.querySelector('main');
        let i=1
        btn.addEventListener('click', function(){
            const newElement = document.createElement('p');
            newElement.style.color = '#f00';
            newElement.textContent = 'Nowy element'
            display.append(newElement);
        

            const newElementH3 = document.createElement('h3');
            newElementH3.style.color.backgroundColor = '#ff0';
            const h3TextNode = document.createTextNode('Jakiś tytuł $(i)');
            newElementH3.addEventListener('click', function (evt){
                console.log(this);
                this.remove()
            })
            newElementH3.append(h3TextNode);

            display.append(newElementH3, newElement, 'dodany tekst');
            i++;
})

const btn = document.querySelector('button');
        const display = document.querySelector('main');
        let i=1
btn.addEventListener('click', function(){
    const newElementP = document.createElement('p');
    newElementP.style.color = '#f00';
    newElementP.textContent = 'Nowy element'
    display.append(newElement);
        

            const newElementH3 = document.createElement('h3');
            newElementH3.style.color.backgroundColor = '#ff0';
            const h3TextNode = document.createTextNode('Jakiś tytuł' $(i));
            newElementH3.addEventListener('click', function (evt){
                console.log(this);
                this.remove()
            })
            newElementH3.append(h3TextNode);

            display.append(newElementH3, newElementP, 'dodany tekst');
            i++;
})

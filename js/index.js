const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Me lo dices en serio?')
    alert('Me haces muy feliz mi amor, imagino le diste por curiosidad pero jaja me hace feliz igual :c')
    alert('Te amo mucho nunca lo olvides ♡ ')
    alert('Espero que la pases bien este dia, queria presentarte algo diferente pero tuve unos problemas con la apk ;-; ')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})
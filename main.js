function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if (fano.value.length == 0 || Number(fano.value) > ano) {
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 5) {
                //Bebê
                img.setAttribute('src', './fts-man/h-baby01.jpeg')
            } else if (idade >= 6 && idade <= 12) {
                //Criança
                img.setAttribute('src', './fts-man/h-children01.jpeg')
            } else if (idade >= 13 && idade <= 21) {
                //Jovem
                img.setAttribute('src', './fts-man/h-young01.jpg')
            } else if (idade >= 22 && idade <= 59) {
                //Adulto
                img.setAttribute('src', './fts-man/h-adult01.jpeg')
            } else {
                //Idoso
                img.setAttribute('src', './fts-man/h-elderly01.jpeg')
            }


        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 5) {
                //Bebê
                img.setAttribute('src', './fts-woman/w-baby01.jpeg')
            } else if (idade >= 6 && idade <= 12) {
                //Criança
                img.setAttribute('src', './fts-woman/w-children01.jpeg')
            } else if (idade >= 13 && idade <= 21) {
                //Jovem
                img.setAttribute('src', './fts-woman/w-young01.jpeg')
            } else if (idade >= 22 && idade <= 59){
                //Adulto
                img.setAttribute('src', './fts-woman/w-adult01.jpeg')
            } else {
                //Idoso
                img.setAttribute('src', './fts-woman/w-elderly01.jpeg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
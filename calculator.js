// récupérer le tableau de tt les chiffres
//faire un nouveau tableau avec les keycode en fct des nombres avec .map
//on utilise ici element.dataset.nomdudataset

let touche = [...document.querySelectorAll('.bouton')];
const listeKeycode = touche.map(touche => touche.dataset.key);
const ecran =document.querySelector('.ecran');

/*faire un événement en fonction de quant on presse on récupére le keycode*/

document.addEventListener('keydown',(e)=>{
    const valeur = e.keyCode.toString();
    calculer(valeur);
})

/*faire un événement en fonction de quant on clique on récupére le keycode */

document.addEventListener ('click',(e) => {
    const valeur=e.target.dataset.key;
    calculer(valeur);
})

const calculer =(valeur) => {
    if(listeKeycode.includes(valeur)){
        switch (valeur){
            case '8':
                ecran.textContent ="";
                break;
            case '13':
                const calcul =eval(ecran.textContent);
                ecran.textContent=calcul;  
                break;
            default:
                const indexKeycode = listeKeycode.indexOf(valeur);
                const touches = touche[indexKeycode];
                ecran.textContent += touches.innerHTML ; 
        }

    }
}

window.addEventListener('error' , (e) => {
    alert('Une erreur est survenue lors de votre saisie : '+ e.message)
})



const toggle=document.querySelector('#toggle');
const body=document.querySelector('body');
const touche2=document.querySelector('.touche');
//const button=document.querySelectorAll('button');
const bouton18=document.querySelector('button:nth-child(18)');
const bouton17=document.querySelector('button:nth-child(17)');
const bouton4=document.querySelector('button:nth-child(4)');
const button=document.querySelector('button');

toggle.onclick=function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    ecran.classList.toggle('active');
    touche2.classList.toggle('active');
  //  button.classList.toggle('active');
    bouton18.classList.toggle('active');
    bouton17.classList.toggle('active');
    bouton4.classList.toggle('active');
    button.classList.toggle('active');
}



/*
const btnToggle=document.querySelector('#toggle');
    const body=document.body;

btnToggle=addEventListener('click',() =>{
    if(body.classList.contains('active')){
        body.classList.add('desactive')
        body.classList.remove('active')
    }
    else if(body.classList.contains(desactive)){
        body.classList.add('active')
        body.classList.remove('desactive')

    }
})

*/
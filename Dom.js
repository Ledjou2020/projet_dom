let btnAll = document.querySelectorAll('.btn-plus');
btnAll.forEach((btn) =>{btn.addEventListener('click',ajouter)});

function ajouter(){
document.querySelector('.nb').value = parseInt(document.querySelector('.nb').value) +1;
col();
this

}

let btnMinusAll = document.querySelectorAll('.btn-moins')
btnMinusAll.forEach((btn) =>{btn.addEventListener('click',retirer)});

function retirer(){
    if(document.querySelector('.nb').value>0){
      document.querySelector('.nb').value = parseInt(document.querySelector('.nb').value) -1;
      col();
    }
   
}
function col(){
  let price = parseInt(document.querySelector('.price').innerHTML);
  let bn = parseInt(document.querySelector('.nb').value);
  let col= price*bn; 
  document.querySelector('.col').innerHTML = col + 'fr';
}
let bottn = document.querySelector('.ajout')
bottn.addEventListener('click',ajoutbottn)

function ajoutbottn(){
  let price = document.querySelector('.price_unit')
  document.querySelector('.box_second').innerHTML = document.querySelector('.box_second').innerHTML + '<tr> <td > <img class="image" src="13.jpg" alt=""></td><td> <input class="btn-moins" type="submit" value="-"> <input class="nb" type=text value="1"> <input class="btn-plus" type="submit" value="+"></td><td class="price">'+ price.value +'fr</td><td class="col">'+ price.value +' fr</td></tr>'
  loadNewElement();

}
function loadNewElement(){
  let btn = document.querySelector('.btn-plus');
  let btnMinus = document.querySelector('.btn-moins');

  btn.addEventListener('click', ajouter);
  btnMinus.addEventListener('click',retirer );

}